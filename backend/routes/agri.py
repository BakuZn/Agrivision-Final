from flask import Blueprint, jsonify, request

from services.agromonitoring_service import (
    create_polygon,
    get_current_weather,
    get_soil_data,
    get_weather_forecast,
)
from services.db_service import save_record
from services.disease_advisory_service import (
    build_mandi_summary,
    build_weather_summary,
    get_prediction_with_recommendation,
)
from services.file_upload_service import remove_temp_file, save_upload_to_temp
from services.mandi_service import get_mandi_prices

agri_bp = Blueprint("agri", __name__, url_prefix="/agri")


def _json_error(message, status_code=400):
    return jsonify({"error": message}), status_code


def _parse_float(value, field_name):
    if value in (None, ""):
        raise ValueError(f"Missing required field: {field_name}")

    try:
        return float(value)
    except (TypeError, ValueError) as exc:
        raise ValueError(f"Invalid numeric value for {field_name}") from exc


def _parse_int(value, field_name, default, minimum=0):
    if value in (None, ""):
        return default

    try:
        parsed = int(value)
    except (TypeError, ValueError) as exc:
        raise ValueError(f"Invalid integer value for {field_name}") from exc

    if parsed < minimum:
        raise ValueError(f"{field_name} must be greater than or equal to {minimum}")

    return parsed


def _has_value(value):
    return value not in (None, "")


def _has_content(response):
    return any(
        key in response and response[key]
        for key in ("prediction", "recommendation", "weather", "mandi")
    )


def _predict_from_upload(file_storage):
    temp_path = save_upload_to_temp(file_storage)
    try:
        return get_prediction_with_recommendation(temp_path)
    finally:
        remove_temp_file(temp_path)


@agri_bp.route("/weather", methods=["GET"])
def weather():
    try:
        lat = _parse_float(request.args.get("lat"), "lat")
        lon = _parse_float(request.args.get("lon"), "lon")
        return jsonify({"current_weather": get_current_weather(lat, lon)})
    except ValueError as exc:
        return _json_error(str(exc), 400)
    except RuntimeError as exc:
        return _json_error(str(exc), 502)


@agri_bp.route("/forecast", methods=["GET"])
def forecast():
    try:
        lat = _parse_float(request.args.get("lat"), "lat")
        lon = _parse_float(request.args.get("lon"), "lon")
        return jsonify({"forecast": get_weather_forecast(lat, lon)})
    except ValueError as exc:
        return _json_error(str(exc), 400)
    except RuntimeError as exc:
        return _json_error(str(exc), 502)


@agri_bp.route("/soil", methods=["GET"])
def soil():
    polyid = request.args.get("polyid")

    if not polyid:
        return _json_error("Missing required field: polyid", 400)

    try:
        return jsonify({"soil": get_soil_data(polyid)})
    except ValueError as exc:
        return _json_error(str(exc), 400)
    except RuntimeError as exc:
        return _json_error(str(exc), 502)


@agri_bp.route("/polygons", methods=["POST"])
def polygons():
    payload = request.get_json(silent=True) or {}
    name = payload.get("name", "AgriVision Polygon")
    coordinates = payload.get("coordinates")

    if not coordinates:
        return _json_error(
            "Missing required field: coordinates",
            400,
        )

    try:
        return jsonify({"polygon": create_polygon(name, coordinates)})
    except ValueError as exc:
        return _json_error(str(exc), 400)
    except RuntimeError as exc:
        return _json_error(str(exc), 502)


@agri_bp.route("/market-prices", methods=["GET"])
def market_prices():
    try:
        limit = _parse_int(request.args.get("limit"), "limit", 10, minimum=1)
        offset = _parse_int(request.args.get("offset"), "offset", 0, minimum=0)
        market_data = get_mandi_prices(
            state=request.args.get("state"),
            district=request.args.get("district"),
            market=request.args.get("market"),
            commodity=request.args.get("commodity"),
            limit=limit,
            offset=offset,
        )
        return jsonify({"market_prices": market_data})
    except ValueError as exc:
        return _json_error(str(exc), 400)
    except RuntimeError as exc:
        return _json_error(str(exc), 502)


@agri_bp.route("/advisory", methods=["POST"])
def advisory():
    payload = request.get_json(silent=True) if request.is_json else request.form
    response = {}
    errors = {}

    image = request.files.get("image")
    if image:
        try:
            response.update(_predict_from_upload(image))
        except Exception as exc:
            errors["prediction"] = str(exc)

    lat = payload.get("lat")
    lon = payload.get("lon")
    if _has_value(lat) or _has_value(lon):
        try:
            parsed_lat = _parse_float(lat, "lat")
            parsed_lon = _parse_float(lon, "lon")
            current_weather = get_current_weather(parsed_lat, parsed_lon)
            forecast = get_weather_forecast(parsed_lat, parsed_lon)
            response["weather"] = build_weather_summary(current_weather, forecast)
        except (ValueError, RuntimeError) as exc:
            errors["weather"] = str(exc)

    polyid = payload.get("polyid")
    if polyid:
        try:
            response["soil"] = get_soil_data(polyid)
        except RuntimeError as exc:
            errors["soil"] = str(exc)

    market_fields = {
        "state": payload.get("state"),
        "district": payload.get("district"),
        "market": payload.get("market"),
        "commodity": payload.get("commodity"),
    }
    include_market = any(value for value in market_fields.values())
    if include_market:
        try:
            limit = _parse_int(payload.get("limit"), "limit", 5, minimum=1)
            offset = _parse_int(payload.get("offset"), "offset", 0, minimum=0)
            market_data = get_mandi_prices(
                state=market_fields["state"],
                district=market_fields["district"],
                market=market_fields["market"],
                commodity=market_fields["commodity"],
                limit=limit,
                offset=offset,
            )
            response["mandi"] = build_mandi_summary(market_data, limit=limit)
        except (ValueError, RuntimeError) as exc:
            errors["market_prices"] = str(exc)

    if not response and not errors:
        return _json_error(
            "Provide at least one of: image, lat/lon, polyid, or market filters",
            400,
        )

    if _has_content(response):
        try:
            saved_record = save_record(response)
            response["record_id"] = saved_record["id"]
            response["timestamp"] = saved_record["timestamp"]
        except RuntimeError as exc:
            errors["history"] = str(exc)

    if errors:
        response["errors"] = errors

    return jsonify(response)

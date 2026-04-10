from services.disease_service import predict_disease
from services.recommendation_service import get_recommendation
from datetime import datetime, timezone


def get_prediction_with_recommendation(image_path):
    prediction = predict_disease(image_path)
    recommendation = get_recommendation(
        prediction["label"],
        prediction["confidence"],
    )

    return {
        "prediction": prediction,
        "recommendation": recommendation,
    }


def _kelvin_to_celsius(value):
    if value is None:
        return None
    return round(value - 273.15, 1)


def _extract_condition(payload):
    weather_items = payload.get("weather", [])
    if not weather_items:
        return "Unknown"

    description = weather_items[0].get("description", "Unknown")
    return description.title()


def _format_forecast_time(item):
    if item.get("dt_txt"):
        return item["dt_txt"]

    if item.get("dt"):
        return datetime.fromtimestamp(
            item["dt"],
            tz=timezone.utc,
        ).isoformat()

    return "Unknown"


def build_weather_summary(current_weather, forecast_data, limit=6):
    if not current_weather:
        return None

    main = current_weather.get("main", {})
    wind = current_weather.get("wind", {})
    location_name = current_weather.get("name") or "Selected Farm"
    condition = _extract_condition(current_weather)
    temperature_c = _kelvin_to_celsius(main.get("temp"))
    humidity = main.get("humidity")

    forecast_items = []
    for item in (forecast_data or {}).get("list", [])[:limit]:
        item_main = item.get("main", {})
        forecast_items.append(
            {
                "time": _format_forecast_time(item),
                "condition": _extract_condition(item),
                "temperature_c": _kelvin_to_celsius(item_main.get("temp")),
                "humidity": item_main.get("humidity"),
                "wind_speed": item.get("wind", {}).get("speed"),
            }
        )

    summary = condition
    if temperature_c is not None:
        summary = f"{condition}, {temperature_c}C"
    if humidity is not None:
        summary = f"{summary} with {humidity}% humidity"

    return {
        "location": location_name,
        "summary": summary,
        "condition": condition,
        "temperature_c": temperature_c,
        "humidity": humidity,
        "wind_speed": wind.get("speed"),
        "forecast": forecast_items,
    }


def build_mandi_summary(market_data, limit=5):
    records = (market_data or {}).get("records", [])
    summary = []

    for record in records[:limit]:
        summary.append(
            {
                "arrival_date": record.get("arrival_date"),
                "commodity": record.get("commodity"),
                "state": record.get("state"),
                "district": record.get("district"),
                "market": record.get("market"),
                "variety": record.get("variety"),
                "min_price": record.get("min_price"),
                "max_price": record.get("max_price"),
                "modal_price": record.get("modal_price"),
            }
        )

    return summary

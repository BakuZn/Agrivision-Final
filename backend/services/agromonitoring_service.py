import os

import requests
from env_loader import load_env_file

DEFAULT_CURRENT_WEATHER_URL = "https://api.agromonitoring.com/agro/1.0/weather"
DEFAULT_FORECAST_URL = "https://api.agromonitoring.com/agro/1.0/weather/forecast"
DEFAULT_POLYGON_URL = "https://api.agromonitoring.com/agro/1.0/polygons"
DEFAULT_SOIL_URL = "https://api.agromonitoring.com/agro/1.0/soil"


def _require_env(name, default=None):
    load_env_file()
    value = os.getenv(name, default)
    if not value:
        raise ValueError(f"Missing environment variable: {name}")
    return value


def _request_json(method, url, *, params=None, json=None):
    try:
        response = requests.request(
            method,
            url,
            params=params,
            json=json,
            timeout=20,
        )
        response.raise_for_status()
        return response.json()
    except requests.RequestException as exc:
        response = getattr(exc, "response", None)
        details = ""

        if response is not None:
            body = response.text.strip().replace("\n", " ")
            details = f" Upstream response: {response.status_code}"
            if body:
                details += f" {body[:200]}"

        raise RuntimeError(f"Agromonitoring request failed.{details}") from exc


def _base_params(extra=None):
    params = {"appid": _require_env("AGROMONITORING_API_KEY")}
    if extra:
        params.update(extra)
    return params


def _normalize_polygon_coordinates(coordinates):
    if not isinstance(coordinates, list) or not coordinates:
        raise ValueError("coordinates must be a non-empty list")

    first_item = coordinates[0]
    if (
        isinstance(first_item, (list, tuple))
        and first_item
        and isinstance(first_item[0], (int, float))
    ):
        ring = [list(point) for point in coordinates]
        if ring[0] != ring[-1]:
            ring.append(ring[0])
        return [ring]

    if (
        isinstance(first_item, (list, tuple))
        and first_item
        and isinstance(first_item[0], (list, tuple))
    ):
        normalized = []
        for ring in coordinates:
            normalized_ring = [list(point) for point in ring]
            if normalized_ring and normalized_ring[0] != normalized_ring[-1]:
                normalized_ring.append(normalized_ring[0])
            normalized.append(normalized_ring)
        return normalized

    raise ValueError("coordinates must be GeoJSON polygon coordinates")


def get_current_weather(lat, lon):
    url = _require_env(
        "AGROMONITORING_CURRENT_WEATHER_URL",
        DEFAULT_CURRENT_WEATHER_URL,
    )
    return _request_json(
        "GET",
        url,
        params=_base_params({"lat": lat, "lon": lon}),
    )


def get_weather_forecast(lat, lon):
    url = _require_env("AGROMONITORING_FORECAST_URL", DEFAULT_FORECAST_URL)
    return _request_json(
        "GET",
        url,
        params=_base_params({"lat": lat, "lon": lon}),
    )


def get_soil_data(polyid):
    url = _require_env("AGROMONITORING_SOIL_URL", DEFAULT_SOIL_URL)
    return _request_json(
        "GET",
        url,
        params=_base_params({"polyid": polyid}),
    )


def create_polygon(name, coordinates):
    url = _require_env("AGROMONITORING_POLYGON_URL", DEFAULT_POLYGON_URL)
    payload = {
        "name": name,
        "geo_json": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": _normalize_polygon_coordinates(coordinates),
            },
        },
    }
    return _request_json(
        "POST",
        url,
        params=_base_params(),
        json=payload,
    )

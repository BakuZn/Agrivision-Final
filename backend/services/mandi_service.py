import os

import requests
from env_loader import load_env_file

DEFAULT_MANDI_BASE_URL = "https://api.data.gov.in/resource"
DEFAULT_MANDI_RESOURCE_ID = "9ef84268-d588-465a-a308-a864a43d0070"


def _require_env(name, default=None):
    load_env_file()
    value = os.getenv(name, default)
    if not value:
        raise ValueError(f"Missing environment variable: {name}")
    return value


def _request_json(url, params):
    try:
        response = requests.get(url, params=params, timeout=20)
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

        raise RuntimeError(f"Mandi API request failed.{details}") from exc


def get_mandi_prices(
    *,
    state=None,
    district=None,
    market=None,
    commodity=None,
    limit=10,
    offset=0,
):
    base_url = _require_env("MANDI_BASE_URL", DEFAULT_MANDI_BASE_URL).rstrip("/")
    resource_id = _require_env("MANDI_RESOURCE_ID", DEFAULT_MANDI_RESOURCE_ID)
    api_key = _require_env("MANDI_API_KEY")

    params = {
        "api-key": api_key,
        "format": "json",
        "limit": limit,
        "offset": offset,
    }

    filters = {
        "state": state,
        "district": district,
        "market": market,
        "commodity": commodity,
    }

    for field_name, value in filters.items():
        if value:
            params[f"filters[{field_name}]"] = value

    return _request_json(f"{base_url}/{resource_id}", params)

import json
from functools import lru_cache
from pathlib import Path


DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "india_locations.json"


@lru_cache(maxsize=1)
def _load_locations():
    with DATA_PATH.open(encoding="utf-8") as file:
        return json.load(file)


def get_states():
    return [item["state"] for item in _load_locations()]


def get_cities_by_state(state_name):
    for item in _load_locations():
        if item["state"].lower() == state_name.lower():
            return item["cities"]
    return []


def get_location_stats():
    locations = _load_locations()
    return {
        "state_count": len(locations),
        "city_count": sum(len(item["cities"]) for item in locations),
    }

from flask import Blueprint, jsonify, request

from services.location_service import (
    get_cities_by_state,
    get_location_stats,
    get_states,
)

locations_bp = Blueprint("locations", __name__, url_prefix="/locations")


@locations_bp.route("/states", methods=["GET"])
def states():
    return jsonify({
        "states": get_states(),
        "coverage": get_location_stats(),
    })


@locations_bp.route("/cities", methods=["GET"])
def cities():
    state_name = request.args.get("state", "").strip()

    if not state_name:
        return jsonify({"error": "state is required"}), 400

    cities_list = get_cities_by_state(state_name)
    if not cities_list:
        return jsonify({"error": f"No cities found for state: {state_name}"}), 404

    return jsonify({
        "state": state_name,
        "cities": cities_list,
    })

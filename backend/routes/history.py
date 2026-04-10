from flask import Blueprint, jsonify, request

from services.db_service import get_history

history_bp = Blueprint("history", __name__)


@history_bp.route("/history", methods=["GET"])
def history():
    raw_limit = request.args.get("limit", "12")

    try:
        limit = int(raw_limit)
    except ValueError:
        return jsonify({"error": "limit must be a valid integer"}), 400

    if limit < 1:
        return jsonify({"error": "limit must be greater than 0"}), 400

    try:
        return jsonify({"history": get_history(limit=limit)})
    except RuntimeError as exc:
        return jsonify({"error": str(exc)}), 500

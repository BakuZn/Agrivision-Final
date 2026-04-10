from flask import Blueprint, request, jsonify
from services.disease_advisory_service import get_prediction_with_recommendation
from services.file_upload_service import remove_temp_file, save_upload_to_temp

disease_bp = Blueprint('disease', __name__)

@disease_bp.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']
    filepath = save_upload_to_temp(file)

    try:
        return jsonify(get_prediction_with_recommendation(filepath))
    finally:
        remove_temp_file(filepath)

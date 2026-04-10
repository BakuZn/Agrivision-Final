from flask import Blueprint, request, jsonify
from services.disease_service import predict_disease
import os

disease_bp = Blueprint('disease', __name__)

@disease_bp.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']

    filepath = "temp.jpg"
    file.save(filepath)

    result = predict_disease(filepath)

    return jsonify(result)
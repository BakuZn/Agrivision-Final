from flask import Blueprint, request, jsonify
from services.disease_service import predict_disease
from services.recommendation_service import get_recommendation

disease_bp = Blueprint('disease', __name__)

@disease_bp.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']

    filepath = "temp.jpg"
    file.save(filepath)

    result = predict_disease(filepath)
    recommendation = get_recommendation(
        result["label"],
        result["confidence"]
    )

    return jsonify({
        "prediction": result,
        "recommendation": recommendation
    })

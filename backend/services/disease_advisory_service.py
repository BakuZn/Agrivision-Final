from services.disease_service import predict_disease
from services.recommendation_service import get_recommendation


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

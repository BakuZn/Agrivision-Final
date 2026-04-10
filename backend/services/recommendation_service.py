
def get_recommendation(label, confidence):
    disease = label.lower()

    # Low confidence case
    if confidence < 50:
        return {
            "status": "uncertain",
            "advice": "Low confidence result. Please upload a clearer image."
        }

    # Disease cases
    if "blight" in disease:
        return {
            "status": "disease_detected",
            "advice": "Apply fungicide. Remove infected leaves. Avoid overhead watering."
        }

    elif "rust" in disease:
        return {
            "status": "disease_detected",
            "advice": "Use neem oil or sulfur-based fungicide."
        }

    elif "healthy" in disease:
        return {
            "status": "healthy",
            "advice": "Crop is healthy. Maintain irrigation and monitoring."
        }

    # Unknown case
    return {
        "status": "unknown",
        "advice": "Consult an agricultural expert."
    }
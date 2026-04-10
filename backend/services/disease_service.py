from transformers import pipeline
from PIL import Image

# Load model (auto-download + cache handled internally)
classifier = pipeline(
    "image-classification",
    model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification"
)

def clean_label(label):
    return label.replace("___", " ").replace("_", " ")

def predict_disease(image_path):
    image = Image.open(image_path).convert("RGB")
    result = classifier(image)

    top = result[0]

    return {
        "label": clean_label(top["label"]),
        "confidence": round(top["score"] * 100, 2)
    }
from services.disease_service import predict_disease

result = predict_disease("backend/leaf.jpg")
print(result)
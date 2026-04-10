from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb://localhost:27017/")
db = client["agrivision"]
collection = db["records"]

def save_record(data):
    data["timestamp"] = str(datetime.now())
    collection.insert_one(data)
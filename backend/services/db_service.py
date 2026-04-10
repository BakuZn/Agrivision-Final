import os
from datetime import datetime, timezone

from pymongo import DESCENDING, MongoClient
from pymongo.errors import PyMongoError

from env_loader import load_env_file

_client = None
_collection = None


def _serialize_record(record):
    serialized = dict(record)
    serialized["id"] = str(serialized.pop("_id"))

    timestamp = serialized.get("timestamp")
    if isinstance(timestamp, datetime):
        serialized["timestamp"] = timestamp.isoformat()

    return serialized


def _get_collection():
    global _client, _collection

    if _collection is not None:
        return _collection

    load_env_file()

    mongo_uri = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
    db_name = os.getenv("MONGO_DB_NAME", "agrivision")
    collection_name = os.getenv("MONGO_COLLECTION_NAME", "advisory_history")

    _client = MongoClient(mongo_uri, serverSelectionTimeoutMS=5000)
    _collection = _client[db_name][collection_name]
    _collection.create_index([("timestamp", DESCENDING)])

    return _collection


def save_record(data):
    document = {
        "prediction": data.get("prediction"),
        "recommendation": data.get("recommendation"),
        "weather": data.get("weather"),
        "mandi": data.get("mandi"),
        "timestamp": datetime.now(timezone.utc),
    }

    try:
        collection = _get_collection()
        result = collection.insert_one(document)
        document["_id"] = result.inserted_id
        return _serialize_record(document)
    except PyMongoError as exc:
        raise RuntimeError(f"Failed to save advisory history: {exc}") from exc


def get_history(limit=12):
    try:
        collection = _get_collection()
        records = collection.find().sort("timestamp", DESCENDING).limit(limit)
        return [_serialize_record(record) for record in records]
    except PyMongoError as exc:
        raise RuntimeError(f"Failed to load advisory history: {exc}") from exc

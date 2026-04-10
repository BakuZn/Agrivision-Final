import os
import tempfile
from pathlib import Path


def save_upload_to_temp(file_storage):
    suffix = Path(file_storage.filename or "").suffix or ".jpg"
    temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=suffix)
    temp_file.close()
    file_storage.save(temp_file.name)
    return temp_file.name


def remove_temp_file(path):
    if path and os.path.exists(path):
        os.remove(path)

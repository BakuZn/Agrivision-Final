FROM python:3.10-slim

WORKDIR /app

ENV PYTHONUNBUFFERED=1

COPY backend/ ./backend/
COPY frontend/ ./frontend/

RUN pip install --no-cache-dir -r backend/requirements.txt

EXPOSE 5000

CMD ["python", "backend/app.py"]

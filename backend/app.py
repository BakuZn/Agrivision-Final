from pathlib import Path

from flask import Flask, jsonify, send_from_directory
from env_loader import load_env_file

load_env_file()

from routes.agri import agri_bp
from routes.disease import disease_bp
from routes.history import history_bp
from routes.locations import locations_bp

frontend_dir = Path(__file__).resolve().parent.parent / "frontend"

app = Flask(
    __name__,
    static_folder=str(frontend_dir),
    static_url_path="",
)
app.register_blueprint(disease_bp)
app.register_blueprint(agri_bp)
app.register_blueprint(history_bp)
app.register_blueprint(locations_bp)

@app.route('/')
def home():
    return send_from_directory(app.static_folder, "index.html")


@app.route('/health')
def health():
    return jsonify({"status": "ok", "service": "AgriVision"})

if __name__ == '__main__':
    app.run(debug=True)

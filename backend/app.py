from flask import Flask
from env_loader import load_env_file

load_env_file()

from routes.agri import agri_bp
from routes.disease import disease_bp

app = Flask(__name__)
app.register_blueprint(disease_bp)
app.register_blueprint(agri_bp)

@app.route('/')
def home():
    return "AgriVision Backend Running"

if __name__ == '__main__':
    app.run(debug=True)

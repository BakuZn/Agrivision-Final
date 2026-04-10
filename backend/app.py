from flask import Flask
from routes.disease import disease_bp

app = Flask(__name__)
app.register_blueprint(disease_bp)

@app.route('/')
def home():
    return "AgriVision Backend Running"

if __name__ == '__main__':
    app.run(debug=True)

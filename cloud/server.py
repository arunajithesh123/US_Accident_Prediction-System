from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__, static_folder="build", static_url_path="")
CORS(app)  # Enable CORS for all routes

# Path to your saved model
MODEL_PATH = "./model/random_forest_model_USAccident.joblib"
model = joblib.load(MODEL_PATH)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        features = [
            float(data.get("Temperature", 0)),
            float(data.get("Humidity", 0)),
            float(data.get("Pressure", 0)),
            float(data.get("LogDistance", 0)),
            float(data.get("WindSpeed", 0)),
            float(data.get("Precipitation", 0)),
            data.get("SevereWeather", "None"),
        ]
        input_data = np.array([features])
        severity = model.predict(input_data)[0]

        response = {
            "SeverityBinary": int(severity),
            "Location": f"Lat: {data.get('Latitude')}, Lon: {data.get('Longitude')}",
            "Weather": {
                "Description": "Clear Sky",
                "Temperature": data.get("Temperature"),
            },
            "HelpingMeasures": "Contact Emergency Services" if severity == 1 else "Monitor Weather",
            "Latitude": data.get("Latitude"),
            "Longitude": data.get("Longitude"),
            "TimeOfDay": data.get("TimeOfDay"),
            "DayOfWeek": data.get("DayOfWeek"),
        }
        return jsonify(response)

    except Exception as e:
        print("Error during prediction:", e)
        return jsonify({"error": str(e)}), 500

# Serve the React frontend
@app.route("/")
@app.route("/<path:path>")
def serve(path=""):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True, port=5000)

<img width="1512" alt="Screenshot 2024-12-13 at 8 14 06 PM" src="https://github.com/user-attachments/assets/4633925b-7400-49af-9789-2ac6c39ebb28" /><img width="1512" alt="Screenshot 2024-12-13 at 8 11 41 PM" src="https://github.com/user-attachments/assets/ad4ef939-c307-457e-9e50-726eba5c6b60" /># 🚦 US Accident Prediction System

### Description:
The US Accident Prediction System is a machine learning-based application designed to predict the severity of road accidents based on weather conditions, location data, and time of day. The system provides real-time insights and recommendations to enhance road safety by helping users and emergency services make informed decisions.

## 🌐  Project Overview

This project integrates:

### Frontend: Developed using React.js for an intuitive user interface.
### Backend: Built with Flask to handle data processing and API requests.
### Model: Uses a pre-trained Random Forest model for predicting accident severity.
### Cloud Deployment: Hosted on Heroku and uses Google Cloud AI Platform for model deployment.
## Key Features
Predicts accident severity as High or Low based on user inputs.
Provides actionable recommendations (e.g., “Contact Emergency Services”).
Visualizes predictions on an interactive Leaflet map.
Supports real-time data inputs for accurate predictions.
## 🛠️  Project Structure

US_Accident_Prediction-System/

│
├── backend/                  # Flask backend code
│   ├── server.py             # Main backend script
│   ├── requirements.txt      # Dependencies for backend
│   ├── runtime.txt           # Heroku runtime specification
│   └── Procfile              # Heroku deployment configuration

│
├── cloud/                    # Cloud-related configurations
│   └── deployment.yaml       # Cloud deployment files

│
├── frontend/                 # React frontend code
│   ├── src/                  # Source code for React app
│   └── public/               # Public assets for React app

│
├── model/                    # Machine learning model
│   └── random_forest_model_USAccident.joblib

│
├── .gitignore                # Files to ignore in git tracking
└── README.md                 # This README file

## ⚙️ Technologies Used

## Frontend
React.js: JavaScript library for building user interfaces.
Axios: HTTP client for API requests.
Leaflet: Library for interactive map visualization.
## Backend
Flask: Python web framework for backend services.
Joblib: For loading the pre-trained machine learning model.
CORS: Cross-Origin Resource Sharing for secure API calls.
## Machine Learning
Random Forest: Pre-trained model for predicting accident severity.
Scikit-Learn: Library used for model development.
## Cloud and Deployment
Heroku: For deploying the Flask backend and React frontend.
Google Cloud AI Platform: For hosting the machine learning model.
Docker: For containerizing the application (optional).
🚀 Getting Started

## Prerequisites
Python 3.8+ installed
Node.js and npm installed
Heroku CLI installed (for deployment)
## Installation
Clone the Repository
git clone https://github.com/arunajithesh123/US_Accident_Prediction-System.git
cd US_Accident_Prediction-System
## Backend Setup
Navigate to the backend folder and install dependencies:

cd backend
pip install -r requirements.txt
Frontend Setup
Navigate to the frontend folder and install dependencies:

cd frontend
npm install
Run the Application
Backend (Flask):

cd backend
python server.py
Frontend (React):

cd frontend
npm start
Visit the app at http://localhost:3000.
🌟 Usage

## Input Data:
Fill out the form with weather, location, and time information:
Temperature (°C)
Humidity (%)
Pressure (hPa)
Log Distance
Wind Speed (mph)
Precipitation (inches)
Severe Weather (Yes/No)
Latitude and Longitude
Time of Day and Day of Week
Submit Form:
Click the “Predict” button to generate a prediction.
View Results:
See the predicted accident severity.
View location markers on an interactive map.
Get recommended actions based on the prediction.
<img width="1512" alt="Screenshot 2024-12-13 at 8 14 06 PM" src="https://github.com/user-attachments/assets/dc781f0e-bb97-48e7-bf75-48322b619268" />
<img width="1512" alt="Screenshot 2024-12-13 at 8 11 49 PM" src="https://github.com/user-attachments/assets/4c9c4da1-44c0-45d4-b576-2472efb90cd5" />



## 📦 Deployment

## Deploying to Heroku
Login to Heroku:
heroku login
Create a Heroku App:
heroku create <your-app-name>
Deploy the App:
git add .
git commit -m "Deploy to Heroku"
git push heroku main
Access the Live App:
https://<your-app-name>.herokuapp.com
## 📝 Future Enhancements

Add Traffic Data: Integrate real-time traffic density for more accurate predictions.
Mobile App Version: Develop a mobile app for on-the-go predictions.
Advanced Models: Experiment with Gradient Boosting and LSTM models for improved accuracy.
Explainability Tools: Use SHAP or LIME to explain model predictions.
🤝 Contributing

## Contributions are welcome! Feel free to fork the repository and submit pull requests.

Fork the repository.
Create a new branch: git checkout -b feature-branch.
Make your changes and commit: git commit -m "Add new feature".
Push to the branch: git push origin feature-branch.
Submit a pull request.
## 📄 License

This project is licensed under the MIT License.


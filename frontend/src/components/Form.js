import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        Temperature: '',
        Humidity: '',
        Pressure: '',
        LogDistance:'',
        WindSpeed: '',
        Precipitation: '',
        SevereWeather: '',
        Latitude: '',
        Longitude: '',
        TimeOfDay: '',
        DayOfWeek: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 bg-white shadow-lg rounded border border-light">
            {/* Removed the duplicate heading */}

            {/* Weather Data Section */}
            <div className="section-header">Weather Data</div>
            <div className="divider"></div>
            {['Temperature', 'Humidity', 'Pressure', 'LogDistance','WindSpeed', 'Precipitation', 'SevereWeather'].map((field) => (
                <div key={field} className="form-group">
                    <label className="form-label">{field.replace(/([A-Z])/g, ' $1')}:</label>
                    <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="form-control"
                        placeholder={`Enter ${field} ${
                            field === 'Temperature' ? '(e.g., 25°C)' : field === 'WindSpeed' ? '(e.g., 15 mph)' : ''
                        }`}
                        required
                    />
                </div>
            ))}

            {/* Location Data Section */}
            <div className="section-header">Location Data</div>
            <div className="divider"></div>
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Latitude:</label>
                    <input
                        type="text"
                        name="Latitude"
                        value={formData.Latitude}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Latitude"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Longitude:</label>
                    <input
                        type="text"
                        name="Longitude"
                        value={formData.Longitude}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Longitude"
                        required
                    />
                </div>
            </div>

            {/* Time Information Section */}
            <div className="section-header">Time Information</div>
            <div className="divider"></div>
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Time Of Day:</label>
                    <input
                        type="text"
                        name="TimeOfDay"
                        value={formData.TimeOfDay}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter (e.g., Morning, Evening)"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Day Of Week:</label>
                    <input
                        type="text"
                        name="DayOfWeek"
                        value={formData.DayOfWeek}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter (e.g., Monday, Friday)"
                        required
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary btn-lg w-100">
                Predict
            </button>
        </form>
    );
};

export default Form;

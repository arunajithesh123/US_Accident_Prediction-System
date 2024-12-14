import React, { useState } from 'react';
import Form from './components/Form';
import Map from './components/Map';
import './styles.css';

const App = () => {
    const [result, setResult] = useState(null);

    const handleFormSubmit = (formData) => {
        fetch('https://accident-prediction-b881dec19fa7.herokuapp.com/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch prediction');
                return res.json();
            })
            .then((data) => setResult(data))
            .catch((err) => {
                console.error(err);
                alert('Error fetching prediction: ' + err.message);
            });
    };
    
    

    return (
        <div className="container">
            <h2 className="text-center">Accident Severity Prediction</h2>
            {!result ? (
                <Form onSubmit={handleFormSubmit} />
            ) : (
                <Map data={result} />
            )}
        </div>
    );
};

export default App;

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({ data }) => {
    const severityIcon = L.icon({
        iconUrl: process.env.PUBLIC_URL + 
          (data.SeverityBinary === 1
              ? '/icons/high_severity_icon.png'
              : '/icons/low_severity_icon.png'),
        iconSize: [30, 40],
        iconAnchor: [15, 40],
    });

    // Fallbacks for Weather data
    const weatherDescription = data?.Weather?.Description || 'No Weather Data';
    const weatherTemperature = data?.Weather?.Temperature || 'N/A';

    return (
        <div>
            <div className="text-center mt-4">
                <h4 className={data.SeverityBinary === 1 ? 'high-severity' : 'low-severity'}>
                    {data.SeverityBinary === 1 ? 'High Severity' : 'Low Severity'}
                </h4>
                <p><b>Location:</b> {data.Location}</p>
                <p><b>Weather:</b> {weatherDescription}, {weatherTemperature} °C</p>
                <p><b>Helping Measures:</b> {data.HelpingMeasures}</p>
            </div>
            <MapContainer
                center={[data.Latitude, data.Longitude]}
                zoom={13}
                style={{ height: '500px', width: '100%' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[data.Latitude, data.Longitude]} icon={severityIcon}>
                    <Popup>{data.Location}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;

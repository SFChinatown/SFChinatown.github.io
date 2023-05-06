import React from 'react';
import Footer from '../components/Footer';
import "./Map.css";

const Map = () => {
    return (
        <div className="map">
            <h2>Interactive Map</h2>
            <iframe src="https://sfchinatown.github.io/map/"></iframe>
            <Footer />
        </div>
    )
}

export default Map;
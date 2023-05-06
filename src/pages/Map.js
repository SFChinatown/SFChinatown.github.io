import React from 'react';
import Footer from '../components/Footer';
import "./Map.css";

const Map = () => {
    return (
        <div className="map">
            <iframe src="https://sfchinatown.github.io/map/"></iframe>
            <Footer />
        </div>
    )
}

export default Map;
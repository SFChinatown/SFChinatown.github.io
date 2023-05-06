import React from 'react';
import './AudioPlayer.css';

const AudioPlayer = (url) => {
    return (
        <audio id="audio_tag" src={url.url} controls/>
    );
};

export default AudioPlayer;
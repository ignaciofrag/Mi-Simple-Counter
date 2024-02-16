import React from 'react';
import './SecondsCounter.css';

function SecondsCounter({ seconds }) {
    const formatNumber = number => `0${number}`.slice(-2);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    return (
        <div className="seconds-counter">
            <i className="far fa-clock"></i> {}
            <span className="digits">
                {formatNumber(hours)}:{formatNumber(minutes)}:{formatNumber(secondsLeft)}
            </span>
        </div>
    );
}

export default SecondsCounter;
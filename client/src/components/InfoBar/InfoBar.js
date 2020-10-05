import React from 'react';
import closeIcon from './../../icons/closeIcon.png';
import onlineIcon from './../../icons/onlineIcon.png';
import './InfoBar.css';

function InfoBar({ room }) {
    return (
        <div className="info-bar">
            <div className="left-inner-container">
                <img src={onlineIcon} alt="online image" className="online-icon" />
                <h3>{room}</h3>
            </div>
            <div className="right-inner-container">
                <a href="/"><img src={closeIcon} alt="close image" className="close-icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar

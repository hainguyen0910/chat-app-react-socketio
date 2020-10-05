import React from 'react';
import './Message.css';

function Message({ message: { user, text }, name }) {
    let isSentCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentCurrentUser = true;
    }
    return (
        isSentCurrentUser
            ? (
                <div className="message-container justify-end">
                    <p className="sent-text pr-10" >{trimmedName}</p>
                    <div className="message-box background-blue">
                        <p className="message-text color-white" >{text}</p>
                    </div>
                </div>
            )
            : (
                <div className="message-container justify-start">
                    <div className="message-box background-light">
                        <p className="message-text color-dark" >{text}</p>
                    </div>
                    <p className="sent-text pl-10" >{user}</p>
                </div>
            )
    )
}

export default Message

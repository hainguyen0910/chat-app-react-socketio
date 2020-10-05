import React from 'react';
import './Input.css';
import sendImage from './../../icons/send.svg';

function Input({ message, sendMessage, setMessage }) {
    return (
        <form className="form" >
            <input
                className="input"
                placeholder="Type a message..."
                type="text"
                value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="send-button" onClick={event => sendMessage(event)}>
                <img className="send-image" src={sendImage} alt="" />
            </button>
        </form>
    )
}

export default Input

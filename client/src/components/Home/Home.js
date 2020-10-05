import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-outer-container" >
            <div className="join-inner-container">
                <h1 className="heading">CHAT ROOM</h1>
                <div>
                    <input type="text" className="join-input" placeholder="Name" onChange={event => setName(event.target.value)} />
                </div>
                <div>
                    <input type="text" className="join-input" placeholder="Room" onChange={event => setRoom(event.target.value)} />
                </div>
                <Link to={`/chat?name=${name}&room=${room}`} onClick={event => (!name || !room) ? event.preventDefault() : null} >
                    <button className="button mt-20" type="submit" >Sign in</button>
                </Link>
            </div>
        </div>
    )
}

export default Home

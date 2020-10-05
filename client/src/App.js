import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home}></Route>
            <Route path="/chat" component={Chat}></Route>
        </Router>
    )
}

export default App

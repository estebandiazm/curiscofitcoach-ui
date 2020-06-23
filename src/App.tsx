import React from 'react';

import './App.sass';
import Home from "./components/home/Home";

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                    <Home/>
            </div>
        )
    }
}

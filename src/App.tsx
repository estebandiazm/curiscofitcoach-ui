import React from 'react';

import './App.sass';
import Header from "./components/header/Header";

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                    <Header/>
            </div>
        )
    }
}

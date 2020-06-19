import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from "./components/Header";

export default class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        curiscofitcoach.com COMING SOON
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

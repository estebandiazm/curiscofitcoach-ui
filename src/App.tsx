import React from 'react';
import {Provider} from "react-redux";

import './App.sass';
import Home from "./components/home/Home";
import {store} from './store'


const App: React.FC = () => {

    return (
        <Provider store={store}>
            <div className="App">
                <Home/>
            </div>
        </Provider>
    )
}
 export default App;
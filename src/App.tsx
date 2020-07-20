import React from 'react';
import {Provider} from "react-redux";

import './App.sass';
import {store} from './store'
import AppRouter from "./router";


const App: React.FC = () => {

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
export default App;
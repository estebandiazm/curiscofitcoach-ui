import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from '../components/home/Home';
import NotFound from '../components/NotFound';

export const history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
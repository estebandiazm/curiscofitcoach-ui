import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Dashboard from '../components/app/Dashboard';
import NotFound from '../components/NotFound';
import services from '../services';
import Loading from '../components/loding';
import {useHistory} from 'react-router';
import Register from '../components/register/Register';

const Routes = () => {

    const [loading, setLoading] = useState(true);
    const {auth} = services
    const history = useHistory()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log('user', user);
            if (user) {
                history.push('/app/dashboard')
            } else {
                if (/app\/./.test(window.location.pathname)) {
                    history.push('/login')
                } else {
                    history.push(window.location.pathname)
                }
            }
            setLoading(false)
        })
    })

    return (
        loading ? <Loading/> :
        <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route exact={true} path="/login" component={Login}/>
            <Route exact={true} path="/register" component={Register}/>
            <Route exact={true} path="/app/dashboard" component={Dashboard}/>
            <Route component={NotFound}/>
        </Switch>
    )
}
export default Routes
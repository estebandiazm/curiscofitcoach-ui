import React, {CSSProperties} from 'react';
import {connect} from 'react-redux';
import LoginForm from './LoginForm';

import {ILogin, login as loginThunk} from '../../ducks/Users';
import {ThunkDispatch} from 'redux-thunk';
import {Alert} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

const mapStateToProps = (state: any) => ({
    authFail: state.User.authFail
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    login: (payload: ILogin) => dispatch(loginThunk(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps)

interface ILoginProps {
    login: (a: ILogin) => void,
    authFail: boolean
}
type Props = ILoginProps

const styles = {
    content: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#343a40',
        color: '#fff'
    },
    alert: {
        position: 'fixed',
        bottom: '3em'
    } as CSSProperties
}

const Login = (props: Props) => {

    const {login, authFail = false} = props;
    const {t} = useTranslation('common')

    return (
        <div style={styles.content}>
            <LoginForm onSubmit={login as any}/>
            <Alert show={authFail} variant='danger' style={styles.alert}>
                {t('login.fail')}
            </Alert>
        </div>
    )
}



export default connector(Login);
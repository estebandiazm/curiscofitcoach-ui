import React from 'react';
import './Header.sass'

import MenuItems from './MenuItems';
import {Button, Form, Navbar, Nav} from 'react-bootstrap';
import {AppActions, singInAction} from '../../../store/actions'
import {connect} from 'react-redux';
import {SingInState} from '../../../store/types';
import {AppState} from '../../../store';
import {ThunkDispatch} from 'redux-thunk';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

interface LinkDispatchProps {
    singInAction: (singIn: boolean) => void
}

const mapStateToProps = (state: AppState): SingInState => ({
    singIn: state.sing.singIn,
    timestamp: state.sing.timestamp
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    singInAction: (singIn: boolean) => dispatch(singInAction(singIn))
});

const connector = connect(mapStateToProps, mapDispatchToProps)

interface HeaderProps {
}

type Props = HeaderProps & LinkDispatchProps & SingInState


const Header: React.FC<Props> = (props) => {

    const {t} = useTranslation('common');
    const onSingIn = () => {
        props.singInAction(!props.singIn)
    }

    return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed={'top'}>
            <Navbar.Brand as={Link} to='/#'>Curisco Fit Coach</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <MenuItems/>
                </Nav>
                <Form inline>
                    <Button variant="outline-info"
                            onClick={onSingIn}>{props.singIn ? t('sing.out.button') : t('sing.in.button')}</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default connector(Header);

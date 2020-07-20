import React from "react";
import './Header.sass'

import MenuItems from "./MenuItems";
import {Button, Form, Navbar, Nav} from "react-bootstrap";
import {AppActions, singInAction} from '../../../store/actions'
import {connect} from "react-redux";
import {SingInState} from "../../../store/types";
import {AppState} from "../../../store";
import {ThunkDispatch} from "redux-thunk";
import {Link} from "react-router-dom";

interface HeaderProps {}

interface HeaderState {}

type Props = HeaderProps & LinkDispatchProps & SingInState


export class Header extends React.Component<Props, HeaderState> {

    onSingIn = () => {
        this.props.singInAction(!this.props.singIn)
    }

    render() {
        console.log(this.props.singIn)
        return (
            <Navbar bg="dark" expand="lg" variant="dark" fixed={'top'}>
                <Navbar.Brand as={Link} to='/#'>Curisco Fit Coach</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <MenuItems/>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-info" onClick={this.onSingIn}>Sing {this.props.singIn ? 'Out': 'In'}</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}


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


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

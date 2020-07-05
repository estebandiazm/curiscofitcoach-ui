import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import './Information.sass'

export default class Information extends Component {
    render() {
        return (
            <Container fluid className="information-panel justify-content-center align-items-center">
                <h1>"Motivational phrase"</h1>
            </Container>
        );
    }
}
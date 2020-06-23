import React, {Component} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import Header from "./header/Header";
import Promo from "./promo/Promo";
import './Home.sass'

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row> <Col><Header/></Col> </Row>
                <Row> <Col><Promo/></Col> </Row>
            </Container>
        );
    }
}
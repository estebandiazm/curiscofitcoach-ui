import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './Home.sass'
import Header from './header/Header';
import Promo from './promo/Promo';
import Information from './information/Information';
import Plans from './plans/Plans';
import Footer from './footer/Footer';
import SubscribeNewsModal from './news/SubscribeNewsModal';
import Evidences from './evidences/Evidences';

export default class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row> <Col><Header/></Col> </Row>
                <Row> <Col><Promo/></Col> </Row>
                <Row> <Col><Information/></Col> </Row>
                <Row> <Col><Plans/></Col> </Row>
                <Row> <Col><Evidences/></Col> </Row>
                <Row> <Col><Footer/></Col> </Row>
                <SubscribeNewsModal/>
            </Container>
        );
    }
}
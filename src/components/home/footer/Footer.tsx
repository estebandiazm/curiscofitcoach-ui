import React, {Component} from 'react'
import {Col, Container, Row} from "react-bootstrap";
import InstagramIcon from '../../../icons/Instagram.svg'
import WhatsappIcon from '../../../icons/Whatsapp.svg'

const iconStyle = {
    width: '2em',
    height: '2em',
    cursor: 'pointer'
}

export default class Footer extends Component {

    redirectPage(url: string) {
        window.open(url, '_blank');
    }

    render() {
        return (
            <Container id="footer" fluid>
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <div className="d-flex flex-column">
                            <h5>Contact Information</h5>
                            <div className="d-flex justify-content-around">
                                <img src={InstagramIcon} style={iconStyle} alt='Instagran logo'
                                     onClick={this.redirectPage.bind(this,'https://www.instagram.com/curisconago/')}/>
                                <img src={WhatsappIcon} style={iconStyle} alt='Instagran logo'
                                     onClick={this.redirectPage.bind(this, 'https://wa.link/i76t78')}/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='text-right font-weight-lighter'>
                    Iconos diseñados por <a href="https://www.flaticon.es/autores/pixel-perfect" title="Pixel perfect">Pixel
                    perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a>
                </div>
            </Container>
        );
    }
}
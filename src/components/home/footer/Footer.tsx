import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCcPaypal, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
import './Footer.sass';
import {useTranslation} from 'react-i18next';

const Footer = () => {

    const {t} = useTranslation('common')
    const redirectPage = () => {
        window.open('https://wa.me/message/QCUOYE34CYZSM1', '_blank');
    }

    return (
        <Container id="footer" fluid>
            <Row>
                <Col>
                    <div className="d-flex justify-content-between footer">
                        <div className="d-flex flex-column">
                            <span className={'copyright'}><FontAwesomeIcon icon={faCopyright} /> Copy Right</span>
                            <span className={'powered'}>powered by Juan Esteban Díaz Engineer</span>
                        </div>
                        <div className="payment-methods">
                            <span>{t('footer.paymentMethods')}</span>
                            <div className="methods-icons">
                                <FontAwesomeIcon icon={faCcPaypal}/>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon'
                                         onClick={redirectPage}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;

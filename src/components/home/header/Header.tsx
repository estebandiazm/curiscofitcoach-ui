import React from 'react';
import './Header.sass'

import MenuItems from './MenuItems';
import {Button, Form, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {useHistory} from 'react-router';

const style = {
    display: 'flex',
    alignItems: 'center',
    color:'#fff'
}


const Header = () => {

    const {t} = useTranslation('common');
    const history = useHistory();

    const onSingIn = () => {
        history.push('/login')
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
                    <div style={style}>
                        <span>{t('header.follow')} </span>
                        <FontAwesomeIcon icon={faInstagram} size={'2x'} style={{margin:'0 .5em', cursor: 'pointer'}}
                            onClick={() => window.open('https://www.instagram.com/curisconago/', '_blank')}/>
                    </div>
                    <Button variant="outline-info"
                            onClick={onSingIn}>{t('login.in.button')}</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header;

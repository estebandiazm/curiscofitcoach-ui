import React from 'react';
import Nav from "react-bootstrap/Nav";
import {HashLink} from 'react-router-hash-link';

export default class MenuItems extends React.Component {

    navTo(elementName: string) {
        console.log(`click nav: ${elementName}`)
        let element = document.getElementById(elementName);
        if (element !== null) {
            console.log('Entro al scrill')
            let offsetTop  = element.offsetTop;
            window.scrollTo({
                top: offsetTop-100,
                behavior: "smooth"
            });
        }
    }

    render() {
        const menuItems = [
            {name: 'Programas', componentId: 'plans'},
            {name: 'Tips', componentId: 'tips'},
            {name: 'Preguntas', componentId: 'questions'},
            {name: 'Suplementos', componentId: 'supplements'},
            {name: 'Contacto', componentId: ''}
        ]

        return (
            <Nav className="menu-items">
                {menuItems.map((value, index) => {
                    return <HashLink smooth className='nav-link' key={index.toString()} to={`/#${value.componentId}`}>{value.name}</HashLink>
                })}
            </Nav>
        )
    }

}
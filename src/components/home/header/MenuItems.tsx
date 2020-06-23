import React from 'react'
import Nav from "react-bootstrap/Nav";

export default class MenuItems extends React.Component {

    render() {
        const menuItems = [
            {name: 'Programas'},
            {name: 'Tips'},
            {name: 'Preguntas'},
            {name: 'Suplementos'},
            {name: 'Contacto'}
        ]

        return (
            <Nav className="menu-items">
                {menuItems.map((value, index) => {
                    return <Nav.Link key={index.toString()}>{value.name}</Nav.Link>
                })}
            </Nav>
        )
    }

}
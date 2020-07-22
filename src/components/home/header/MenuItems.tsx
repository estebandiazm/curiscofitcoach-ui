import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {HashLink} from 'react-router-hash-link';
import {useTranslation} from 'react-i18next';

const MenuItems = () => {

    const {t} = useTranslation('common');
        const menuItems = [
            {name: 'menu.programs', componentId: 'plans'},
            {name: 'menu.tips', componentId: 'tips'},
            {name: 'menu.questions', componentId: 'questions'},
            {name: 'menu.supplements', componentId: 'supplements'},
            {name: 'menu.contact', componentId: 'contact'}
        ]

        return (
            <Nav className="menu-items">
                {menuItems.map((value, index) => {
                    return <HashLink smooth className='nav-link' key={index.toString()} to={`/#${value.componentId}`}>{t(value.name)}</HashLink>
                })}
            </Nav>
        )
}

export default MenuItems;
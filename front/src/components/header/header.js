import React from 'react';
import SiteLogo from '../sitelogo';
import SiteCart from '../sitecart';
import SiteContacts from '../sitecontacts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './header.css';

const Header = (props) => {
    return (
        <header className="App-header">
            <Row>
            <Col sm={6}>
                <SiteLogo logo={props.logo} />
            </Col>
            <Col sm={4}>
                <SiteContacts />
            </Col>
            <Col sm={2}>
                <SiteCart cart={props.cart} />
            </Col>
            </Row>
        </header>
    )
}

export default Header;

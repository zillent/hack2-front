import React from "react";
//import SiteLogo from '../sitelogo';
//import SiteCart from '../sitecart';
//import SiteContacts from '../sitecontacts';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./header.css";

const Header = (props) => {
  return (
    <header className="header">
      <Row>
        <Col sm={2}>
          <img src="" /> Лого
        </Col>
        <Col sm={2}>Идейный генератор</Col>
        <Col sm={5}>Поиск</Col>
        <Col sm={1}>Д</Col>
        <Col sm={2}>Войти/регистрация</Col>
      </Row>
    </header>
  );
};

export default Header;

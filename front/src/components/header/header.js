
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./header.css";
<<<<<<< HEAD
=======

import bellSvg from "./svg/bell.svg";
import userSvg from "./svg/user.svg";
>>>>>>> 5aa468e27334feff973f4dda414effb1b0af53fc

const Header = (props) => {
  return (
    <header className="header">
      <Row>
        <Col sm={2}>
          {/* <img src="data:image/png;base64,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" /> */}
<<<<<<< HEAD
<<<<<<< HEAD
          <img src="logoGaz.svg" />.Offer it
=======
          <img className='imp' src="logo.jpg" />
>>>>>>> 3260853df8a4c76c3a6fd8cbd6baaf0a6f7a09db
=======
          <img className='imp' src="logo.jpg" onClick = {() => {window.location.href="/";}} alt="Site logo"/>
>>>>>>> 5aa468e27334feff973f4dda414effb1b0af53fc
        </Col>
        <Col sm={2}></Col>
        <Col sm={5}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Поиск идей и предложений"
            >
            </input>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </Col>
<<<<<<< HEAD
        <Col sm={1}>
          <img src="bell.svg" />
        </Col>
        <Col sm={2}>
          <img src="user.svg" /> Вход/регистрация
=======
        <Col className="iconRing"  sm={1}>
          <img src={bellSvg} alt="bell" />
        </Col>
        <Col className="iconRing" sm={2}>
<<<<<<< HEAD
          <img src={userSvg} /> Войти/регистрация
>>>>>>> 3260853df8a4c76c3a6fd8cbd6baaf0a6f7a09db
=======
          <img src={userSvg} alt="User profile"/> Войти/регистрация
>>>>>>> 5aa468e27334feff973f4dda414effb1b0af53fc
        </Col>
      </Row>
    </header>
  );
};

export default Header;

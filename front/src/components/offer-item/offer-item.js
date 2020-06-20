import React from "react";
//import SiteLogo from '../sitelogo';
//import SiteCart from '../sitecart';
//import SiteContacts from '../sitecontacts';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./offer-item.css";

//import Content from "../middle-content";

const OfferItem = (props) => {
  return (
    <div className="offer-item__container">
      <Row className ="offer-item__header">
        <Col>{props.data.offer_name}</Col>
      </Row>
      <Row className ="offer-item__body">
        <Col>{props.data.detail}</Col>
      </Row>

      <Row className ="offer-item__footer">
        <Col>
          <img src={props.data.avatar}></img>
        </Col>
      </Row>
    </div>
  );
};

export default OfferItem;

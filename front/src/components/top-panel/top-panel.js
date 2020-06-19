import React from "react";
//import SiteLogo from '../sitelogo';
//import SiteCart from '../sitecart';
//import SiteContacts from '../sitecontacts';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./top-panel.css";

const TopPanel = (props) => {
  return (
    <div className="top-panel">
      <Row>
        <Col>
          Создавай и продвигай идеи, помогай решать <br />
          важные проблемы
        </Col>
      </Row>
    </div>
  );
};

export default TopPanel;

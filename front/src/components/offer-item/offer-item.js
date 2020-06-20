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
    <table>
      <tr>
        <td>{props.name}</td>
      </tr>
      <tr>
        <td>{props.detail}</td>
      </tr>
      )
    </table>
  );
};

export default OfferItem;

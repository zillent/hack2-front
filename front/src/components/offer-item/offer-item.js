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
        <td>{props.data.offer_name}</td>
      </tr>
      <tr>
        <td>{props.data.detail}</td>
      </tr>
      <tr>
        <td>{props.data.avatar}</td>
      </tr>
    </table>
  );
};

export default OfferItem;

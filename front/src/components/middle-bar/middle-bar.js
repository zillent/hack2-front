import React, { Component } from "react";
//import SiteLogo from '../sitelogo';
//import SiteCart from '../sitecart';
//import SiteContacts from '../sitecontacts';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./middle-bar.css";
import APIService from "../../services/service";
//import Content from "../middle-content";
import OfferItem from "../offer-item";

class MiddleBar extends Component {
  apiService = new APIService();
  offersURL = "offer/";
  state = { offers: [] };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      this.apiService.getItems(this.offersURL).then((result) => {
        this.setState({ offers: result });
      });
    } catch (error) {
      console.log("Error!");
    }
  }
  render(props) {
    let offers = this.state.offers;
    if (offers && offers.length > 0) {
      return (
        <div>
          {offers.map((offer) => (
            <OfferItem data={offer}></OfferItem>
          ))}
        </div>
      );
    }
    return <div> Нет Идей </div>;
  }
}

export default MiddleBar;

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
        this.apiService.getItems(this.offersURL).then(result => {
            console.log(result);
            let arr = [];
            for (let i = 0; i < result.length; i++) {
              console.log(result[i]);
              arr.push(result[i]);
            }
      //      this.setState({ offers: arr });
          });
                
      } catch (error) {
        console.log('Error!')          
      }
  }
  render(props) {
    console.log(this.state.offers);
    return <div>{this.state.offers}</div>;
  }
}

export default MiddleBar;

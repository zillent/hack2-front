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
    if (offers.length == 0 && window.location.hostname === "localhost") {
        console.log('Using Fake data!')
      // FAKE DATA for testing!
      offers = [
        {
          id: 1,
          offer_name: "Организовать доставку воды в офис",
          detail:
            "Организовать доставку воды в офис с формированием фонда запаса воды,",
          avatar:
            "http://127.0.0.1:8822/v0/offer/viber_image_2019-04-02__21.58.21.jpg",
          create_duid: "2020-06-20T06:14:21.277000Z",
          person: 1,
        },
        {
            id: 2,
            offer_name: "Организовать доставку воды в офис",
            detail:
              "Организовать доставку воды в офис с формированием фонда запаса воды,",
            avatar:
              "http://127.0.0.1:8822/v0/offer/viber_image_2019-04-02__21.58.21.jpg",
            create_duid: "2020-06-20T06:14:21.277000Z",
            person: 3,
          },
        ];
    }

    if (offers && offers.length > 0) {
      return (
        <div className='wind'>
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

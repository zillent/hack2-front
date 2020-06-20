import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import APIService from "../../services/service";
import "./offer-item.css";

class OfferItem extends Component {
  apiService = new APIService();
  usersURL = "/users_api/v1_0/person/";
  state = { Person: [] };

  componentDidMount() {
    console.log(this.props);
    if (this.props.data.person_id) {
      let url = this.usersURL + this.props.data.person_id + "/";
      console.log(url);
      this.apiService.getItems(url).then((usr) => {
        console.log(usr);
      });
    }
  }
  
  render() {
    return (
      <div className="offer-item__container">
        <Row className="offer-item__header">
          <Col>{this.props.data.offer_type_name}</Col>
        </Row>
        <Row className="offer-item__body">
          <Col>{this.props.data.detail}</Col>
        </Row>

        <Row className="offer-item__footer">
          <Col className="d-none">
            <img src={this.props.data.avatar} alt="Offer avatar"></img>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OfferItem;

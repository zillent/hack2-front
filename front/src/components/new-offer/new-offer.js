import React, { Component } from "react";
import "./new-offer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import APIService from "../../services/service";

class NewOffer extends Component {
  apiService = new APIService();
  offersURL = "/api/v0/offer/";

  state = {
    values: {
      subject: "",
      details: "",
    },
    sendoffer: false,
  };
  handleInputChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSendClick = (e) => {
    this.setState({
      sendOffer: true,
    });
    console.log("send Offer!");
    let json = JSON.stringify({
      offer_type_name: this.state.values.subject,
      detail: this.state.values.details,
    });
    console.log(json);
    this.apiService.postItems(this.offersURL, json).then(
      /*result => this.props.closeFunc(result)*/
      (result) => {
        console.log(result);
        window.location.href = "/";
      }
    );
  };

  render() {
    return (
      <div className="new-offer__div">
        <Form>
          <Form.Group as={Row} controlId="formHeader">
            <Form.Label column sm={12}>
              Информация для подачи предложения/идеи
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} controlId="offerSubjectLabel">
            <Col sm={12}>
              <Form.Label>Тема/направление</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="offerSubject">
            <Col sm={1}></Col>
            <Col sm={10}>
              <Form.Control
                placeholder="Тема/направление"
                onChange={this.handleInputChange}
                name="subject"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="offerDetailsLabel">
            <Col sm={12}>
              <Form.Label>Информация</Form.Label>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="offerDetails">
            <Col sm={1}></Col>
            <Col sm={10}>
              <Form.Control
                placeholder="Информация"
                onChange={this.handleInputChange}
                name="details"
              />
            </Col>
          </Form.Group>
          <Button onClick={this.handleSendClick}>Отправить</Button>
        </Form>
      </div>
    );
  }
}

export default NewOffer;

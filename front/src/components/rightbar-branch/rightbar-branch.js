import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightBarItem from "../rightbar-item";
import "./rightbar-branch.css";

const RightBarBranch = (props) => {
  return (
    <>
      <Row className="rightbar-branch-name">
        <Col>{props.name}</Col>
      </Row>
      <Row className="rightbar-branch-content">
        <Col>
          {props.items.map((item) => (
            <RightBarItem data={item}></RightBarItem>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default RightBarBranch;

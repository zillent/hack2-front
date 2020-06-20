import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightBarItem from "../rightbar-item";
import "./rightbar-branch.css";

const RightBarBranch = (props) => {
  return (
    <>

          <Row> 
            <Col className='rightbar-branch-name'> {props.name} </Col></Row>
            {props.items.map((item) => (
              <Row><Col className="rightbar-branch-content"><RightBarItem  data={item}> </RightBarItem></Col></Row>
            ))}

    </>
  );
};

export default RightBarBranch;

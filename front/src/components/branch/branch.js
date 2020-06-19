import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Branch = (props) => {
    return (
    <Row>
            <Col><a href={props.link}>{props.name}</a></Col>
    </Row>
    );
}


export default Branch;
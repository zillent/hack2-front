import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RightBar = (props) => {
    return (<>
    <Row>
        <Col>Все идеи</Col>
    </Row>
    <Row>
        <Col>Тенденции</Col>
    </Row>
    <Row>
        <Col>Последние новости</Col>
    </Row>
    </>
    );
}

export default RightBar;
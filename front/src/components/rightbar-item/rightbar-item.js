import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RightBarItem = (props) => {
    return (<>
    <Row>
        <Col>{props.data.name}</Col>
    </Row>
    </>
    );
}

export default RightBarItem;
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./rightbar_item.css";

const RightBarItem = (props) => {
    return (<>
    <Row>
        <Col className='rightbar-item-name'>{props.data.name}</Col>
    </Row>
    </>
    );
}

export default RightBarItem;
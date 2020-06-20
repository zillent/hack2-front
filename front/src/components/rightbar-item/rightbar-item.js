import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./rightbar_item.css";

const RightBarItem = (props) => {
    console.log(props);
    return (<>
    <Row >
        <Col><a href={props.data.link}>{props.data.name}</a></Col>
    </Row>
    </>
    );
}

export default RightBarItem;
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Branch from "../branch";
import "./leftbar.css";

const LeftBar = (props) => {
  let branches = [{name: 'Мои предложения', link: 'fds'}, {name: 'Комментарии', link: 'fds'}, {name: 'Избранное', link: 'fds'}, {name: 'Подписки', link: 'fавыаываds'}, {name: 'Достижения', link: 'fds'}];
    return (
    <>
      <Row>
        <Col className ='headerView'>РАЗДЕЛЫ</Col>
      </Row>
      { branches.map(branch => <Row className='branch'>
    <Col>
      <Branch name={branch.name} link = {branch.link}/>
    </Col>
  </Row>
      )
      }
    </>);
;
};
export default LeftBar;

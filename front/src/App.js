import React from "react";
import Header from "./components/header";
import TopPanel from "./components/top-panel";
import RightBar from "./components/rightbar";
import LeftBar from "./components/leftbar";
import MiddleBar from "./components/middle-bar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="header">
        <Header></Header>
      </header>

      <Row class="container">
          <Col md={12}>
        <TopPanel></TopPanel>
        </Col>
      </Row>
      <Row class="middle">
        <Col md={3}>
          <aside className="left-sidebar">
           <LeftBar></LeftBar>
          </aside>
        </Col>
        <Col md={6}>
          <div className="container">
            <main class="content">
              <MiddleBar></MiddleBar>
            </main>
          </div>
        </Col>
        <Col md={3}>
          <aside className="right-sidebar">
            <RightBar></RightBar>
          </aside>
        </Col>
      </Row>

      <footer className="footer d-none">
        <strong>Footer:</strong> Mus elit Morbi mus enim lacus at quis Nam eget
        morbi. Et semper urna urna non at cursus dolor vestibulum neque enim.
        Tellus interdum at laoreet laoreet lacinia lacinia sed Quisque justo
        quis. Hendrerit scelerisque lorem elit orci tempor tincidunt enim
        Phasellus dignissim tincidunt. Nunc vel et Sed nisl Vestibulum odio
        montes Aliquam volutpat pellentesque. Ut pede sagittis et quis nunc
        gravida porttitor ligula.
      </footer>
    </div>
  );
}

export default App;

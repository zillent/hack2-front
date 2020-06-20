import React from "react";
import { Switch, Route } from "react-router-dom";
//import { compose } from 'recompose';
import { BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
    <div className="App">
      <header className="header">
        <Header></Header>
      </header>

      <Row className="container">
          <Col md={12}>
        <TopPanel></TopPanel>
        </Col>
      </Row>
      <Row className="middle">
        <Col md={3}>
          <aside className="left-sidebar">
           <LeftBar></LeftBar>
          </aside>
        </Col>
        <Col md={6}>
          <div className="container-">
            <main class="content">
          <Switch>
            <Route path='/test'>
              Oops!
            </Route>
            <Route path='/'>
            <MiddleBar></MiddleBar>
            </Route>
          </Switch>
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
    </BrowserRouter>
  );
}

export default App;

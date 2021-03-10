import React from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Poll from './components/Poll';

export default function App() {
  return (
    <Router>
      <div className="container">

        <Nav variant="tabs">
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link href="/">New Poll</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
          <LinkContainer to="/Vote">
            <Nav.Link eventKey="/Vote">Vote</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
          <LinkContainer to="/Results">
            <Nav.Link eventKey="/Results">Results</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/Vote">
            <Vote />
          </Route>
          <Route path="/Results">
            <Results />
          </Route>
          <Route path="/">
            <NewPoll />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NewPoll() {
  return (<>
  <h2>New Poll</h2>
    <Poll/>
  </>);
}

function Vote() {
  return <h2>Vote</h2>;
}

function Results() {
  return <h2>Results</h2>
}

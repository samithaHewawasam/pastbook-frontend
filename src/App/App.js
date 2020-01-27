import React, { useState, useEffect } from "react"
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Row,
  Button,
  Col,
  Container
} from "react-bootstrap"
import { bindActionCreators } from "redux"
import { compose } from "recompose"
import { connect } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import { redirectToGrid } from "./Actions"

export const Com = props => {

  return (
    <>
      <Container fluid>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
            <img
              src="https://www.pastbook.com/one-click-photo-products/assets/images/Logo-01.png"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/photo-grid" style={{marginRight: '10px'}}>Create Gallery</Link>
              <Link to="/your-galleries">Your Gallery</Link>
            </Nav>
            <Nav className="mr-sm-2">
              <Link to="/logout">Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row>{props.children}</Row>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  return {}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ redirectToGrid }, dispatch)
}

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(Com)

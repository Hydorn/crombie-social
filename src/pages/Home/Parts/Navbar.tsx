import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import "./PartsStyle.css";
import logo from "./LogoTransparente.png";

export const NavBar: React.FC<{}> = ({}) => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" className="mb-1">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          CROMBIE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary"><i className="bi bi-search"></i></button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

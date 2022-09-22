import React, { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../UI/Logo";

const NavBar: FC = () => {
  return (
    <Navbar collapseOnSelect expand={"sm"} bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <a
            href="https://rickandmortyapi.com/documentation/#introduction"
            target="_blank"
            rel="noreferrer"
          >
            <Logo />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={NavLink} to="/characters">
              Characters
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/episodes"}>
              Episodes
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/locations"}>
              Locations
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/watch-list"}>
              My watch list
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

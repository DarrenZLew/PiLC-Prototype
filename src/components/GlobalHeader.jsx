import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export const GlobalHeader = () => {
  return (
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">PiLC-Prototype</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Live Feed
          </NavItem>
          <NavItem eventKey={2} href="#">
            Components
          </NavItem>
          <NavItem eventKey={3} href="#">
            Events
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

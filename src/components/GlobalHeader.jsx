import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";

import Components from "./Components";
import LiveFeed from "./LiveFeed";
import Events from "./Events";

class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>PiLC-Prototype</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/livefeed">
                <NavItem eventKey={1}>Live Feed</NavItem>
              </LinkContainer>
              <LinkContainer to="/components">
                <NavItem eventKey={2}>Components</NavItem>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavItem eventKey={3}>Events</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <RoutingPaths />
      </div>
    );
  }
}

const RoutingPaths = () => (
  <Switch>
    <Route path="/livefeed" component={LiveFeed} />
    <Route path="/components" component={Components} />
    <Route path="/events" component={Events} />
  </Switch>
);

export default withRouter(GlobalHeader);

import React, { Component } from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
     return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="./">Brand</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

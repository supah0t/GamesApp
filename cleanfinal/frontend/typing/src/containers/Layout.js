import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '../store/actions/auth';

class CustomLayout extends React.Component {
  
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>

              {
                this.props.isAuthenticated ?
                  <Nav.Link onClick={ this.props.logout }>Logout</Nav.Link>
                  :
                  <Nav.Link><Link to="/login">Login</Link></Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.props.children}

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
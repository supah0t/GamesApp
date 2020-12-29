import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '../store/actions/auth';

import './Layout.css'

class CustomLayout extends React.Component {
  
  render() {
    return (
      <div>
        
        <div className="top-gap">
          <div id="app-container">
            <div id="menu-bar">
              <Navbar bg="dark" variant="dark" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/typing">Typing Game</Link></Nav.Link>
                    {
                      this.props.isAuthenticated ?
                        <Nav.Link onClick={this.props.logout}>Logout</Nav.Link>
                        :
                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                    }
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>

            <hr id="menu-divider" />

            {this.props.children}
          </div>
        </div>
        
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
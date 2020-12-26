import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const CustomLayout = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#"><Link to="/">List</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      {props.children}
      
    </div>
  );
}

export default CustomLayout;
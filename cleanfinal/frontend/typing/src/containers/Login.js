import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import * as actions from '../store/actions/auth';

import './containers.css';

function LoginForm(props) {
  
  const [validated, setValidated] = useState(false);
  
  const handleFormSubmit = (event) => {
    const form = event.currentTarget;
    
    event.preventDefault();
    event.stopPropagation();
    
    if (form.checkValidity() === false) {
      
    } 
    
    setValidated(true);
    
    if (form.checkValidity() === true) {
      const username = event.target.elements.username.value;
      const password = event.target.elements.password.value;
      props.onAuth(username, password);
      props.history.push('/');
    }
  }
  
  let errorMessage = null;
  if (props.error) {
    errorMessage = (
      "Invalid username or password!"
    )
  }
  
  return (
    <div className="submit-form">
      {
        props.loading ?
          <Spinner animation="border" variant="info" />
        :
        <Form noValidate validated={ validated } onSubmit={handleFormSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Username</Form.Label>
            <Form.Control required name="username" type="username" placeholder="Username" />
            <Form.Control.Feedback type="invalid">
                Must provide a username
            </Form.Control.Feedback>
          </Form.Group>

          <div className="gap-20"></div>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required name="password" type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
               Must provide a password
            </Form.Control.Feedback>
          </Form.Group>

          <div className="gap-20"></div>

          <Button variant="primary" type="submit">
            Login
          </Button>
          &nbsp; Or &nbsp;
          <NavLink to="/signup">Signup</NavLink>
          {
            errorMessage ?
              <div>
                <div className="gap-20"></div>
                <Alert key="danger" variant="danger">{errorMessage}</Alert>
              </div>
            :
            <div></div>
          }
        </Form>
      }
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
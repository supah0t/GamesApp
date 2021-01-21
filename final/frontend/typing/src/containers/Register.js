import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../store/actions/auth';

import './containers.css';

class SignupForm extends React.Component {

  redirect = () => {
    if (this.props.isAuthenticated) {
      this.props.history.push('/');
    }
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password1 = event.target.elements.password1.value;
    const password2 = event.target.elements.password2.value;
    const email = event.target.elements.email.value;

    if (password1 === password2) {
      this.props.onAuth(username, password1, password2, email);
      this.redirect();
    }
  }


  render() {

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      );
    }

    return (
      <div className="submit-form">
        {errorMessage}
        {
          this.props.loading ?
            <Spinner animation="border" variant="info" />
            :
            <Form onSubmit={(event) => this.handleFormSubmit(event)}>

              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="username" placeholder="Enter Username" />
              </Form.Group>
              
              <div className="gap-20"></div>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
              </Form.Group>

              <div className="gap-20"></div>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password1" type="password" placeholder="Password" />
              </Form.Group>
              
              <div className="gap-20"></div>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="password2" type="password" placeholder="Confirm Password" />
              </Form.Group>

              <div className="gap-20"></div>
              
              <Button variant="primary" type="submit">
                Signup
              </Button>
              &nbsp; Or &nbsp;
              <NavLink to="/login">Login</NavLink>
            </Form>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password1, password2, email) => dispatch(actions.authSignup(username, password1, password2, email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
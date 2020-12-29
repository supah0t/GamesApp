import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as actions from '../store/actions/auth';

import './containers.css';

class LoginForm extends React.Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (username !== null && password !== null) {
      this.props.onAuth(username, password);
    }
    this.props.history.push('/');
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
              <Form.Group controlId="validationCustom01">
                <Form.Label>Username</Form.Label>
                <Form.Control required name="username" type="username" placeholder="Username" />
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>

              <div className="gap-20"></div>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
              </Form.Group>

              <div className="gap-20"></div>

              <Button variant="primary" type="submit">
                Login
            </Button>
            &nbsp; Or &nbsp;
            <NavLink to="/signup">Signup</NavLink>

            </Form>

        }

      </div>
    )
  }
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
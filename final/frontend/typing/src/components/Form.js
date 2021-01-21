import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './form.css';

import axios from 'axios';

class CustomForm extends React.Component {
  
  handleFormSubmit = (event, requestMethod, playerScoreID) => {
    const  score = event.target.elements.score.value;
    
    switch ( requestMethod ) {
      case 'post': 
        return axios.post('http://127.0.0.1:8000/api/', {
          score: score
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${playerScoreID}/`, {
          score: score
        })
        .then(res => console.log(res))
        .catch(err => console.error(err));
      default:
        
    }
  }
  
  render() {
    return(
      <div className="test">
        <Form onSubmit={(event) => this.handleFormSubmit(
          event,
          this.props.requestMethod,
          this.props.playerScoreID
          )}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Add a new score:</Form.Label>
            <Form.Control name="score" type="text" placeholder="Score"/>
          </Form.Group>
          
          <Button variant="warning" type="submit" >
            {this.props.btnText}
          </Button>
        </Form>
      </div>
    );
  }
  
}

export default CustomForm;
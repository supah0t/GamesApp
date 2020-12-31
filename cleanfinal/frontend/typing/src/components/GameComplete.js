import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import  { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

class Score extends React.Component {
  
  //function to calculate wpm based on props.wordCounter and props.endTime
  //Algorythm is WPM = (words/5)/time(min)
  CalculateWPM = (props) => {
    const totalTime = props.endTime / (1000 * 60);
    const words = props.wordCount / 5;
    return (Math.round(words / totalTime * 100) / 100).toFixed(2);
  }
  
  testFunct = () => {
    return axios.post('http://127.0.0.1:8000/api/', {
      score: 50,
      user: JSON.stringify(this.props.user)
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="end-game-text">
        <h3>Congratulations! You completed the test.</h3>
        <h3>Your WPM is</h3>
        <h2>{this.CalculateWPM(this.props)}</h2>

        <div className="gap-20"></div>
        <div className="gap-20"></div>
        {
          !this.props.isAuthenticated ?
            <p>Login in if you want to post your results to the leaderboards!!</p>
            :
            <div>
              <p>Post your results to the leaderboards</p>
              <Button onClick={this.testFunct}>Post</Button>
            </div>
        }
        <p></p>

        <Button onClick={() => console.log(this.props)}>Test</Button>

      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    user: state.user
  }
}

export default connect(mapStateToProps)(Score);
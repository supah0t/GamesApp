import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from  'axios';

import Player from '../components/Player';


class HomeView extends React.Component {
  state = {
    players: []
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        let data = res.data.slice(0,5);
        this.setState({
          players: data
        });
        console.log(this.state.players[0].id);
      })
  }
  
  render() {
    return (
      <div id="intro-text">
        Welcome to the Gameboard, here you can practice an array of skills necessary for survival in this digital age.
        <br />
        Create an account to save your progress and join the leaderboards.
        <br />
        Have fun!
        <div class="gap-20"></div>
        
        <div id="scores-container">
          <Container>
            <Row id="first-row">
              <Col><Player data={this.state.players} /></Col>
              <Col>2 of 2</Col>
            </Row>
            <Row id="second-row">
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default HomeView;
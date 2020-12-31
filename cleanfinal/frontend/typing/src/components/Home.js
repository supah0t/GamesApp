import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from  'axios';

import './components.css';

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
        <h1>Leaderboards</h1>
        <div class="gap-20"></div>
        <div class="gap-20"></div>
        <div class="gap-20"></div>
        
        <div id="scores-container">
          <Container>
            <Row id="first-row">
              <Col><Player data={this.state.players} /></Col>
              <Col>2 of 3</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default HomeView;
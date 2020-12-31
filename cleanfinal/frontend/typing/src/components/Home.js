import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from  'axios';

import './components.css';

import Player from '../components/Player';

import Button from 'react-bootstrap/Button';


class HomeView extends React.Component {
  state = {
    players1: [],
    players2: []
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        const data = res.data.slice(0,5);
        const data2 = res.data.slice(5, 10);
        this.setState({
          players1: data,
          players2: data2
        });
      })
  }
  
  render() {
    return (
      <div id="intro-text">
        <h1>Leaderboards</h1>
        <div className="gap-20"></div>
        <hr id="home-divider"/>
        <div className="gap-20"></div>
        
        <div id="scores-container">
          <Container>
            <Row id="first-row">
              <Col><Player data={this.state.players1} group={1} /></Col>
              <Col><Player data={this.state.players2} group={2}/></Col>
              {
                (this.state.players1 === null) && (this.state.players2 === null) ?
                  <h3>The leaderboards are empty. Here's your chance!!!</h3>
                :
                  <div></div>
              }
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default HomeView;
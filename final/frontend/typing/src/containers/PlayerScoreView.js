import React from 'react';
import Player from '../components/Player';
import axios from 'axios';

class PlayerScore extends React.Component {
  state = {
    players: []
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
    .then(res => {
      this.setState({
        players: res.data
      });
      console.log(res.data);
    })
  }
  
  render() {
    return (
      <div>
        <Player data={this.state.players}/>
      </div>
    );
  }
}

export default PlayerScore;
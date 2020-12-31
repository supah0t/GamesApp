import React from 'react';

import TypingGame from './TypingGame';
import StartGame from '../components/StartGame';

import Button from 'react-bootstrap/Button';

class GameArea extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      phase: null
    };
  }
  
  componentDidMount() {
    this.setState({
      phase: 0
    });
  }
  
  changePhase = () => {
    this.setState({
      phase: 1
    });
    alert("This is a beta version, some breaking bugs might occur during the game, in that case just refresh and play again :)");
  }
  
  render() {
    return (
      <div>
        {
          this.state.phase === 0 ? 
            <div>
              <StartGame />
              <div className="gap-20"></div>
              <Button size="lg" variant="warning" id="play-button" onClick={this.changePhase}>Play!</Button>
            </div>
          :
          <div></div>
        }
        
        {
          this.state.phase === 1 ?
            <div>
              <TypingGame />
            </div>
          :
          <div></div>
        }
      </div>
    );
  }
  
}

export default GameArea;
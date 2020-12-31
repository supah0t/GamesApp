import React from 'react';

import './components.css';

class StartGame extends React.Component {
  
  render() {
    return(
      <div id="start-text">
        Words per minute, commonly abbreviated <b>WPM</b>, is a measure of words processed in a minute, often used as a measurement of the speed of typing, reading or Morse code sending and receiving.
        <br />
        <div className="gap-20"></div>
        <span id="reference">- Wikipedia</span>
      </div>
    );
  }
  
}

export default StartGame;
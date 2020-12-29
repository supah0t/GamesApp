import React from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';

class TypingGame extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fullText: [],
      displayText: [],
      score: 0,
      wordCounter: 0,
      textCounter: 0,
      input: ""
    };
  }

  componentDidMount() {
    axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary')
    .then(res => {
      const data = res.data.extract;
      const noSpacesText = data.replace(/\s\s+/g, ' ');
      let splitData = noSpacesText.replace(/[\u{0080}-\u{FFFF}]/gu, "");
      splitData = splitData.split(".");
      console.log(splitData);
      this.setState(() => ({
        fullText: splitData,
        displayText: splitData[0].split(" ")
      }));
    })
  }
  
  updateResponse = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  nextWord = (event) => {
    if (event.code === 'Space') {
      const word = this.state.input;
      
      if (word.replace(" ", "") === this.state.displayText[this.state.wordCounter]) {
        this.setState({
          score: this.state.score + 1,
          input: "",
          wordCounter: this.state.wordCounter + 1
        });
      } else {
        this.setState({
          input: ""
        });
      }
      if (this.state.wordCounter + 1 === this.state.displayText.length) {
        this.setState(state => ({
          displayText: state.fullText[state.textCounter + 1],
          textCounter: state.textCounter + 1,
          wordCounter: 0
        }));
      } 
    }
  }
  
  render() {
    return (
      <div className="typing-test">
        {this.state.displayText.map((word) =>
          <span className="test-displayText">{word}&nbsp;</span>
        )}
        <div className="gap-20"></div>
        <Form.Control onKeyPress={this.nextWord} onChange={this.updateResponse} value={this.state.input} className="form"/>
        <div className="gap-20"></div>
        
        {/* Debugging info */}
        <div>Input: {this.state.input}</div>
        <div>Score: {this.state.score}</div>
        <div>Counter: {this.state.wordCounter}</div>
        <div>Current word: {this.state.displayText[this.state.wordCounter]}</div>
        
      </div>
    );
  }

}

export default TypingGame;
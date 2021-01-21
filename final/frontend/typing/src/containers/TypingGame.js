//Handles all the typing game logic

import React from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import Score from '../components/GameComplete';

import CountUp from 'react-countup';


class TypingGame extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fullText: [],
      displayText: [],
      wordCount: 0,
      score: 0,
      wordCounter: 0,
      textCounter: 0,
      input: "",
      complete: false,
      startTime: 0,
      endTime: 0,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.FetchData();
  }
  
  //Function for fetching data from wikipedia, evaluating, and cleaning it
  FetchData = () => {
    axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary')
    .then(res => {
      const data = res.data.extract;

      // Sanitizing text by removing accents/diacritics
      const noSpacesData = data.replace(/\s\s+/g, ' ');
      const cleanData = noSpacesData.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      //Get total number of letters for Words per minute calculation at the end
      const wordCount = cleanData.length;
      
      //Recursively fetch data until conditions are met
      //Tested it many times, nothing breaking has happened
      if (wordCount < 200 || wordCount > 300) {
        return this.FetchData();
      }

      // Split text by sentence
      let splitData = cleanData.split(". ");

      //Request data debugging
      console.log(wordCount);
      console.log(splitData);

      this.setState(() => ({
        //One state variable for the full text and one for the first sentence
        fullText: splitData,
        displayText: splitData[0].split(" "),
        wordCount: wordCount,
        loading: false
      }));
    })
  }
  
  TimeLog = () => {
    console.log(this.state.endTime);
  }

  StartTimer = () => {
    if (this.state.startTime === 0) {
      this.setState({
        startTime: new Date().getTime()
        }, this.TimeLog() );  
    }
  }
  
  FinishTimer = () => {
    this.setState(state => ({
      endTime: ((new Date().getTime()) - state.startTime)
    }), console.log(this.state.endTime) );
  }
  
  updateResponse = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  nextWord = (event) => {
    //Starts the timer to calculate the score in the end
    this.StartTimer();
    
    if (event.code === 'Space') {
      const word = this.state.input.replace(/\s/g, "");
      
      if (word === this.state.displayText[this.state.wordCounter]) {
        this.setState({
          score: this.state.score + 1,
          input: "",
          wordCounter: this.state.wordCounter + 1
        });
      } else {
        this.setState(state => ({
          input: state.input.replace(/\s/g, "")
        }));
      }
      //check if we are done with the current text
      if (this.state.wordCounter + 1 === this.state.displayText.length && word === this.state.displayText[this.state.wordCounter]) {
        //check if we are done with the whole text
        if (this.state.textCounter + 1 === this.state.fullText.length) {
          this.FinishTimer()
          console.log("YOU WON!");
          this.setState(state => ({
            complete: !state.complete,
          }));
        } else {
          this.setState(state => ({
            displayText: state.fullText[state.textCounter + 1].split(" "),
            textCounter: state.textCounter + 1,
            wordCounter: 0
          }));
        } 
      }
    }
    
  }

  render() {
    return (
      <div className="typing-test">
        
        {
          this.state.loading

            ? <Spinner animation="border" variant="light" />

            : <div id="text-area">
                {this.state.displayText.map((text, index) =>
                <span key={index}>
                  <span id={"text" + index} 
                    className={this.state.wordCounter === index ? "highlight-text" : ""}
                  > 
                    {text}
                  </span>
                {" "}
                </span>
                )}
               </div>
        }

        <div className="gap-20"></div>

        <Form.Control disabled={(this.state.complete) ? "disabled" : ""} onKeyPress={this.nextWord} 
        onChange={this.updateResponse}
        value={this.state.input} 
        id="game-form" className="form"
        placeholder={this.state.displayText[this.state.wordCounter]}/>

        <div className="gap-20"></div>
        
        {
          this.state.startTime === 0 ?
            <div id="instructions-text">Start typing to begin the test</div>
          :
            this.state.endTime === 0
              ? <CountUp
                  start={0}
                  end={1000}
                  duration={1000}
                  decimals={2}
                  useEasing={false}
                />
              :
                <div></div>
        }
        
        {
          this.state.complete ?
            <Score { ...this.state } />
          :
            <div></div>
        }

      </div>
    );
  }

}

export default TypingGame;
import React from 'react';
import { Link } from 'react-router-dom';

import './components.css';

const Player = (props) => {
  if (props.group === 1) {
    
    return (
      <ol>
        {props.data.map((item, index) =>
        <div>
            <li key={index} className="leaderboards-entry">
              <span className="username">
                {item.user} 
              </span>
              {item.score} wpm
              {
                index === 0 
                  ? <span> &#x1F947;</span>
                  : <span></span>
              }
              {
                index === 1
                  ? <span> &#x1F948;</span>
                  : <span></span>
              }
              {
                index === 2
                  ? <span> &#x1F949;</span>
                  : <span></span>
              }
              {
                index > 2
                  ? <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
                  : <span></span>
              }
            </li>
          <div className="gap-20"></div>  
        </div>
        )}
      </ol>
    );
    
  } else {
    return (
      <ol start="6">
        {props.data.map((item, index) =>
          <div>
            <li key={index} >
              <span className="username">
                {item.user}
              </span>
              {item.score} wpm
              <span>&nbsp; &nbsp; &nbsp; &nbsp;</span>
            </li>
          </div>
          
        )}
      </ol>
    );
  }
  
  
}

export default Player;


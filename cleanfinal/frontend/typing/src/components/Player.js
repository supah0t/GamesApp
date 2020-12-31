import React from 'react';
import { Link } from 'react-router-dom';

const Player = (props) => {
  return (
    <ul>
      {props.data.map((item) =>
      <div>
          <li key={item.index} ><span className="username">{item.user}: </span>{item.score} wpm</li>
        <div className="gap-20"></div>  
      </div>
      )}
    </ul>
  );
}

export default Player;


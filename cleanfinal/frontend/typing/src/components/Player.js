import React from 'react';
import { Link } from 'react-router-dom';

const Player = (props) => {
  return (
    <ul>
      {props.data.map((item) =>
        <li key={item.index} ><Link to={`/players/${item.id}`}>Score: {item.score}</Link></li>
      )}
    </ul>
  );
}

export default Player;


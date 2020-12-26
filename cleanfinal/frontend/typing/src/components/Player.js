import React from 'react';

const Player = (props) => {
  return (
    <ul>
      {props.data.map((item) =>
        <li key={item.index} ><a href={`/${item.id}`}>Score: {item.score}</a></li>
      )}
    </ul>
  );
}

export default Player;
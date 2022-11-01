import React, { useState } from 'react';
import artistData from '../data';

const Artist = ({name, description}) => {
  const [ artistName, setArtistName ] = useState(name);
  const [ artistDescription, setArtistDescription ] = useState(description);

  const divStyle = {
    color: 'blue',
    
  };
  const [ counter, setCounter ] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  const decrement = () => {
    setCounter(prev => prev - 1)
  }

  // artistData.map(artist => artist)

  return (
    <div style={divStyle}>
      <h2>{artistName}</h2>
      <p role='paragraph'>{artistDescription}</p>
      <a href="https://www.lanadelrey.com/" target="_blank" rel="noreferrer">read more</a>
      <br></br>
      <br></br>
      <button onClick={increment}>Like</button>
      <p>{ counter }</p>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

export default Artist;

import React, { useState } from 'react';
import artistData from '../../data';

const Artist = ({name, description, link}) => {
  const [ artistName, setArtistName ] = useState(name);
  const [ artistDescription, setArtistDescription ] = useState(description);
  const [ artistLink, setArtistLink ] = useState(link);

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

  return (
    <div style={divStyle}>
      <h2>{artistName}</h2>
      <p role='paragraph'>{artistDescription}</p>
      <a href={artistLink} target="_blank" rel="noreferrer">Read More</a>
      <br></br>
      <br></br>
      <button onClick={increment}>Like</button>
      <p>{ counter }</p>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

export default Artist;

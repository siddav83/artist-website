import React, { useState } from 'react';
import artistData from '../../data';

import './style.css'

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
    <div className='main'>
      <h1>{artistName}</h1>
      <p role='paragraph'>{artistDescription}</p>
      <a href={artistLink} target="_blank" rel="noreferrer">Read More</a>
      <div className='likesCounter'>
        <button onClick={increment}>Like</button>
        <p>{ counter }</p>
        <button onClick={decrement}>Dislike</button>
      </div>
    </div>
  );
}

export default Artist;

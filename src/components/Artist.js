import React, { useState } from 'react';
import artistData from '../data';

const Artist = () => {
  const [ artistName, setArtistName ] = useState('Lana Del Rey');
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
      <h3>My Favourite Singer</h3>
      <h3>Intro</h3>
      <p>Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, containing references to contemporary pop culture and 1950s–1960s Americana.</p>
      <a href="https://www.lanadelrey.com/" target="_blank" rel="noreferrer">read more</a>
      <br></br>
      <br></br>
      {/* <button onClick={increasePokemonCount}> */}
      <button onClick={increment}>Like</button>
      <p>{ counter }</p>
      <button onClick={decrement}>Dislike</button>
      {/* </button> */}
    </div>
  );
}

export default Artist;

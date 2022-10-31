import React, { useState } from 'react';

const Artist = () => {
  const [ artistName, setArtistName ] = useState('Lana Del Rey');
  const divStyle = {
    color: 'blue',
    
  };

  return (
    <div style={divStyle}>
      <h2>{artistName}</h2>
      <h3>My Favourite Singer</h3>
      <h3>Intro</h3>
      <p>Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, containing references to contemporary pop culture and 1950s–1960s Americana.</p>
      <a href="https://www.lanadelrey.com/" target="_blank" rel="noreferrer">read more</a>
      {/* <button onClick={increasePokemonCount}> */}

      {/* </button> */}
    </div>
  );
}

export default Artist;


import React from 'react';
import { Artist, Albums, Navbar } from './components'

function App() {
  return (
    
    <main>
    <Navbar />
      < Artist name={'Lana Del Rey'} description={'Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, containing references to contemporary pop culture and 1950s-1960s Americana.'}/>
      < Albums />
    </main>
  );
}

export default App;

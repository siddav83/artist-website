
import React from 'react';
import { Artist, Albums, Navbar } from './components';
import { Header, Footer } from './layouts';
import { Artists, Home, NotFound } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <main>
      <Header />
      {/* < Artist name={'Lana Del Rey'} description={'Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, containing references to contemporary pop culture and 1950s-1960s Americana.'}/>
      <Albums album={[
        { name: 'Blue Banisters', img: "https://media.pitchfork.com/photos/6138ee39215bf99770062ab2/1:1/w_600/Lana-Del-Rey-Blue-Banisters.jpeg", date: 2021 },
        { name: 'Chemtrails Over The Country Club', img: "https://media.pitchfork.com/photos/5ffde6ad50609aa314ba30ec/1:1/w_3000,h_3000,c_limit/Lana-Del-Rey-Chemtrails-Over-the-Country-Club.jpg", date: 2021 },
        { name: 'Norman Fucking Rockwell!', img: "https://media.pitchfork.com/photos/5d5ec71f8aeb9e0008ccf296/1:1/w_600/LanaDelRey_NormalFuckingRockwell.jpg", date: 2019 },
        { name: 'Lust For Life', img: "https://media.pitchfork.com/photos/597758c93628f15c89160f71/1:1/w_320,c_limit/lustforlife.jpg", date: 2017 },
        { name: 'Honeymoon', img: "https://m.media-amazon.com/images/I/71ZvezJ2OoL._AC_SL1200_.jpg", date: 2015 },
        { name: 'Ultraviolence', img: "https://diy-magazine.s3.amazonaws.com/d/diy/Artists/L/Lana-Del-Rey/_900x900_crop_center-center_41_line/205894/lanaaaa.jpg", date: 2014 },
        { name: 'Paradise', img: "https://upload.wikimedia.org/wikipedia/en/6/6a/Paradise_EP.png", date: 2012 },
        { name: 'Born To Die', img: "https://m.media-amazon.com/images/I/71v9YKQxm2L._AC_SL1400_.jpg", date: 2012 }
    ]} /> */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/artists' element={<Artists />}></Route>
        {/* <Route path='/:name' element={<Person />}></Route> */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    <Footer />
    </main>
  );
}

export default App;

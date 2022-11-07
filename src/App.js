
import React from 'react';
import { Header, Footer } from './layouts';
import { Artists, Home, NotFound, Person } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/artists' element={<Artists />}>
          <Route path=':name' element={<Person />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

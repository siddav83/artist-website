import React from 'react';
import { NavLink } from 'react-router-dom';
import BackButton from '../../components/BackButton';

import './style.css'

export default function Header() {

  const activeClass = ({isActive}) => isActive ? 'current': undefined

  return (
    <>
    <div className="header">
    <BackButton />
        <ul>
          <li><NavLink className={activeClass} to='/'>Home</NavLink></li>
          <li><NavLink className={activeClass} to='/artists'>Artists</NavLink></li>
        </ul>
      
      </div>
    </>
  )
}

// return ( 
//   <nav className="navbar">
//       <h1>Lana Del Rey</h1>
//       <div className="links">
//           <a href="/">Home</a>
//       </div>
//   </nav>
// );

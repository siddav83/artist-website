import React from 'react';
import { NavLink } from 'react-router-dom';
import BackButton from '../../components/BackButton';

export default function Header() {
  return (
    <>

      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/artists'>Artists</NavLink></li>
      </ul>
      <BackButton />

    </>
  )
}

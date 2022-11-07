import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function Artists() {
  const location = useLocation();
  return (
    <>
      <h1>Artists</h1>
      <br/>
      <NavLink to='lana'>Lana Del Rey</NavLink>
      <br/>
      <NavLink to='robyn'>Robyn</NavLink>
      <br/>
      <Outlet key={location.pathname} />
    </>
  )
}

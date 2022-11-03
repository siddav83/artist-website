import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Artists() {
  return (
    <>
      <h1>Artists</h1>
      <br/>
      <NavLink to='lana'>Lana Del Rey</NavLink>
      <br/>
      <NavLink to='robyn'>Robyn</NavLink>
      <br/>
      <Outlet />
    </>
  )
}

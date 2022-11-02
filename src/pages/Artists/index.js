import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Artist() {
  return (
    <>
      <h1>List of Artists</h1>
      <br/>
      <NavLink to='Lana'>Lana</NavLink>
      <br/>
      <Outlet />
    </>
  )
}

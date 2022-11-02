import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function NotFound() {
    const location = useLocation()
    return (
        <>
        <h1>Sorry, there's nothing here! You were last at {location.pathname}</h1>
        <Link to='/'>Go Home</Link>
        </>
    )
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
    const location = useLocation()
    return (
        <>
        <h1>Sorry, there's nothing here at {location.pathname}!</h1>
        <Link to='/'>Go Home</Link>
        </>
    )
}

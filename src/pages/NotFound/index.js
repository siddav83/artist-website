import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
        <h1>Sorry, there's nothing here!</h1>
        <Link to='/'>Go Home</Link>
        </>
    )
}

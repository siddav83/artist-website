import React, { useState } from 'react';

import './style.css'

const Albums = ({album}) => {
    const [albumName, setAlbum] = useState(album)

    const renderRows = () => {
        return albumName.map((p) => <tr><td style={{ border: "1px solid black"}}>{p.name}</td><td style={{ border: "1px solid black"}}><img  src={p.img} width='300' /></td><td style={{ border: "1px solid black"}}>{p.date}</td></tr>)
    }

    return (
        <>
        <table style={{ border: "2px solid black", width: "60vw", textAlign: "center", margin: "auto", borderCollapse: 'collapse' }}>
        <thead>
            <tr>
            <th style={{ border: "1px solid black"}}>Name</th>
            <th style={{ border: "1px solid black"}}>Cover Art</th>
            <th style={{ border: "1px solid black"}}>Release Date</th>
            </tr>
        </thead>
        <tbody>
            { renderRows() }
        </tbody>
        </table>
        </>
    );
};

export default Albums;

import React, { useState } from 'react';

const Albums = () => {
    const [album, setAlbum] = useState([
        { name: 'Blue Banisters', img: "https://media.pitchfork.com/photos/6138ee39215bf99770062ab2/1:1/w_600/Lana-Del-Rey-Blue-Banisters.jpeg", date: 2021 },
        { name: 'Chemtrails Over The Country Club', img: "https://media.pitchfork.com/photos/5ffde6ad50609aa314ba30ec/1:1/w_3000,h_3000,c_limit/Lana-Del-Rey-Chemtrails-Over-the-Country-Club.jpg", date: 2021 },
        { name: 'Norman Fucking Rockwell!', img: "https://media.pitchfork.com/photos/5d5ec71f8aeb9e0008ccf296/1:1/w_600/LanaDelRey_NormalFuckingRockwell.jpg", date: 2019 },
        { name: 'Lust For Life', img: "https://media.pitchfork.com/photos/597758c93628f15c89160f71/1:1/w_320,c_limit/lustforlife.jpg", date: 2017 },
        { name: 'Honeymoon', img: "https://m.media-amazon.com/images/I/71ZvezJ2OoL._AC_SL1200_.jpg", date: 2015 },
        { name: 'Ultraviolence', img: "https://diy-magazine.s3.amazonaws.com/d/diy/Artists/L/Lana-Del-Rey/_900x900_crop_center-center_41_line/205894/lanaaaa.jpg", date: 2014 },
        { name: 'Paradise', img: "https://upload.wikimedia.org/wikipedia/en/6/6a/Paradise_EP.png", date: 2012 },
        { name: 'Born To Die', img: "https://m.media-amazon.com/images/I/71v9YKQxm2L._AC_SL1400_.jpg", date: 2012 }
    ])

    const renderRows = () => {
        return album.map(p => <tr><td style={{ border: "1px solid black"}}>{p.name}</td><td style={{ border: "1px solid black"}}><img src={p.img} width='300' /></td><td style={{ border: "1px solid black"}}>{p.date}</td></tr>)
    }

    return (
        <table style={{ border: "2px solid black", width: "60vw", textAlign: "center", margin: "auto" }}>
        <thead>
            <tr>
            <th style={{ border: "2px solid black"}}>Name</th>
            <th style={{ border: "2px solid black"}}>Cover Art</th>
            <th style={{ border: "2px solid black"}}>Release Date</th>
            </tr>
        </thead>
        <tbody>
            { renderRows() }
        </tbody>
        </table>
    );
};

export default Albums;

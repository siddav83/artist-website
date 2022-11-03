import React from 'react';
import { Artist, Albums } from '../../components';
import { useParams } from 'react-router-dom';

import data from './data';

export default function Person() {

    const artistName = useParams().name

    const name = data[artistName].name
    const description = data[artistName].description
    const link = data[artistName].link
    const album = data[artistName].album

    return (
        <>
        
        < Artist name={name} description={description} link={link} />
        < Albums album={album} />

        </>
    )
}

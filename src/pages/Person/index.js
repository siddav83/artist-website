import React from 'react';
import { Artist, Albums } from '../../components';
import { useParams } from 'react-router-dom';

import data from './data';

export default function Person() {

    const artistName = useParams().name

    return (
        <>

        < Artist name={data[artistName].name} description={data[artistName].description} />
        < Albums album={data[artistName].album} />

        </>
    )
}

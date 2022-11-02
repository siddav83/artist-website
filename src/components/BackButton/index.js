import React from 'react';
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import "./style.css"


export default function BackButton() {
    const navigate = useNavigate()
    return (
        <>
            <button onClick={() => navigate(-1)}>
                <div className="icon">
                <FontAwesomeIcon icon={faBackward}>
                </FontAwesomeIcon>Go Back
                </div >
            </button>
        </>
    )
}

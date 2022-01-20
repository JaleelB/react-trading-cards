import React from 'react';
import './CardBack.css';
import { IconButton } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const CardBack = ({details, name, characterType, avatarImage, handleClick}) => {

    return (
        <div className="card-back">
            <div className='card-back-header'>
                <p className='character-type'>{characterType}</p>
                <h3 className='character-name'>{name}</h3>
            </div>

            <div className='card-back-details'>
                <div className="character-avatar-back" >
                    <img className='avatar-icon' src={avatarImage} alt=''></img>
                </div>
                <div className='character-details'>{details}</div>
            </div>
            
            <div card-back-bottom>
                <IconButton onClick={handleClick} className='flip-front' edge='end'><ArrowCircleLeftIcon className='front-icon'/></IconButton>
            </div>
        </div>
    );
}

export default CardBack;

//use rafce command and tab
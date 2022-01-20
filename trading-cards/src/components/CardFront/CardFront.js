import React from 'react';
import './CardFront.css';
import { IconButton } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const CardFront = ({image, name, handleClick}) => {
    return (
        <div className="card-front">
            <div className="character-image-front">
                <img className="image" src={image} alt=''></img> 
            </div>
            <div className="card-bottom">
                <p className="character-name">{name}</p>
                <IconButton onClick={handleClick} className='flip-back' edge='end'><ArrowCircleRightIcon onClick={handleClick} className='back-icon'/></IconButton>
            </div>
        </div>
    )
}

export default CardFront;

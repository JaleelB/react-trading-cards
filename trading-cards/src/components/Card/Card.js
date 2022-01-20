// import React from 'react'
import './Card.css';
import React, { useState } from 'react';
// import CardFront from '../CardFront/CardFront';
import CardBack from '../CardBack/CardBack';

const Card = ({image, name, details, characterType, avatarImage}) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => { setIsFlipped(!isFlipped); };

    return (
        <div className="card" isFlipped={isFlipped} flipDirection='vertical'>
            {/* <CardFront 
                image={image}
                name={name}
                handleClick={handleClick}
            />  */}
            <CardBack 
                details={details} 
                name={name} 
                characterType={characterType} 
                avatarImage={avatarImage}
                handleClick={handleClick}
            />
        </div>
    );
}

export default Card;

import React from 'react'
import './Card.css';
import CardFront from '../CardFront/CardFront';
// import CardBack from '../CardBack/CardBack';

const Card = ({image, name, details}) => {
    return (
        <div className="card">
            <CardFront 
                image={image}
                name={name}
            /> 
            {/* <CardBack details={details}/> */}
        </div>
    );
}

export default Card;

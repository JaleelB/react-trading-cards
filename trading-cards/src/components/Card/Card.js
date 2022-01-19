import React from 'react';
import CardFront from '../CardFront/CardFront';
import './Card.css';




const Card = () => {

    const heroes = [
        {
          heroName: 'Black Panther',
          heroDetails: '',
          heroImage: 'images/black-panther.png'
        },
        {
          heroName: 'Spider-Man (Miles Morales',
          heroDetails: '',
          heroImage: 'https://pngset.com/images/miles-morales-for-iphone-wallpaper-miles-morales-spider-man-person-human-dance-pose-leisure-activities-transparent-png-943695.png'
        },
        {
          heroName: 'Storm',
          heroDetails: '',
          heroImage: 'https://w7.pngwing.com/pngs/612/746/png-transparent-marvel-storm-illustration-marvel-avengers-alliance-storm-carol-danvers-ultron-marvel-comics-storm-x-men-file-comics-fictional-character-film.png'
        },
        {
          heroName: 'Black Widow',
          heroDetails: '',
          heroImage: 'https://toppng.com/uploads/preview/black-widow-avengers-11563194853ekcktgvfre.png'
        }
    
    ];

    return (
        <div className="character-card">
            <CardFront image={heroes[0].heroImage} name={heroes[0].heroName}/>
        </div>
    );
}

export default Card;

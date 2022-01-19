import React from 'react';
import Card from '../Card/Card';

import './HeroCards.css';


const HeroCards = () => {

    const heroes = [
        {
          heroName: 'Black Panther',
          heroDetails: '',
          heroImage: 'images/black-panther.png'
        },
        {
          heroName: 'Black Widow',
          heroDetails: '',
          heroImage: 'images/black-widow.png'
        },
        {
          heroName: 'Vision',
          heroDetails: '',
          heroImage: 'images/vision.png'
        }
    ];

    return (
        <ul className='hero-cards'>
            {
                heroes.map((hero) => {
                  return <li key={hero.heroName} className="hero-card"> 
                    <Card name={hero.heroName} image={hero.heroImage} details={hero.heroDetails}/> 
                  </li>
                }) 
            }
        </ul>
    );
}

export default HeroCards;

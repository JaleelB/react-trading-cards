import React from 'react';
import Card from '../Card/Card';

import './HeroCards.css';


const HeroCards = () => {

    const heroes = [
        {
          heroName: 'Black Panther',
          heroDetails: `The Black Panther is the ruler and protector of Wakanda; a job fit for a king. ... As the king of the African nation of Wakanda, T'Challa protects his people as the latest in a legacy line of Black Panther warriors.`,
          heroImage: 'images/black-panther.png',
          avatarImage: 'https://variety.com/wp-content/uploads/2018/06/black-panther-portrait.png',
          characterType: 'HERO'
        },
        {
          heroName: 'Black Widow',
          heroDetails: 'Natasha Romanoff, an expert in many forms of martial arts, is also a skilled gymnast and possesses superhuman strength, speed, agility, and endurance. She is as deadly in darkness as she is in light.',
          avatarImage: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-1/p720x720/59614137_1323465731153878_8501414843583037440_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=HddnocGHTxMAX9gnE6E&_nc_ht=scontent-lga3-2.xx&oh=00_AT_Hr6tTbb0Wm_-APuVhQZwv2uGaDYb-dglGx3u-21jHog&oe=620CF35E',
          heroImage: 'images/black-widow.png',
          characterType: 'HERO'
        },
        {
          heroName: 'Dr. Strange',
          heroDetails: `Doctor Stephen Strange endured a terrible accident that led him to evolve in ways he could have never foreseen.As Earth’s Sorcerer Supreme, Doctor Strange wields arcane spells and mystical artifacts to defend the planet against malevolent threats.`,
          heroImage: 'images/strange.png',
          avatarImage: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/44/1477933942-doctor-strange-movie-composer-cumberbatch.jpg?crop=0.502xw:1.00xh;0.269xw,0&resize=480:*',
          characterType: 'HERO'
        }
    ];


    return (
      <ul className='hero-cards'>
        {
          heroes.map((hero) => {
            return <li key={hero.heroName} className="hero-card"> 
              <Card name={hero.heroName} image={hero.heroImage} details={hero.heroDetails} characterType={hero.characterType} avatarImage={hero.avatarImage}/> 
            </li>
          }) 
        }
      </ul>
    );
}

export default HeroCards;

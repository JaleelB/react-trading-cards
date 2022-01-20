import React from 'react';
import Card from '../Card/Card';
import './VillianCards.css';

const VillianCards = () => {
    const villians = [
        {
          villianName: 'Dr. Doom',
          villianDetails: `Doctor Doom is one of the most accomplished men on Earth. He's built the greatest armor on the planet, a suit that lets him battle the toughest foes and drain the power of gods. He's one of the most powerful sorcerers on the planet, second only to Doctor Strange.`,
          villianImage: 'images/doom.png',
          avatarImage: 'https://cdnb.artstation.com/p/media_assets/images/images/000/661/589/large/DoomFinalSmall.jpg?1603667398',
          characterType: 'VILLIAN'
        },
        {
          villianName: 'Hela',
          villianDetails: 'Hela, otherwise known as the Goddess of Death, is the ruler of Hel and Niflheim and the sister of Loki and her archnemesis of Thor. She has superhuman strength, speed, agility, and reflexes. She can withstand a great deal in a fight and she can release powerful bolts of energy that can age or kill her opponent.',
          avatarImage: 'https://static.tvtropes.org/pmwiki/pub/images/mcu_hela_6.png',
          villianImage: 'images/hela.png',
          characterType: 'VILLIAN'
        },
        {
          villianName: 'Loki',
          villianDetails: `Loki is one of Marvel's greatest villains, having fought some of the best heroes around. The God of Mischief's threat is responsible for the formation of the Avengers and he's conquered Asgard more than once. His strength, skill, and magic make him one of the most daunting foes around.`,
          villianImage: 'images/loki.png',
          avatarImage: 'https://www.sideshow.com/storage/product-images/909392/president-loki_marvel_square.jpg',
          characterType: 'VILLIAN'
        }
    ];


    return (
      <ul className='villian-cards'>
        {
          villians.map((villian) => {
            return <li key={villian.villianName} className="villian-card"> 
              <Card name={villian.villianName} image={villian.villianImage} details={villian.villianDetails} characterType={villian.characterType} avatarImage={villian.avatarImage}/> 
            </li>
          }) 
        }
      </ul>
    );
};

export default VillianCards;

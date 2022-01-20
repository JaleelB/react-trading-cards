import './CSS/LandingPage.css';
import './CSS/Hero.css';
import './CSS/Villian.css'
// import useStyles from './AppStyle';
import {Link} from 'react-scroll'
import Button from '@mui/material/Button';

import HeroCards from './components/HeroCards/HeroCards';
import VillianCards from './components/VillianCards/VillianCards';

function App() {

  return (
    <div className="container">

      <div className="landing-page">

        <div className="box hero-left flex"> 
          <div className="hero-choice">
            <p className="bold">DO YOU WANT TO BE</p>
            <h1 className="big">THE HERO?</h1>
          </div>
          <Button className="hero-btn" variant="outlined" >
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>SHOW ME THE HEROES</Link>
          </Button>
        </div>

        <div className="slider">
          <div className="box villian-right flex">
            <div className="villian-choice">
              <p className="bold">DO YOU WANT TO BE</p>
              <h1 className="big">THE VILLIAN?</h1>
            </div>
            <Button className="villian-btn" variant="outlined" >
              <Link to="villian" spy={true} smooth={true} offset={15} duration={500}>SHOW ME THE VILLIANS</Link>
            </Button>
          </div>
        </div>

      </div>

      <div className="villian-cards-container flex" id="villian">
        <h1 className='villian-page-title'>VILLIANS</h1>
        <VillianCards/>
      </div>

      <div className="hero-cards-container flex" id="hero">
        <h1 className="hero-page-title">HEROES</h1>
        <HeroCards/>
      </div>

    </div>
  );
}

export default App;

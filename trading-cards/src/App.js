import './CSS/LandingPage.css';
import './CSS/Hero.css'
// import useStyles from './AppStyle';
import {Link} from 'react-scroll'
import Button from '@mui/material/Button';

import Card from './components/Card/Card';

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
              <Link to="villian" spy={true} smooth={true} offset={50} duration={500}>SHOW ME THE VILLIANS</Link>
            </Button>
          </div>
        </div>

      </div>

      <div className="villian-cards-container flex" id="villian">
        <h1>HELLO VILLIANS</h1>
      </div>

      <div className="hero-cards-container flex" id="hero">
        {/* <h1>HELLO HEROES</h1> */}
        <Card/>
      </div>

    </div>
  );
}

export default App;

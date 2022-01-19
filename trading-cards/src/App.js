import './App.css';
// import useStyles from './AppStyle';
import Button from '@mui/material/Button';

function App() {
  

  // const classes = useStyles();

  return (
    <div className="container">

      <div className="landing-page">

        <div className="box hero-left flex"> 
          <div className="hero-choice">
            <p className="bold">DO YOU WANT TO BE</p>
            <h1 className="big">THE HERO?</h1>
          </div>
          <Button className="hero-btn" variant="outlined" >SHOW ME THE HEROES</Button>
        </div>

        <div className="slider">
          <div className="box villian-right flex">
            <div className="villian-choice">
              <p className="bold">DO YOU WANT TO BE</p>
              <h1 className="big">THE VILLIAN?</h1>
            </div>
            <Button className="villian-btn" variant="outlined" >SHOW ME THE VILLIANS</Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

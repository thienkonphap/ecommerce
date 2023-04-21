import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/Home.css'
import { makeStyles } from '@material-ui/core/styles';
import slideshow1 from '../img/slideshow4.jpeg'
import slideshow2 from '../img/slideshow5.jpeg'
import slideshow3 from '../img/slideshow3.png'
import Categories from './Categories';

const slideImages = [
  slideshow1,
  slideshow2,
  slideshow3
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    grid: 'grid'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Home() {
  const classes = useStyles();
  const properties = {
    duration: 1000,
    autoplay: true,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
    // cssClass: "height: 70px"
  };
  return (
    <div className='homePage'>
      <div className="home">
        <Slide ref={properties}>
          {slideImages.map((each, index) => (
            <img className='each-image'
              //style={{height: "80h" }}
              src={each}
              key={index}
              alt="sample"
            />
          ))}
        </Slide>
      </div>
      <Categories/>
    </div>
  );
}

export default Home
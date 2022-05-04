import React from 'react'
import Animations from '../../utilities/Animations'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'


export default function Home(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  return (
    <div className='home-container' fade-in id={props.id || ""}>
      <Header />
        <Profile />
        <Footer />
    </div>
  )
}
import React from 'react'
import Navbar from './Navbar';
import player from '../images/player.png';
import music from '../images/music1.png';
import circle from '../images/circles.png';
import eclipse from '../images/Eclipse.png';
import group from '../images/Eclipse_head.png';
import star from '../images/star-img.png';
import star1 from '../images/star-img2.png';

function Header(){
    return (
     <div id='main'>
        <Navbar/>
        <div className='name'>
        <div className='group'><img src={group} alt=""/></div>
        <img className='play' src={player} alt=""/>
        <div className='star'><img src={star} alt=""/></div>
        <div className='star1'><img src={star1} alt=""/></div>
        <div className='circles'><img src={circle}></img></div>
        <h1>Connecting You To Your Favorite Artists </h1>
        <p>A place to Listen, Create and Earn by Creating Albums and Listening you Music from your Favorite creators</p>
        <div className='music'><img src={music} alt=""/></div>
        <div className='eclipse'><img src={eclipse} alt=""/></div>
        <a href='#' className='cv-btn'>Sign up for Early Access</a>
        <br/>
        <br/>
        <br/>
        <h3>Join our community</h3>
        <div className='container'>
            <h5>Stay Tuned for Updates,contacts and giveawys </h5>  
            <div className='buttons'>
             <button className='email1'>Telegram</button>
            <button className='email1'>Twitter</button> 
            </div>      
        </div>
     </div>
     </div>
    )
}
export default Header;
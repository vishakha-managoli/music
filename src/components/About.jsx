import React from "react";
import headphones from '../images/headphone.png';
import group1 from '../images/Eclipse_head.png';
function About(props){
    return (
        <div id='about'>
        <div className='connect'>
        <h1>A Web3 Music Creation & Sharing Platform that Let You Earn </h1>
        <p>A Platform to Create, Share and Earn by Listening & Creating Your Favourite Songs and Purchage Exclusive Merchandise From Your Favourite Artists</p>
        <a href='#' className='cv-btn2'>Sign up for Early Access</a>
        </div>
         <div className="about-in">
          <div className="about-image">
              <img src={props.image} alt=''/>
          </div>
          <div className="about-text">
              <h2>YOU ARE</h2>
              <h2>LISTENING</h2>
              <h2>CREATING</h2>
              <h2>EARNING</h2>
              </div>
              </div>
          <div className="works">
              <div className="work_text">
              <h2>How it Works?</h2>
              <p>Content needed to be written</p>
              <button className="email">Get started</button>
              </div>
              <div className="head">
              <img src={headphones}/>
              </div>            
          </div>
          <div className='group1'><img src={group1} alt=""/></div>  
        </div>
    )
}
export default About;
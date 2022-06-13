import React from "react";
import player1 from '../images/ui.png';
import player from '../images/music.png';
import group2 from '../images/Group3.png';
import group3 from '../images/Eclipse.png';
function Presentation(props){
    return (
        <section>
        
        <div id='presentation'>
        <div className="p1">
          <div className="text1">
              <h1>Are you an Artist?</h1>
              <p>Are you interested in partnering with us on this project? We'd love to hear from you. Please get in touch with us to get started.</p>
              <button className="cv-btn2" href="#">Register</button>
          </div>
          <br/>
          <div className="img1">
          <div className='group2'><img src={group2} width="400" height="400" alt=""/></div>
             <div className="artist"><img src={player} alt=" "/></div> 
             <div className='group3'><img src={group3} width="400" height="400" alt=""/></div>
          </div>
          </div>
          
          <div className="p2">
          <div className="img2">
          <img className="artist1" src={player1} alt=" "/>
          </div>
          <div className="text2">
              <h1>Join Early Access</h1>
              <p>Top 1,000 users with the highest Referrals will get a Free Limited Edition Boku NFT. Join Early Acess. How It Works?</p>
              <button className="email" href="#">Email Address</button>
              </div>
          </div>
        </div>
        </section>
    )
}

export default Presentation;
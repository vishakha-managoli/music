import React from "react";
import bg from '../images/Group2.png';
import circle from '../images/circles.png';
function Contacts(){
    return (
        <section>
        <div id="contact">
        <div className='circlesc'><img src={circle}></img></div>
             <p>Boku, the world’s first web3 music creation and listening platform, makes it so easy to make your creation reach million’s of hearts. 
               <br/><br/>Sign up to get the latest in Boku news, Updates, and more.</p>
               <button className="email">Email Address</button>        
        <div className="a-left">
            <ul>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Terms of Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>           
        </div>
        <div classname="green" >
        <img src={bg} alt=''></img>
        </div> 
        </div>
        </section>
    )
}
export default Contacts;
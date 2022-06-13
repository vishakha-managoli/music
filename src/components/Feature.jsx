import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from '../images/player.png';
import featureimage1 from '../images/music1.png';
import featureimage2 from '../images/player.png';
 function Feature(){
     return (
         <div id="features">
         <div className="a-container">
             <FeatureBox image={featureimage} title='Listen Free Music' para='QP BRO FREE SPOTIFY'/>
             <FeatureBox image={featureimage} title='Create For Everyone' para='QP BRO FREE SPOTIFY'/>
             <FeatureBox image={featureimage} title='Music For Earn' para='QP BRO FREE SPOTIFY'/>
         </div>
         </div>
     )
 }

 export default Feature;
import React from "react";
 function FeatureBox(props){
     return (
         <div className="grid">
         <div className="feature-items">
             <div>
                 <img src={props.image} />
                 <h4>{props.title}</h4>
                 <p>{props.para}</p>
             </div>
         </div>
         </div>
     )
 }
 export default FeatureBox;
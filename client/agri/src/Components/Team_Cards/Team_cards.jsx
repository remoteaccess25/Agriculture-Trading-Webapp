import React from 'react'
import  "./Team_cards.css"
import insta from "../../Images/insta.png"
import linkdin from "../../Images/linkdin.png"
export default function Team_cards(props) {




  return (
   <>
   <div className="teamcard_main_div">
    <div className="teamcard_upper_div">
    <div className="teamcard_left_div">
        <h1>{props.name}</h1>
        <p className="textof">
            {props.para}
        </p>
    </div>
    <div className="teamcard_right_div">
        <img className='teamcard_image' src={props.image} alt="team mate image" />
    </div>
    </div>
    <div className="teamcard_lower_div">
        <a href={props.instaLink}>
        <img className='teamcard_icons' src={insta} alt="icons" />
        </a>
        <a href={props.linkdinLink}>
        <img className='teamcard_icons' src={linkdin} alt="icons" />
        </a>
        
       
        
    </div>
    
   </div>


   </>
  )
}

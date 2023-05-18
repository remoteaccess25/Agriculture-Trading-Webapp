import React, { useEffect } from "react";
import "./About.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Team_cards from "../Components/Team_Cards/Team_cards";
import about_image from "../Images/about_image.png"
const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);






  return (
<>
<div className="abouPage_main_div">
    <div className="about_div1">
      <div className="about_left_div">
        <div className="context_div1">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ipsam.

        </div>
        <div className="context_div2">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ab?
        </div>
        
      </div>
      <div className="about_right_div">
        <img className="about_div1_image" src={about_image} alt="" />
      </div>
    </div>





{/* heading */}
    <div className="about_heading_div">
      <h1>MEET OUR TEAM</h1>
    </div>


    {/* animation */}

    <div className="team_div">
      <div className="team_left_div">

{/* onkar div */}
        <div className="onakr_div  " data-aos={"fade-right"}
            data-aos-delay={"700"}>
          <Team_cards para={""} name={"Onkar"} linkdinLink={"https://www.linkedin.com/in/onkar-kakade-465bb5229"} instaLink={"https://instagram.com/onkar_kakade29"}/>
        </div>


{/* padekar div */}
        <div className="padekar_div" data-aos={"fade-right"}>
        <Team_cards name={"Aditya"} linkdinLink={"https://www.linkedin.com/in/aditya-padekar-296522224"} instaLink={"https://instagram.com/adityapadekar"}/>
        </div>
      </div>



{/* vertical line */}

<div className="vertical_line">
  <div className="achievement_container cricle1" data-aos={"flip-up"}></div>
  <div className="line line1" data-aos={"zoom-in-up"}
            data-aos-delay={"700"} ></div>
  <div className="achievement_container cricle2" data-aos={"flip-up"}></div>
  <div className="line line2" data-aos={"zoom-in-up"}
            data-aos-delay={"700"}></div>
  <div className="achievement_container cricle3" data-aos={"flip-up"}></div>
  <div className="line line3" data-aos={"zoom-in-up"}
            data-aos-delay={"700"}></div>
  <div className="achievement_container cricle4" data-aos={"flip-up"}></div>
  <div className="line line4" data-aos={"zoom-in-up"}
            data-aos-delay={"700"}></div> 
</div>




      <div className="team_right_div">


        {/* pratikdiv */}
          <div className="pratik_div" data-aos={"fade-left"}>
          <Team_cards name={"Pratik"} linkdinLink={"https://www.linkedin.com/in/pratik-pawar-40975524b"} instaLink={"https://instagram.com/pratik_0309"}/>
          </div>




          {/* abhinav div */}
          <div className="abhinav_div"  data-aos={"fade-left"}>
          <Team_cards name={"Abhinav"} linkdinLink={"https://www.linkedin.com/in/abhinav-zilkarwar-85611022b"} instaLink={"https://instagram.com/abhiz_2803"}/>
          </div>
      </div>


    </div>









</div>






























{/* 


<h1 className="achievement_container" data-aos={"zoom-in-up"} >
            hello
          </h1>

          <h1 data-aos={"zoom-in-up"} >
            hi
            </h1>


            <div className="achievements_timeline" data-aos={"fade-right"}
            data-aos-delay={"700"} >
                osdodvhpdpbnv

          </div>




          <div>
           <h1 className="achievements_timeline"
              data-aos={"zoom-out"}
              data-aos-delay={"1200"}
            
            >
              OUR ACHIEVEMENTS
            </h1>
         </div>



         <div 
            data-aos={"fade-left"}
            data-aos-delay={"700"}
            className="achievement_container"
          >

            nsgipaebjsjrtbo
          </div>
          

 */}














</>
    
    
    //     
    //      
    //      
    //   <div className="achievements_timeline">
    //     {.map((a, i) => {
    //       return a.align === 0 ? (
    //         <div className="achievement_container left">
    //           <div
    //             data-aos-delay={"0"}
    //             data-aos={"fade-right"}
    //             className="achievement_content_container"
    //           >
    //             <div className="achievements_contents">
    //               <h2>{a.name}</h2>
    //               <div className="achievement_devicer"></div>
    //               <p>{a.description}</p>
    //             </div>
    //             <div className="achievement_image_conainer">
    //               <img
    //                 loading="lazy"
    //                 decoding="async"
    //                 className="achievement_image"
    //                 src={a.img}
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       ) : (
    //         <div className="achievement_container right">
    //           <div
    //             data-aos-delay={"0"}
    //             data-aos={"fade-left"}
    //             className="achievement_content_container"
    //           >
    //             <div className="achievement_image_conainer">
    //               <img
    //                 loading="lazy"
    //                 decoding="async"
    //                 className="achievement_image"
    //                 src={a.img}
    //                 alt=""
    //               />
    //             </div>
    //             <div className="achievements_contents">
    //               <h2>{a.name}</h2>
    //               <div className="achievement_devicer"></div>
    //               <p>{a.description}</p>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default About;

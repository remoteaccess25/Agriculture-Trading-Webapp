import React, { useState } from "react";
import "./Home.css";

import axios from "axios";
import { Link } from "react-router-dom";
import fruitsimage from "../Images/fruits.jpg"
import vegetableimage from "../Images/vegetables.jpg"
export default function Home() {
  const [search, setSearch] = useState("");
  const [searchdata, setSearchdata] = useState([]);
  
  const handelSearch = async () => {
    try {
      const res = await axios.post("");
      setSearchdata(res.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search-div">
        <input
          className="home-search-box"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handelSearch}>SEARCH</button>
      </div>

      <div className="main-div">
        <div className="home_image1"></div>
       
        <div className="cards_div">

         <Link to="/recomended/fruits">
         <div className="card_one">
          
              <img className="home_images" src={fruitsimage} alt="fruits image" />
            <div className="image_name">Fruits</div>
            
          </div>
          
          </Link>
          
        <Link to="/recomended/vegetables">

        <div className="card_second">
            <img className="home_images" src={vegetableimage} alt="vegetables image" />
            <div className="image_name">Vegetables</div>
           
          </div>
        </Link>
        
        </div>


          {/* second home image */}
          <div className="home_image2">

          <img className="image2" src={""} alt="home image 2" />

          </div>














        
      </div>





   
    </>
  );
}

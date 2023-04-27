import React, {  useState } from "react";
import "./Home.css";
import Cards from "../Components/Cards/Cards"
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import fruitsimage from "../Images/fruits.jpg"
import vegetableimage from "../Images/vegetables.jpg"
import Home1 from "../Images/Home1.png"
import Home2 from "../Images/Home2.png"
import pinapale from "../Images/pinapale.png"

import {CiSearch} from "react-icons/ci"
//importing admin data




//cookies
// import {useCookies} from "react-cookie"
import Cookies from "js-cookie";


export default function Home() {

//navigate
const navigate=useNavigate()


//cookies
// const [cookies, setCookie, removeCookie] = useCookies(['admin']);




  const [search, setSearch] = useState("");
  const [searchdata, setSearchdata] = useState([]);
  const [showsearchData,setShowsearchData]=useState(false)  




  const handelSearch = async (e) => {


    try {
        // const productName=search
        // console.log("product name==",productName)
        if(e.key === 'Enter'){

       
      if(search!=""){

        const res = await axios.post("http://localhost:8000/products",
        {"productName":search}
        );
        
        setSearchdata([res.data.products]);
        setShowsearchData(true)
        setSearch("")
        // console.log(searchdata)
      }else{
        return(

          <div>No input</div>
        )
      }
      }
      
    } catch (error) {
      console.log(error);
    }
  };







  //admin context
  // const {dispatch, email,password,token }=useContext(AdminContext)

  
  

  //show create button for admin

  const showCreateButton=()=>{

    const mycookies=Cookies.get("admin")
    // console.log("mycookies",mycookies)

    if(mycookies!==undefined){

      return(
         <div className="cretae_divert">

        <button onClick={NavigateToCreatePage}>Create Products </button>

        </div> 
      )

    }

    
  }


  

  const NavigateToCreatePage=()=>{
    navigate("/admin/create")
  }

  return (
    <>
        {/* search menu */}
      <div className="search-div">
        {/* <div className="searchBar_icon_mix_div"> */}
        <input
          className="home-search-box"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          />
          
          <CiSearch type="submit" className="search_logo" onClick={handelSearch}/>
          {/* </div> */}
        
      </div>



          {
            showsearchData && <>
            <button onClick={()=>{setShowsearchData(false)}}>Close</button>
                  
                <div className="show_search">
                  {
                    searchdata[0].map((item,index)=>{
                      return(
                        <div key={index} className="show">
                          <Cards data={item}></Cards>

                        </div>
                      )
                    })
                  }


                </div>
              
              </>



          }






      {/* main div */}

      <div className="main-div">
        
        <div className="home_image1">
          
        <img className="image1" src={Home1} alt="home image 1" />
        </div>
       


        <div className="cards_div">
          

         <Link className="home_anchor_images" to="/product/recomended/fruits">
         <div className="card_one">
          
              <img className="home_images" src={fruitsimage} alt="fruits image" />
            <div className="image_name">Fruits</div>
            
          </div>
          
          </Link>
          
        <Link className="home_anchor_images" to="/product/recomended/vegetables">

        <div className="card_second">
            <img className="home_images" src={vegetableimage} alt="vegetables image" />
            <div className="image_name">Vegetables</div>
           
          </div>
        </Link>
        
        </div>




        

      </div>

         
        
          {/* second home image */}
      <div className="home_image2">

<img className="image2" src={Home2} alt="home image 2" />
<p className="image2_text">text here</p>
</div>



      {/* create Page for Admin */}
           <div className="Create_button">
            <img src={pinapale} alt="" />
            
           {showCreateButton()}
            
            </div> 

          



   
    </>
  );
}

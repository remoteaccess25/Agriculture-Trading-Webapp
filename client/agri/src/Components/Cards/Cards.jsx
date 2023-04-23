import React, { useEffect } from 'react'
import "./Cards.css"
import {AdminContext}from "../context/Admin/Admin"
import { useContext } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'



export default function Cards(props) {


  const {dispatch,isLogedIn ,token}=useContext(AdminContext)

  const mycookies=Cookies.get("admin")

// console.log("token",token)
const checkLogin=()=>{
  const mycookies=Cookies.get("admin")
  const localToken=localStorage.getItem("token")


  if(mycookies!==undefined){
    dispatch({type:"LOGIN"})
    dispatch({type:"TOKEN",payload:localToken})
  }else{
    dispatch({type:"LOGOUT"})
  }
}


useEffect(()=>{
checkLogin()
},[])


const deleteProduct=async()=>{
  const id=props.data._id
  try {
    // console.log("going")
    const result=await axios.delete(`http://localhost:8000/admin/delete/${id}`,{
      headers: { authorization: `Bearer ${token}` }
    }
    )
    

    console.log("delete result",result)
    
  } catch (error) {
    console.log(error)
  }
        
}

//  /admin/delete/:id 
// console.log(props.data._id)
  return (
    <>
    <h1>{props.data._id}</h1>
    <Link to={`/product/${props.name}/${props.data._id}`}>
     <div className="dummycards_div">
      
      <div className="cards_upper_div">
        <img className='cards_image' src={""} alt="" />
        <div className="cards_info">
          <div className="product_info">
          <h2>{props.data.productName}</h2>
          <div className="min_price">Min Price: {props.data.minPrice}</div>
          <div className="max_price">Max Price: {props.data.maxPrice}</div>
          <div className="size">Size: {props.data.productSize}</div>
          <div className="market">Market: {props.data.marketName}</div>
          </div>
          
        </div>

      </div>


      <div className="cards_lower_div">
            see all
      </div>
     
     </div>
     </Link>

     {isLogedIn && 
      <div className='admin_option'><button>update</button><button onClick={()=>deleteProduct()}>delete</button></div>
      }

    
    </>
   
  )
}

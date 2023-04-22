import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {GiSwordsEmblem} from "react-icons/gi"
import {RiLogoutCircleRLine} from "react-icons/ri"



//importing admin data

import { AdminContext } from "../../Components/context/Admin/Admin";

import Cookies from "js-cookie";



export default function Navbar() {

    const navigate=useNavigate()
const show_register=()=>{
    navigate("/register")
}



 //admin context
 const {dispatch, email,password,token }=useContext(AdminContext)


 console.log(`my${email} email `)


 const logOut=()=>{
    Cookies.remove("admin")
    localStorage.removeItem("email")
    console.log("happens")
 }

 const showLogout=()=>{
    const myCookies=Cookies.get("admin")

    if(myCookies!==undefined  ){
            return(
                <button onClick={logOut}><RiLogoutCircleRLine></RiLogoutCircleRLine></button>
            )
    }
 }


  return (
    <>
    <div className="nav_div">
        <div className="left_div">
            <div className="logo_div">
                <Link to="/"><h1>Logo</h1></Link>
            </div>
        </div>
        <div className="right_div">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/products/vegetables">Vegitables</Link>
                <Link to="/products/fruits">Fruits</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
                <GiSwordsEmblem  className='show_hide' onClick={show_register}></GiSwordsEmblem>
                {/* <Link to="/register">Register</Link>
                <Link to="/login">Login</Link> */}

                {/* log out button */}

                   {showLogout()}




            </ul>
        </div>
    </div>
    
    
    </>
  )
}

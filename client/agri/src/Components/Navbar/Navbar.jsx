import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'


import {GiSwordsEmblem} from "react-icons/gi"

export default function Navbar() {

    const navigate=useNavigate()
const show_register=()=>{
    navigate("/register")
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

            </ul>
        </div>
    </div>
    
    
    </>
  )
}

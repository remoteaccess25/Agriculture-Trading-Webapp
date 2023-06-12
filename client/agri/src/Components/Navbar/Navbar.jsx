import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GiSwordsEmblem } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Logo from "../SVG/Logo";

//importing admin data

import { AdminContext } from "../../Components/context/Admin/Admin";

import Cookies from "js-cookie";

export default function Navbar() {





  const navigate = useNavigate();
  const show_register = () => {
    navigate("/register");
  };

  //admin context
  const { dispatch, isLogedIn, email, password, token } =
    useContext(AdminContext);

  console.log(`my${email} email `);

  const logOut = () => {
    Cookies.remove("admin");
    localStorage.removeItem("email");
    localStorage.removeItem("token")
    localStorage.removeItem("role")

    dispatch({ type: "LOGOUT" });

    // console.log("happens")
  };

  const showLogout = () => {
    const myCookies = Cookies.get("admin");

    if (myCookies !== undefined) {
      return (
        <button className="logout_button" onClick={logOut}>
          {/* <RiLogoutCircleRLine></RiLogoutCircleRLine> */}
          LogOut
        </button>
      );
    }
  };

  //refreshing page on logout

  return (
    <>
      <div className="nav_div">
        <div className="left_div">
          <div className="logo_div">
            <Link to="/">
                <Logo></Logo>
            
            </Link>
          </div>
        </div>
        <div className="right_div">
          <ul>
            <Link className="anchor" to="/">
              Home
            </Link>
            <Link className="anchor" to="/products/vegetables">
              Vegetables
            </Link>
            <Link className="anchor" to="/products/fruits">
              Fruits
            </Link>
            <Link className="anchor" to="/about">
              About
            </Link>
            {/* <Link className='anchor' to="/contact">Contact</Link> */}

            <GiSwordsEmblem  className="show_hide"
           onClick={show_register}></GiSwordsEmblem>
             {/* <Link className="anchor"  to="/register">Register</Link> */}
               

            {/* log out button */}

            {showLogout()}
          </ul>
        </div>
      </div>





{/* //for below 700px */}


{/* {showBelowNav()} */}





    </>
  );
}

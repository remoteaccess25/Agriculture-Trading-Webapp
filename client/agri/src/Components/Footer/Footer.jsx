import React from "react";
import "./Footer.css";
import {SiFacebook} from "react-icons/si"
import {AiFillInstagram} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import {HiHome} from "react-icons/hi"
import {FiPhoneCall} from "react-icons/fi"
import {HiMail} from "react-icons/hi"
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <>
      <div className="footer_div">
       
       <div className="footer_inner_div">

       <div className="div_1">

        <div className="footer_logo_div">
          <img src={"footer logo"} alt="footer logo" />
        </div>
        <p className="div1_text">A platform where farmers can get there useful market</p>
        <p className="footer_after_1030px">Connect Us</p>
        <div className="footer_left_div_icon">

          <SiFacebook className="footer_icons"></SiFacebook>
          <AiFillInstagram className="footer_icons"></AiFillInstagram>
          <BsLinkedin className="footer_icons"></BsLinkedin>
        </div>


       </div>
        
        <div className="div_2">
          <h2>Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="div_3">
          <h3>Contact Information</h3>
          <div className="div3_icon_div">
          <HiHome className="footer_icons">Mumbai</HiHome>
          <FiPhoneCall className="footer_icons">+9123456674</FiPhoneCall>
          <HiMail className="footer_icons">info@harvesthub.com</HiMail>
          </div>
        </div>

       </div>
      
        
       
       <div className="footer-last-div">
          <h3>All Rights Reserved</h3>
        </div>
      </div>
    </>
  );
}

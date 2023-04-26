import React from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {AdminContext} from "../Components/context/Admin/Admin"
import { useContext } from "react";

//importing react cookies
// import {useCookies} from "react-cookie"
import Cookies from "js-cookie";

export default function Login() {
  
  const navigate=useNavigate()

  const {dispatch, email,password,token }=useContext(AdminContext)

  
  //cookies
  // const [cookies, setCookie, removeCookie] = useCookies(['admin']);




  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", { 
        email, password 
       });

       console.log("login data",response)

       if(response.status===200){

        //storing to cookies
        dispatch({type:"TOKEN",payload:response.data.token})
        dispatch({type:"LOGIN"})
        localStorage.setItem("token",token)

        //storing email to local storage
        localStorage.setItem("email",email)
        // setCookie("admin",{token,email})
        Cookies.set("admin",token,email)
        navigate("/")
       }


    }
    
    
    catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <div className="login">
        <form onSubmit={Login}>
       
          <input
            type="text"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => {
              {dispatch({type:"EMAIL",payload:e.target.value})}
            }}
          />

         
          <input
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => {
              {dispatch({type:"PASSWORD",payload:e.target.value})}
            }}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

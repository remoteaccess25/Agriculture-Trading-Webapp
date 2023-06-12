import React, { useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../Components/context/Admin/Admin";
import { useContext } from "react";
import Logo from "../Components/SVG/Logo";

//importing react cookies
// import {useCookies} from "react-cookie"
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();

  const { dispatch, email, password, token } = useContext(AdminContext);

  useEffect(()=>{
    console.log(token,email,password)
    console.log(localStorage.getItem("token"))
  })

  //cookies
  // const [cookies, setCookie, removeCookie] = useCookies(['admin']);

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/login`, {
        email,
        password,
      });

      console.log("login data", response);
      if (response.status === 200) {
        //storing to cookies
        dispatch({ type: "TOKEN", payload: response.data.token });

        dispatch({ type: "LOGIN" });
        localStorage.setItem("token", response.data.token);
        console.log("token set",token)
        //storing email to local storage
        localStorage.setItem("email", email);
        // setCookie("admin",{token,email})
        Cookies.set("admin", token, email);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login">
        <form className="login_form" onSubmit={Login}>
          <div className="logo_login_div">
           <Logo></Logo>
           
          </div>
          <div  className="inputs_div">

          <input className="inputs"
            type="text"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => {
              {
                dispatch({ type: "EMAIL", payload: e.target.value });
              }
            }}
          />

          

          <input className="inputs"
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => {
              {
                dispatch({ type: "PASSWORD", payload: e.target.value });
              }
            }}
          />

          <button  className="auth_button" type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

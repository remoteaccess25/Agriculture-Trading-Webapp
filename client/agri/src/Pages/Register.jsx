import React from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import {AdminContext} from "../Components/context/Admin/Admin"
import { useContext } from "react";


export default function Register() {

    const navigate=useNavigate();

    const {dispatch, name,email,password,contactNum,accessKey,acessreply}=useContext(AdminContext)

  

  const Register = async (e) => {
    e.preventDefault();

   
    try {
      const response = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
        contactNum,accessKey
      });

      console.log("getting data",response.data.user)
      if(response.status===201){
        // dispatch({type:"ACESS_GRANTED",payload:response.data.acessGranted})
        const ag=response.data.user.name
        dispatch({type:"ACESS_GRANTED",payload:ag})
        navigate("/login")
      }
    } 
    catch (error) {
      console.log(error);
    }

   
  };


    const GoTOLogin=()=>{
      navigate("/login")
    }


  return (
    <>
      <div className="register">
        <form onSubmit={Register}>
                  <input
            type="text"
            value={name}
            required
            placeholder="Name"
            onChange={(e) => {
              {dispatch({type:"NAME",payload:e.target.value})}
            }}
          />

         
          <input
            type="email"
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

         <input
            type="text"
            value={contactNum}
            required
            placeholder="contact number"
            onChange={(e) => {
              {dispatch({type:"CONTACT_NUM",payload:e.target.value})}
            }}
          />

         
          <input
            type="text"
            value={accessKey}
            required
            placeholder="AcessKey"
            onChange={(e) => {
              {dispatch({type:"ACESS_KEY",payload:e.target.value})}
            }}
          />

          <button type="submit">Register</button>
        </form>
      </div>
            
           
    </>
  );
}

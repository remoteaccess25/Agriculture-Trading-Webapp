import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/", { name, password });
    } catch (error) {
      console.log(error);
    }
    setName("");
    setPassword("");
  };

  return (
    <>
      <div className="login">
        <form onSubmit={Login}>
       
          <input
            type="text"
            value={name}
            required
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

         
          <input
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

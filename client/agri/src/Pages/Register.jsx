import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/", {
        name,
        email,
        password,
        phone,
        address,
      });
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
  };

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
              setName(e.target.value);
            }}
          />

         
          <input
            type="email"
            value={email}
            required
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
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

         <input
            type="text"
            value={phone}
            required
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

         
          <input
            type="text"
            value={address}
            required
            placeholder="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

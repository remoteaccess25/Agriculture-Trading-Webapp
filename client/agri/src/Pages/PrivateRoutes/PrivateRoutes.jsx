import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AdminContext } from "../../Components/context/Admin/Admin";

export default function PrivateRoutes() {
  const myCookies = Cookies.get("admin");

  const { dispatch, isLogedIn } = useContext(AdminContext);

  const getlocal = localStorage.getItem("email");

  const check = () => {
    if (getlocal !== "" && myCookies !== undefined) {
      // alert("data",getlocal)

      dispatch({ type: "LOGIN" });
      // console.log("email from local",getlocal)
    }
  };

  // check()
  useEffect(() => {
    check();
  }, []);

  return isLogedIn ? <Outlet /> : <Navigate to="/login" />;
}

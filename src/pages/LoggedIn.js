import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
function LoggedIn() {
  return (
    <>
      <NavBar bool={false} />
      <Home />
    </>
  );
}

export default LoggedIn;

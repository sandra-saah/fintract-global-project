import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";

function LoggedOut() {
  return (
    <>
      <NavBar bool={true} />
      <Home />
    </>
  );
}

export default LoggedOut;

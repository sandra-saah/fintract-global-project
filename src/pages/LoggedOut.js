import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import './LoggedOut.css'

function LoggedOut(){
    return(
        <>
        <NavBar/>
        <Home/>
        </>
    )
}

export default LoggedOut;
import React, { Component, useState} from "react";
import "./NavBar.css";



export default function NavBar() {
  const [login,setLogIn] = useState('');

  const User = ()=>{
    if(login === true){
      return(
        <a className="profileHandler">
        <a>Mr.Debasis</a>
        <img src="./images/user.png" />
      </a>
      )
    }else{
       return(
         <div className="loginHandler">
          <a>Log in</a>
          <button >
           <p>SIGN UP</p>
          </button>
        </div>
    )
  }
}
const SetStyleHandler=(login)=>{
  setLogIn(login);
}
const SetStyleFonc = ()=>{
  let loginc ='';
  if(loginc === true){
    loginc=false;
    SetStyleHandler(loginc);
  }else{
    login=true;
    SetStyleHandler(loginc);
  }
}


  return (

    <nav className="navBar">
      <div classname="logoHandler">
        <img src="/images/logo.png" alt='logo'/>
      </div>
      <div>
        <a href='#'>HOME</a>
        <a href='#'>SERVICES</a>
        <a href='#'>ABOUT US</a>
        <a href='#'>MORE</a>
        <a href='#' onClick={SetStyleFonc}>CONTACT US</a>
      </div>
      <div className="searchHandler">
        <input classname="textInput" type="text" placeholder="Search Here..." />
        <button>SEARCH</button>
      </div>
      <User/>
    </nav>
  );
}


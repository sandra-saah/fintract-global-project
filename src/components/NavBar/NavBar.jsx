import React, {  useState} from "react";

import "./NavBar.css";





export default function NavBar({bool}) {
  const [login,setLogIn] = useState(bool);
  

  const User = ()=>{
    if(login === true){
      return(
        <a className="profileHandler" onClick={console.log('changeoo22')}>
        <a>Mr.Debasis</a>
        <img src="./images/user.png" />
      </a>
      )
    }else{
       return(
         <div className="loginHandler">
          <a  onClick={console.log('changeoo12')}>Log in</a>
          <button>
           <p>SIGN UP</p>
          </button>
        </div>
    )
  }
}

  return (
    <nav className="navBar">
      <div className="logoHandler">
        <img src="/images/logo.png" alt='logo'/>
      </div>
      <div className="infoHandler">
        <a>HOME</a>
        <a>SERVICES</a>
        <a>ABOUT US</a>
        <a>MORE</a>
        <a>CONTACT US</a>
      </div>
      <div className="searchHandler">
        <input className="textInput" type="text" placeholder="Search Here..." />
        <button>SEARCH</button>
      </div>
      <User/>
    </nav>
  );
}


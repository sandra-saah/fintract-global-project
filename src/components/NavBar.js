import React, { Component } from 'react';
import  './NavBar.css';


export default function NavBar(){
    return (
      <nav className="navBar">
        <div classname='logoHandler'> <img src='/images/logo.png'/></div>
        <div classname='infoHandler'>
          <a>HOME</a>
          <a>SERVICES</a>
          <a>ABOUT US</a>
          <a>MORE</a>
          <a>CONTACT US</a>
        </div>
         <div className="searchHandler" >
          <input classname='textInput' type='text' placeholder='Search Here...'/>
          <button className='buttonSearch'>SEARCH</button>
         </div>

        <div className="loginHandler">
            <a>Log in</a>
            <button>
              <p>SIGN UP</p>
            </button>
          </div>

  
      </nav>
  
    )
    
  }
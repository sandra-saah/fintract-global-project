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
        <div className="searchContainer">
         <div className="searchHandler" >
          <input classname='textInput' type='text' placeholder='Search Here...'/>
          <button className='button'>SEARCH</button>
         </div>

        </div>
        <div className="loginHandler">login</div>

  
      </nav>
  
    )
    
  }
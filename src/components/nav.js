import React from 'react';
import logo from '../pictures/logo.png'

function Nav() {
  return ( 
    <nav id="nav"> 
      <div id="logo">    
      <img src={logo} alt="logo" /> 
      <h3 id="h3-nav">Soundwave</h3> 
      </div> 
      <div id="botones">
       <a href="#section-2">Discover</a>
       <a href="#section-3">Join</a>
       </div>
    </nav> 
   );
}

export default Nav;

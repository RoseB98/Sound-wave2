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
       <button className='nav-buttons' type="button">Discover</button> 
       <button className='nav-buttons' type="button">Join</button> 
       </div>
    </nav> 
   );
}

export default Nav;

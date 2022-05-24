import logo from '../pictures/logo.png'

function Menu() {
  return ( 
    <nav id="nav-1"> 
      <div id="logo">    
      <img src={logo} alt="logo" /> 
      <h3>Soundwave</h3> 
      </div> 
      <div id="botones">
       <button className='nav-buttons' type="button">Discover</button> 
       <button className='nav-buttons' type="button">Join</button> 
       </div>
    </nav> 
   );
}

export default Menu;

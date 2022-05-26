import React from 'react' 
import landing from '../pictures/landing-page-girl.png'

function Section1 () {
  return(
     <section className="section1">
       {/* <div> */}
          {/* <div id="circulo1"></div> */}
          {/* <div id="circulo2"></div>  */}
        {/* <div id="div-circulo"> */}
          {/* <div id="circulo3"></div> */}
        {/* </div>
       </div> */}
       
       <div className="section1p">
          <img className="landing-img" src={landing} alt="foto decorativa" /> 
          <div className="texto1p">
              <h1 id="h1-1">Feel The Music</h1> 
              <p id="p-1">stream over 20 thousand songs with one click</p> 
              <button id="button-main">Join Now</button>
          </div>
          </div>
       <div id="circulo1"></div>
          <div id="circulo2"></div> 
          <div id="circulo3"></div>
       
       
     </section>
  )

}

export default Section1
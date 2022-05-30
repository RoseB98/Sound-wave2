import React from "react";
import Footer from './Footer'

function Section3(){
    return( 
        <>
        <section className="section3" id="section-3">
            <div id="circulo4"></div>
            <div id="circulo5"></div>  
          <div className="text-container">
            <p id="p3">Join the <span>fun.</span></p> 
            <div id="form">
              <form action="#" method="post">
                  <ul>
                      <li className="lista">
                  <label for="name">Name:</label>
                  <input type="text" id="name"></input>
                     </li>
                     <li className="lista">
                  <label for="name">Email:</label>
                  <input type="text" id="email"></input>
                     </li>
                     <li className="lista">
                  <label for="name">Password:</label>
                  <input type="password" id="password"></input>
                     </li>
                  </ul>
              </form> 
              <button id="boton-form">Join Now</button>
            </div>
            
          </div>
           
        </section> 
        <Footer />
      </>
    )
}

export default Section3
import React from "react"; 
import twitter from '../pictures/twitter.svg'
import facebook from '../pictures/facebook.svg'

function Footer (){
    return(
        <footer id="footer">
            <div id="about">
              <p>About Us</p>
              <p>Contact</p>
            </div>
            <div id="social">
                <div id="twitter">
                  <img src={twitter} alt="logo-twitter" /> 
                  <p>Twitter</p>
                </div> 
                <div id="facebook">
                  <img src={facebook} alt="logo-facebook" />
                  <p>Facebook</p>
                </div>
            </div>
        </footer>
    )
} 

export default Footer
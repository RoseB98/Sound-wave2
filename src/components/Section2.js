import React from 'react'  
import microphone from '../pictures/microphone.svg' 
import album from '../pictures/albums.svg'
import more from '../pictures/more.svg'
import covers from '../pictures/covers.jpg'
import Footer from './Footer'

function Section2 (){
  return( 
    <>
      <section className="section2"> 
      <div id="all-container">
       <div id="img-text-container">
         <h1 id="h1-2">Discover new music</h1>
         <div className="fotos-container"> 
           <div id='fotitos1p'>
             <img src={microphone} alt='microfono' />
             <p>Charts</p>
           </div> 
           <div id='fotitos2p'>
             <img src={album} alt='album' />  
             <p>Albums</p>
           </div>
           <div id='fotitos3p'>
             <img  src={more} alt='mas' />
             <p>More</p>
           </div>
         </div>    
         <p>By joining you can benefit by listening to the latest albums relased</p> 
       </div>
        <img id="covers" src={covers} alt='foto de decoracion' />
      </div>
      </section> 
      <Footer /> 
      </>
  )
} 

export default Section2
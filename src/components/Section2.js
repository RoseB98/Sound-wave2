import React from 'react'  
import microphone from '../pictures/microphone.svg' 
import album from '../pictures/albums.svg'
import more from '../pictures/more.svg'

import Cover from '../pictures/covers.jpg'

function Section2 (){
  return(
      <section className="section2p">
        <h1>Discover new music</h1> 
        <div classname="fotos-container">
        <div id='fotitos1p'>
        <img src={microphone} alt='microfono' />
        <p>Charts</p>
        </div> 
        <div id='fotitos2p'>
        <img src={album} alt='album' />  
        <p>Albums</p>
        </div>
        <div id='fotitos3p'>
        <img src={more} alt='mas' />
        <p>More</p>
        </div>
        </div>
      </section>
  )
} 

export default Section2
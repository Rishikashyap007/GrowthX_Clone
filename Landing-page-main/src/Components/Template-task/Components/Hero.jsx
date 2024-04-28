import React from 'react'
import tab from'../Assets/tab.png'
 import './Hero.css'


const Hero = () => {
  return (
    <div className="header-text_template">
    <div className="text-content_template">
      <h3>TEN</h3>
      <h1>Template Library</h1>
    </div>
      <div className="small-text">
        <h4>Creating documents like PRDs, GTMs, and JDs is tough. Start off strong with our templates<br/> designed by the top 1% of the industry.</h4>
      </div>
      <div><button className="btn_template">Explore All</button></div>
      <div className="img_template">
        <img src={tab}alt=""/>
      </div> 
    </div>
  )
}

export default Hero

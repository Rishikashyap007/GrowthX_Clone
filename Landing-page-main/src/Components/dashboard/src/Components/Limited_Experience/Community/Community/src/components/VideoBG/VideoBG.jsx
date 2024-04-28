import React from 'react'
import Growthx from '../Growthx/Growthx'
import bgvideo from '../../assets/ribbon.mp4'
import img1 from '../../assets/growth-equation.png'
import img2 from '../../assets/referral-design.png'
import img3 from '../../assets/activation-hypothesis.png'
import img4 from '../../assets/engagement-frameworks.png'
import img5 from '../../assets/monetisation-frameworks.png'
import img6 from '../../assets/target-role-and-organisation.png'
import './VideoBG.css'
function VideoBG() {
  return (
    <div className="video-container">
        <video autoPlay muted loop id="video-bg-dashboard-limited">
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="video-bg-dashboard-limited">
      <div className='grids-limited'>
            <h2>What's included in your limited experience</h2>
            <div className="grid-container-limited">
                <div className="grid-limited">
                <div className="grid-col-limited"><img src="https://public-cdn.growthx.club/product_images/glx/growth-equation.png" alt="" /></div>
                <div className="grid-col-limited"><img src={img2} alt="" /></div>
                <div className="grid-col-limited"><img src={img3} alt="" /></div>
                <div className="grid-col-limited"><img src={img4} alt="" /></div>
                <div className="grid-col-limited"><img src={img5} alt="" /></div>
                <div className="grid-col-limited"><img src={img6} alt="" /></div>
                </div>
            </div>
            
            <div className='content'>
            <Growthx/>
            
        </div>
            </div>
            
        </div>
        </div>
  )
}

export default VideoBG
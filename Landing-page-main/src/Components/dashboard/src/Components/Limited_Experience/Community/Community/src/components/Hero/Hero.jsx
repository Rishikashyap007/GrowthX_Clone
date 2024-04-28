import React from 'react'
import './Hero.css'
import m1 from '../../assets/glx-marquee1.png'
import m2 from '../../assets/glx-marquee2.png'
import VideoBG from '../VideoBG/VideoBG'



function Hero() {

    return (
        
        <div className='hero-bg-limited'>
            <div className="component-limited">
                <h2 className="description-limited">Description</h2>
                <p className="content-limited">The preview of GrowthX membership experience before you become a member. This is a condensed yet potent version of full powerhouse designed to arm you with crucial knowledge in user acquisition, onboarding, engagement, retention & monetization.</p>
            </div>
            <div className="container-limited">
                <div className="square">
                    <div className='square-content'><span>6+</span> <br />Modules</div>
                </div>
                <div className="square">
                    <div className='square-content'><span>3+</span> <br />Hours</div>
                </div>
            </div>
            <div className="marquee">
                <h1 className='description'>Case studies include</h1>
                <div className="marquee-container">
                    <marquee behavior="scroll" direction="left" scrollamount="5" loop >
                        <div className="element-limited"><img src={m1} alt="" /></div>
                        <div className="element-limited"><img src={m2} alt="" /></div>
                        <div className="element-limited"><img src={m1} alt="" /></div>
                        <div className="element-limited"><img src={m2} alt="" /></div>
                    </marquee>
                </div>
            </div>
            <VideoBG/>
            
        </div>
    )
}


export default Hero
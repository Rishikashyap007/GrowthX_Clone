import React from 'react'
import './Growthx.css'
import logo from '../../assets/growthx-membership.png'
import companyLogo from '../../assets/companies-logos.png'
import bgvideo from '../../assets/ribbon.mp4'

function Growthx() {
  return (
    
        <div className="main">
        <div className='growth'>
        <div className="logo"><img src={logo} alt="" /></div>
        <p>Structured learning, curated community <br />
        & orbit changing outcomes</p>
        <button>Become a member</button>
        {/* <hr className='MuiDivider-root' /> */}
        <p>GrowthX members are leaders at marquee internet companies</p>
        <div className="companies-logo"><img src={companyLogo} alt="" /></div>
    </div>
        </div>
    
    
  );
}

export default Growthx
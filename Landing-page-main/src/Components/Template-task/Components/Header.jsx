import React from 'react'
//  import puma from "../Assets/puma.png" 
import "./Header.css"

const Header = () => {
  return (
    <div className="header_templates">
    <div>
     {/* <img src={puma}alt="logo"style={{width:"100px"}}/>  */}
    <h1>Growth<span>X</span></h1>
    </div>
    <div className="listitem_templates">
        <ul>
            <li>learning</li>
            <li>community</li>
            <li>outcomes</li>
            <li>ELEVANT</li>
            <li>For Teams</li>
            <li>Limited experience</li>
            <li>Library</li>
            <li>CRAFT'S</li>
            <li>Login</li>
        </ul>
        <button>Become a Member</button>
    
    </div>
      
    </div>
  )
}

export default Header

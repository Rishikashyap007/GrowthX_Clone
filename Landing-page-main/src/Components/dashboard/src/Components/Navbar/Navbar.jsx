import React from 'react';
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'; 
import { IoLogOutOutline } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";


import logo from './logobg.png'
function Sidebar() {
  const userData = localStorage.getItem('userData')
  const name = JSON.parse(userData)

  const navigate = useNavigate();

  const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      navigate('/login')
  }
  
  return (<>
    <div className="sidebar">
      <div>
      <Link to='/dashboard/home'><img src={logo} alt="logo" height="70" loading="lazy" /></Link>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard/home"><i className="fa-solid fa-house"></i>Home</Link></li> 
        <li><Link to="/dashboard/application"><i className="fa-solid fa-file"></i>Application</Link></li>
        <li><Link to="/dashboard/limited-experience"><i className="fa-solid fa-cube"></i>Limited-Experience</Link></li>
        <li><Link to="/dashboard/help"><i className="fa-solid fa-handshake-angle"></i>Help</Link></li>
      </ul>
      </div>
      <div className='logout-div'>
        <div className='logout-name-div'>
          <span className='icon_dashboard'><IoPersonCircleSharp /></span>
          <span>{name.firstName}</span>
        </div>
        <span onClick={handleLogout} style={{cursor:"pointer"}}><IoLogOutOutline /></span>
      </div>
    </div>

<div className="sidebar_mobile_view">
<ul className="sidebar-menu_mobile_view">
  <li><Link to="/dashboard/home"><i className="fa-solid fa-house"></i>Home</Link></li> 
  <li><Link to="/dashboard/application"><i className="fa-solid fa-file"></i>Application</Link></li>
  <li><Link to="/dashboard/help"><i className="fa-solid fa-handshake-angle"></i>Help</Link></li>
</ul>
</div>

</>
  );
}

export default Sidebar;

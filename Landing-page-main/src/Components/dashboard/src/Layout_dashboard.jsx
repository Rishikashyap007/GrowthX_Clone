import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
function Layout_dashboard(){
    return(
        <>
    <Navbar/>
    <Outlet/> 
    </>
    )
}
export default Layout_dashboard


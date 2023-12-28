import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div style={{padding:"30px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"white",color:"black"}}>
        <h1>
        <Link className='link' to={"/"}>KALVIUM</Link>
            <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
        </h1>
        <div style={{display: "flex",marginLeft:"30px"}}>
            <Link className='link' to={"/contact"}>Contact</Link>
            <Link className='link' style={{marginLeft:"30px"}} to={"/register"}>Register</Link>
        </div>
    </div>
  )
}
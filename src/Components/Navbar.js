import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleHover = (e) =>{
    e.target.style.color = "#04b4e0"
  }
  const handleHoverOut = (e) =>{
    e.target.style.color = "#fff"
  }
  const [target,setTarget] = useState("home")
  return (
    <div className='container' style={{fontSize:"25px",color:"white"}}>
        <div className="home flex-column my-3" style={{color:`${target === "home" ?"#04b4e0":"white"}`}}
            onClick={()=>setTarget("home")}
            >
            <Link className="nav-link" to="/"><i className="fa-solid fa-house"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Home</p>
        </div>
        <hr/>
        <div className="home flex-column"  style={{color:`${target === "about" ?"#04b4e0":"white"}`}}
                onClick={()=>{setTarget("about")}}
                >
        <Link className="nav-link" to="/about"><i className="fa-solid fa-user"
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>About Me</p>
        </div>
        <hr/>
        <div className="home flex-column"  style={{color:`${target === "project" ?"#04b4e0":"white"}`}}
            onClick={()=>setTarget("project")}
            >
        <Link className="nav-link" to="/projects"><i className="fa-solid fa-clipboard"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Projects</p>
        </div>
        <hr/>
        <div className="home flex-column"  style={{color:`${target === "skills" ?"#04b4e0":"white"}`}}
            onClick={()=>setTarget("skills")}
            >
        <Link className="nav-link" to="/skills"><i className="fa-sharp fa-solid fa-briefcase"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Skills</p>
        </div>
        <hr/>
        <div className="home flex-column"  style={{color:`${target === "contact" ?"#04b4e0":"white"}`}}
                onClick={()=>setTarget("contact")}
                >
        <Link className="nav-link" to="/contact"><i className="fa-solid fa-address-book"
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Contact Me</p>
        </div>
                
    </div>
  )
}

export default Navbar

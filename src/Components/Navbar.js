import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleHover = (e) =>{
    e.target.style.color = "#04b4e0"
  }
  const handleHoverOut = (e) =>{
    e.target.style.color = "#fff"
  }

  return (
    <div className='container' style={{fontSize:"25px",color:"white"}}>
        <div className="home flex-column my-3">
            <Link to="/"><i className="fa-solid fa-house"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Home</p>
        </div>
        <hr/>
        <div className="home flex-column">
        <Link to="/about"><i className="fa-solid fa-user"
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>About Me</p>
        </div>
        <hr/>
        <div className="home flex-column">
        <Link to="/projects"><i className="fa-solid fa-clipboard"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Projects</p>
        </div>
        <hr/>
        <div className="home flex-column">
        <Link to="/skills"><i className="fa-sharp fa-solid fa-briefcase"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Skills</p>
        </div>
        <hr/>
        <div className="home flex-column">
        <Link to="/contact"><i className="fa-solid fa-address-book"
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}
                style={{cursor:"pointer"}}></i></Link>
            <p style={{fontSize:"15px"}}>Contact Me</p>
        </div>
                
    </div>
  )
}

export default Navbar

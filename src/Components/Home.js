import React, { useEffect, useRef } from 'react'
import shinchan from '../Image/shinchan.png'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

const Home = () => {

  const el = useRef(null)
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Software Developer', 'Android Developer'],
      typeSpeed: 70,
    });
    typed.loop = true
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  },[])
  const handleHover = (e) =>{
    e.target.style.color = "#04b4e0"
  }
  const handleHoverOut = (e) =>{
    e.target.style.color = "#fff"
  }
  return (
    <div className='container my-3 d-flex justify-content-center' style={{background:"#222",color:"white"}}>
        <section className='A container flex-column' style={{width:"50%" ,display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
          <h1>Hi, I m <span style={{color:"#04b4e0"}}>Hitesh Solanki</span></h1>
          <h2>and I am a passionate</h2>
          <span ref={el} style={{fontSize:"30px"}} />
          <section className='my-3 d-flex' style={{color:"white",fontSize:"30px"}}>
          <Link className="nav-link"  to="https://github.com/Hitesh-s0lanki" ><i className="fa-brands fa-instagram mx-2"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <Link className="nav-link"  to="https://www.linkedin.com/in/hitesh-solanki-594436258" ><i className="fa-brands fa-linkedin mx-2"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <Link className="nav-link"  to="https://github.com/Hitesh-s0lanki" ><i className="fa-brands fa-github mx-2"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
            <Link className="nav-link"  to="https://github.com/Hitesh-s0lanki" ><i className="fa-brands fa-whatsapp mx-2"
            onMouseOver={handleHover}
            onMouseOut={handleHoverOut}
            style={{cursor:"pointer"}}></i></Link>
        </section>
        <button type="button" className="btn btn-outline-info my-2">Download CV</button>
        </section>
        <section className='B container' style={{width:"50%" ,height:"100%" ,display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
          <img src={shinchan} alt="" style={{width:"20rem"}} />
        </section>
    </div>
  )
}

export default Home

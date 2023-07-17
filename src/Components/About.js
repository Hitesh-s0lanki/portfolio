import React from 'react'
import profile from '../Image/profile.png'

const About = () => {
  return (
    <div className='container my-3 flex-column' style={{background:"#222",color:"white",justifyContent:"center",alignContent:"center",margin:"30px",padding:"20px"}}>
      <div className="my-3 d-flex" style={{color:"white"}}>
        <div className="photo my-3" style={{width:"40%",display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <figure className="figure" style={{width:"22rem"}}>
            <img src={profile} className="figure-img img-fluid rounded" alt="..."/>
            <figcaption className="figure-caption text-bold" style={{color:"white" , fontSize:"40px" ,fontWeight:"600"}}><p>Hitesh <span style={{color:"#04b4e0"}}>Solanki</span></p></figcaption>
          </figure>
        </div>
        <div className="education mx-3" style={{width:"60%"}}>
            <h1 className='my-3' style={{textAlign:"start"}}>About <span style={{color:"#04b4e0"}}>Me</span></h1>
            <p className='text-start' style={{marginRight:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laborum velit fugiat tempore dolorum accusantium illo quaerat quibusdam. Nesciunt itaque in accusamus dolores quibusdam alias deleniti, fugit dolor delectus ut?</p>
            <h1 className='my-3' style={{textAlign:"start"}}>Education</h1>
            <div className="row">
              <div className="first d-flex" style={{height: "130px"}}>
                <div className="box1 text-end mx-2" style={{width:"120px"}}>
                  <p>2025</p>
                  <p>Ghanshyamdas Saraf College</p>
                </div>
                <div className="box2">
                  <div className="d-flex"  style={{height: "130px"}}>
                    <div className="vr">-</div>
                  </div>
                </div>
                <div className="box3 mx-2 text-start">
                  <h4> B.Sc. I.T.</h4>
                    <p>In Progress</p>
                </div>
              </div>
              <div className="first d-flex" style={{height: "130px"}}>
                <div className="box1 text-end mx-2" style={{width:"120px"}}>
                  <p>2021</p>
                  <p>Jai Hind College</p>
                </div>
                <div className="box2">
                  <div className="d-flex"  style={{height: "130px"}}>
                    <div className="vr">-</div>
                  </div>
                </div>
                <div className="box3 mx-2 text-start">
                  <h4>HSC - 82.3%</h4>
                    <p style={{width:"500px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ratione magni incidunt nulla ipsa, obcaecati voluptatem.</p>
                </div>
              </div>
              <div className="first d-flex" style={{height: "130px"}}>
                <div className="box1 text-end mx-2" style={{width:"120px"}}>
                  <p>2019 </p>
                  <p>Seth Juggilal Poddar Academy</p>
                </div>
                <div className="box2">
                  <div className="d-flex"  style={{height: "130px"}}>
                    <div className="vr">-</div>
                  </div>
                </div>
                <div className="box3 mx-2 text-start">
                  <h4>ICSE - 85%</h4>
                    <p style={{width:"500px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ratione magni incidunt nulla ipsa, obcaecati voluptatem.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

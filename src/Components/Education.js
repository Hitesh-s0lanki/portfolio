import React from 'react'
import chess from '../Image/chess.png'
import codeTech from '../Image/codetech.jpg'
import textEditor from '../Image/textEditor.png'

const Education = () => {
  return (
    <div className='container my-3 overflow-auto'  style={{background:"#222",color:"white"}}>
        <h1 className='my-3 mx-3 text-start'>Web <span style={{color:"#04b4e0"}}>Application</span></h1>
        <hr className="border border-3 opacity-75" style={{borderColor:"#04b4e0"}}></hr>
        <div className="container overflow-x-auto d-flex my-3">
          <div className="card mx-3" style={{width: "18rem",background:'transparent'}}>
            <img src={chess} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{color:"#04b4e0"}} >Chess Game</h5>
              <a href="/" className="btn btn-primary">Visit</a>
            </div>
          </div>
          <div className="card mx-3" style={{width: "18rem",background:'transparent'}}>
            <img src={codeTech} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{color:"#04b4e0"}}>Code Tech</h5>
              <a href="https://codetech-dun.vercel.app/#/" className="btn btn-primary">Visit </a>
            </div>
          </div>
        </div>
        <h1 className='my-3 mx-3 text-start'>Software <span style={{color:"#04b4e0"}}>Deveploment</span></h1>
        <hr className="border border-3 opacity-75" style={{borderColor:"#04b4e0"}}></hr>
        <div className="container overflow-auto my-3">
          <div className="card mx-3" style={{width: "18rem",background:'transparent'}}>
              <img src={textEditor} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{color:"#04b4e0"}} >Text Editor Using Python</h5>
                <a href="/" className="btn btn-primary">Download</a>
              </div>
            </div>
        </div>
        <h1 className='my-3 mx-3 text-start'>Android <span style={{color:"#04b4e0"}}>Application</span></h1>
        <hr className="border border-3 opacity-75" style={{borderColor:"#04b4e0"}}></hr>
        <div className="container overflow-auto" style={{height:'400px'}}></div>
    </div>
  )
}

export default Education

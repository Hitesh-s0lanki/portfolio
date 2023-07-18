import React from 'react'
import Progressbar from './Progress_bar'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const Skills = () => {
  return (
    <div className='container my-3 overflow-auto'  style={{background:"#222",color:"white"}}>
      <div className="container my-3">
        <div className="row  justify-content-center mx-3">
          <section className='A col-4 mx-2 my-2 text-start' style={{width:"43%",height:"500px"}}>
            <h2 className='my-3'>Coding <span style={{color:"#04b4e0"}}>Skills</span></h2>
            <div className="cpp flex-column" style={{width:'400px'}}>
              <Progressbar bgcolor="#04b4e0" progress='70' progessText= 'Cpp'  height={10} />
              <Progressbar bgcolor="#04b4e0" progress='70' progessText= 'Java'  height={10} />
              <Progressbar bgcolor="#04b4e0" progress='50' progessText= 'Python'  height={10} />
              <Progressbar bgcolor="#04b4e0" progress='70' progessText= 'JavaScript'  height={10} />
              <Progressbar bgcolor="#04b4e0" progress='70' progessText= 'Dsa'  height={10} />
              <Progressbar bgcolor="#04b4e0" progress='78' progessText= 'React'  height={10} />
              <Progressbar bgcolor="#04b4e0" progress='65' progessText= 'Android'  height={10} />
            </div>
          </section>
          <section className='A col-4 mx-2 my-2 text-start' style={{width:"43%",height:"300px"}}>
            
              <hr class="border border-primary border-3 opacity-75"></hr>
              <div className="leetcode my-3" style={{width:'300px'}}>
                <h1>Leetcode <span style={{color:"#04b4e0"}}>Solved</span></h1>
                <div className="container "style={{display:'flex',justifyContent:'space-between'}}>
                  <div className="range" style={{width:'120px',height:'120px'}}>
                      <CircularProgressbar value={2781/272} text={`272/2781`} />
                  </div>
                  <div className="text" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
                    <div><span>Easy <span style={{color:"#04b4e0"}}>159/695</span></span></div>
                    <div><span>Medium <span style={{color:"#04b4e0"}}>100/1475</span></span></div>
                    <div><span>Hard <span style={{color:"#04b4e0"}}>13/611</span></span></div>
                  </div>
                </div>
              </div>
              <hr class="border border-primary border-3 opacity-75"></hr>
              <h2 className='my-3'>Knowledges</h2>
              <div className="cpp flex-column" style={{width:'400px'}}>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>React</span>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>Nodejs</span>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>MERN Stack</span>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>Firebase</span>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>MySql</span>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>DSA</span>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>Python</span>
                <span class="badge mx-2 my-2" style={{background:"#04b4e0",height:'30px',fontSize:'17px',color:'black',textAlign:'center'}}>Android</span>
              </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Skills

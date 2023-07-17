import React from 'react'

const Contactus = () => {
  return (
    <div className='container my-3' style={{background:"#222",color:"white",padding:"50px"}}>
        <h1 className='my-3 mx-2 p-2'>Contact <span style={{color:"#04b4e0"}}>Me!</span></h1>

        <div className="container formArea my-3" style={{width:"60%"}}>
            <div className="d-flex mb-3 my-2">
                <input type="text" className="form-control mx-2 " id="exampleFormControlInput1" placeholder="UserName" style={{width:"50%",padding:"10px"}}/>
                <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Email" style={{width:"50%",padding:"10px"}}/>
            </div>
            <div className="d-flex mb-3 my-2">
                <input type="number" className="form-control mx-2" id="exampleFormControlInput1" placeholder="Mobile Number" style={{width:"50%",padding:"10px"}}/>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Email Subject" style={{width:"50%",padding:"10px"}}/>
            </div>
            <div className="mb-3  my-2" style={{marginRight:"10px"}}>
                <textarea className="form-control p-2 mx-2" id="exampleFormControlTextarea1" rows="10" placeholder='Your Message'></textarea>
            </div>
        </div>

        <button type="button p-2" class="btn  btn-lg" style={{background:"#04b4e0" ,fontWeight:"500",margin:"30px"}}>Submit</button>

    </div>
  )
}

export default Contactus

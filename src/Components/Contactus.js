import React, { useState } from 'react'
import { useToast,Box } from '@chakra-ui/react'

const Contactus = () => {
    const [info,setInfo] = useState({UserName:"",email:"",number:0,subject:"",message:""})
    const toast = useToast()
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {UserName,email,number,subject,message} = info
        try{
            if(UserName && email && number && subject && message){
                const response = await fetch('https://profolioapi.onrender.com/api/contact',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(info)
                })
                const json = await response.json()
                console.log(json)
                setInfo({UserName:"",email:"",number:0,subject:"",message:""})
                toast({
                    position: 'bottom-right',
                    render: () => (
                      <Box color='white' p={3} bg='#04b4e0'>
                        Succefully Send
                      </Box>
                    ),
                  })
            }else{
                alert("fill the details")
            }
        }catch(err){
            console.log(err.message)
        }
    }
    const onChange = (e) =>{
        setInfo({...info,[e.target.name] : e.target.value})
    }

  return (
    <div className='container my-3' style={{background:"#222",color:"white",padding:"50px"}}>
        <h1 className='my-3 mx-2 p-2'>Contact <span style={{color:"#04b4e0"}}>Me!</span></h1>
        <form onSubmit={handleSubmit}>

        <div className="container formArea my-3" style={{width:"60%"}}>
            <div className="d-flex mb-3 my-2">
                <input type="text" className="form-control mx-2 " value={info.UserName} name='UserName' onChange={onChange} id="exampleFormControlInput1" placeholder="UserName" style={{width:"50%",padding:"10px"}}/>
                <input type="email" className="form-control " value={info.email} name='email' onChange={onChange}  id="exampleFormControlInput2" placeholder="Email" style={{width:"50%",padding:"10px"}}/>
            </div>
            <div className="d-flex mb-3 my-2">
                <input type="number" className="form-control mx-2" value={info.number} name='number' onChange={onChange}  id="exampleFormControlInput1" placeholder="Mobile Number" style={{width:"50%",padding:"10px"}}/>
                <input type="text" className="form-control" value={info.subject} name='subject' onChange={onChange}  id="exampleFormControlInput1" placeholder="Email Subject" style={{width:"50%",padding:"10px"}}/>
            </div>
            <div className="mb-3  my-2" style={{marginRight:"10px"}}>
                <textarea className="form-control p-2 mx-2"  value={info.message} name='message' onChange={onChange} id="exampleFormControlTextarea1" rows="10" placeholder='Your Message'></textarea>
            </div>
        </div>

        <button type="submit" className="btn  btn-lg p-2" style={{background:"#04b4e0" ,fontWeight:"500",margin:"30px"}}>Submit</button>
        </form>
    </div>
  )
}

export default Contactus

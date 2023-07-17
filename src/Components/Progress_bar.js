
import React from 'react'
  
const Progress_bar = ({bgcolor,progress,height,progessText}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 2
      }
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
        
    return (
    <>
      <div className="name d-flex justify-content-between my-2">
        <div className="text">{progessText}</div>
        <div className="text">{progress}%</div>
      </div>
        <div style={Parentdiv}>
          <div style={Childdiv}></div>
      </div>
    </>
    )
}
  
export default Progress_bar;
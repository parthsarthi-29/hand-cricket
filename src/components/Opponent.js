import React from 'react'
import'./Opponent.css'
export default function Opponent({playOpp,oppToss,selectedNumber}) {
    
  return (
    <div >
        <div className="toss1"><button type="button" class="btn-btn-danger" onClick={playOpp}>Play</button></div>
        <div className="label"><h6>Click on Play Button</h6></div>
      <div className="hands" >
      
            <img src={`/imgs/img_${selectedNumber}.webp`} alt="hands" width={200} />
            
            <img src={`/imgs/img_${oppToss}.webp`} alt="hands" width={200} />
            
            <h2></h2>
            
        </div>
        <div className="handslabel" >
      
            <h3>Your Number</h3>
            
            <h3>Opponents Number</h3>
            
            
        </div>
        
    </div>
  )
}

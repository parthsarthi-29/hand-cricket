import React from 'react'
import './Out.css'
import {Link} from 'react-router-dom'
export default function Out({totalScore,target,innings,setInnings,current,setCurrent}) {
    if(totalScore===0 && target!==0 && innings===1 && current==='Batting'){
       
        return (
    
    <div className="container">
    <div className="content"><div className="heading"><h1>Out!</h1>
    <h2>Start innings 2</h2></div>
    <div className="Battingselect">
        <Link to='/Playgame/Bowling' className='Bowling'><button type="button" class="btn btn-warning">Bowling</button></Link>
        
    </div>
    <div className="h14"><h4>Click above</h4></div>
    </div>
    
   
    
</div>
  )

}
if(totalScore===0 && target!==0 && innings===1 && current==='Bowling'){
       
    return (

<div className="container">
<div className="content"><div className="heading"><h1>Out!</h1>
<h2>Start innings 2</h2></div>
<div className="Bowlingselect">
    <Link to='/Playgame/Batting' className='Batting'><button type="button" class="btn btn-warning">Batting</button></Link>
    
</div>
<div className="h14"><h4>Click above</h4></div>
</div>



</div>
)

}
}
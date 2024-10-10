import React from 'react'
import './Over.css'
import {Link} from 'react-router-dom'
export default function Over({current,setInnings,setTotalScore,setTarget}) {
    if(current==='Over'){
        setInnings(0);
        setTotalScore(0);
        setTarget(0);
        return (
    
            <div className="container">
            <div className="content"><div className="heading"><h1>You Won!</h1>
            <h2>Game Over</h2></div>
            <div className="select">
                <a href='/Playgame' className='Playgame'><button type="button" class="btn btn-warning">Play Again</button></a>
                
            </div>
            <div className="h14"><h4>New Match? Click above</h4></div>
            </div>
            
           
            
        </div>
          )
}
}
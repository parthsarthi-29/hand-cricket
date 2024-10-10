import React from 'react'
import './Your.css'
import {Link,Routes,Route} from 'react-router-dom'
import Batting from '../pages/Batting'
import Bowling from '../pages/Bowling'
export default function Your({winner}) {
    if(winner==='You'){
  return (
    <>
    
    <div className="container">
        <div className="content"><div className="heading"><h1>Congratulations!</h1>
        <h2>You Won the toss</h2></div>
        <div className="select">
            <Link to='/Playgame/Batting' className='Select-Batting'><button type="button" class="btn btn-warning">Batting</button></Link>
            <Link to='/Playgame/Bowling' className='Select-Bowling'><button type="button" class="btn btn-warning">Bowling</button></Link>
        </div>
        <div className="h14"><h4>Choose any one</h4></div>
        </div>
        
        
        
    </div>
    </>
  )
}
else if(winner==='Opp') {
    const randomNumberGenerator=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min)
    }
    const randomNumber=randomNumberGenerator(1,3)
    if(randomNumber===1){
    return (
      <>
      
      <div className="container">
          <div className="content"><div className="heading"><h1>Oops!</h1>
          <h2>Opponent Won the toss and decided to Bat First</h2></div>
          <div className="Opp1select">
              
              <Link to='/Playgame/Bowling' className='Opp-Bowling'><button type="button" class="btn btn-warning">Bowling</button></Link>
          </div>
          <div className="h14"><h4>Bowl them Out!</h4></div>
          </div>
          
          
          
      </div>
      </>
    )
  }
  else{
    return (
      <>
      
      <div className="container">
          <div className="content"><div className="heading"><h1>Oops!</h1>
          <h2>Opponent Won the toss and decided to Bowl First</h2></div>
          <div className="Opp2select">
              
              <Link to='/Playgame/Batting' className='Opp-Batting'><button type="button" class="btn btn-warning">Batting</button></Link>
          </div>
          <div className="h14"><h4>Put runs on the board!</h4></div>
          </div>
          
          
          
      </div>
      </>
    )
  }
}
}

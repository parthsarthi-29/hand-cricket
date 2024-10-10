import React from 'react'
import './TotalScore.css'
export default function TotalScore({selectedNumber,totalScore,randomNumber,setTotalScore,playOpp,target,innings}) {
    if(innings===2){
    return(
        <>
        <div className="total"><h1>Total Score = {totalScore}</h1></div>
        <div className="target"><h1>Target = {target}</h1></div>
        
        </>
    )
}
else{
    return(
        <>
        <>
        
        <div className="total"><h1>Total Score = {totalScore}</h1></div>
        
        </></>
    )

}
  
}

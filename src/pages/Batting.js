import React,{useState} from 'react'
import NumberSelctor from '../pages/NumberSelector';
import TotalScore from '../components/TotalScore';
import Out from '../components/Out';
import Over from '../components/Over';
import Lost from '../components/Lost';
import Opponent from '../components/Opponent';
import Tie from '../components/Tie';
import'./Batting.css'
import Alert from '../components/Alert';
export default function Batting({innings,setInnings,target,setTarget,current,setCurrent}) {
  const[error,setError]=useState("")
  const[totalScore,setTotalScore]=useState(0);
  const[selectedNumber,setSelectedNumber]=useState(0);
  const[oppScore,setOppScore]=useState(0)
  if(current==='Bowling'){
    setInnings(2)
  }
  if(innings===1){
    setCurrent('Batting')
  }
  const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min)
  }
  const playOpp = () => {
    if(selectedNumber===0){
        setError('Error')
        return
    }
    
    const randomNumber = generateRandomNumber(1, 7);
    setOppScore(randomNumber)
    if(selectedNumber!==randomNumber && innings===1){
        setTotalScore(prev=>prev+selectedNumber)
    }
    else if(selectedNumber!==randomNumber && innings===2 && totalScore+selectedNumber<target){
        setTotalScore(prev=>prev+selectedNumber)
    }
    else if( selectedNumber!==randomNumber && innings===2 && target<=totalScore+selectedNumber){
        setCurrent('Over')
    }
    else if( selectedNumber===randomNumber && innings===2 && target-1===totalScore){
        setCurrent('Tie')
    }
    else{
        
        
        if(innings!==1){
            setCurrent('Lost')
            
            }
            else{
                setTarget(totalScore+1)
            setTotalScore(0)
            }
        
    }
    

}
const nextBall=()=>{
    setSelectedNumber(0);
    setOppScore(0)
}
    return (
    <div>
        <div className="home"><div className="battinghead"><h1 >You are Batting</h1></div><div className="home1"><a href='/' ><button type="button" class="btn btn-danger">Home</button></a></div></div>
      <h1>Innings No. : {innings}</h1>  
      <div className='bat'>
        <div className="title1"><h4>Select a Number --</h4></div>
        <NumberSelctor selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} setTotalScore={setTotalScore} totalScore={totalScore} />

      </div>
      <Alert error={error} setError={setError}/>
      <TotalScore playOpp={playOpp} totalScore={totalScore} target={target} innings={innings}/>
      <div className="toss2"><button type="button" class="btn btn-danger" onClick={nextBall}>Clear Selected Number</button></div>
      <Opponent oppToss={oppScore} playOpp={playOpp} selectedNumber={selectedNumber} />
    <Out totalScore={totalScore} target={target} innings={innings} setInnings={setInnings} current={current} setCurrent={setCurrent}/>
    <Over current={current}setTarget={setTarget}setInnings={setInnings}setTotalScore={setTotalScore}/>
    <Tie current={current}setTarget={setTarget}setInnings={setInnings}setTotalScore={setTotalScore}/>
    <Lost current={current}setTarget={setTarget}setInnings={setInnings}setTotalScore={setTotalScore}/>
    </div>
  )
}

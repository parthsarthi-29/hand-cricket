import React, { useState } from 'react';
import './Toss.css';
import NumberSelector from './NumberSelector';
import Opponent from '../components/Opponent';
import Your from '../components/Your';
import Alert from '../components/Alert';

export default function Toss() {
  const [toss, setToss] = useState("");
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [oppToss, setOppToss] = useState(0);
  const [total, setTotal] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [winner, setWinner] = useState("");
  const[error,setError]=useState("")
  const setOdd = () => {
    setToss("Odd");
    setActiveButton("Odd");
  };

  const setEve = () => {
    setToss("Even");
    setActiveButton("Even");
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const playOpp = () => {
    if(selectedNumber===0 ){
        setError('Error')
        return
    }
    else if(toss===''){
       setError('Error1')
       return
    }
    const randomNumber = generateRandomNumber(1, 7);
    setOppToss(randomNumber);

    // Calculate total directly here
    const newTotal = randomNumber + selectedNumber;
    setTotal(newTotal);

    // Determine winner
    if (newTotal % 2 === 0 && toss === 'Even') {
      setWinner("You");
    } else if (newTotal % 2 !== 0 && toss === 'Odd') {
      setWinner("You");
    } else {
      setWinner("Opp");
    }

   


  };

  return (
    <>
      <div className="toss">
        <div className="home"><div className="toss1"><h1>Toss</h1></div><div className="home1"><a href='/' ><button type="button" class="btn btn-danger">Home</button></a></div></div>
        
        <div className="selector"><div className="head1"><h4>Select a number --</h4></div>
        

        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} /></div>
        <Alert error={error} setError={setError}/>
        <div className="head2"><h4>Choose Odd or Even</h4></div>
        
        <div className="askodd">
          <button
            className="Odd"
            onClick={setOdd}
            style={{ backgroundColor: activeButton === "Odd" ? 'black' : 'white', color: activeButton === 'Odd' ? 'white' : 'black' }}
          >
            Odd
          </button>

          <button
            className="Eve"
            onClick={setEve}
            style={{ backgroundColor: activeButton === "Even" ? 'black' : 'white', color: activeButton === 'Even' ? 'white' : 'black' }}
          >
            Even
          </button>
        </div>
        
        <Opponent oppToss={oppToss} playOpp={playOpp} selectedNumber={selectedNumber} winner={winner} total={total} />
        <Your winner={winner}/>
      </div>
    </>
  );
}

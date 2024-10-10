import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Playgame from './pages/Playgame';
import Howtoplay from './pages/Howtoplay';
import Batting from './pages/Batting';
import Bowling from './pages/Bowling';
import {useState} from 'react';
function App() {
  const[innings,setInnings]=useState(1)
  const[target,setTarget]=useState(0)
  const[current,setCurrent]=useState("")
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Playgame' element={<Playgame/>} />
      <Route path='/Howtoplay' element={<Howtoplay/>} />
      
        <Route path='/Playgame/Batting' element={<Batting innings={innings} setInnings={setInnings} target={target} setTarget={setTarget} current={current} setCurrent={setCurrent}/>}/>
        <Route path='/Playgame/Bowling' element={<Bowling innings={innings} setInnings={setInnings} target={target} setTarget={setTarget}current={current} setCurrent={setCurrent}/>}/>
    
    </Routes>
    </>
  );
}

export default App;

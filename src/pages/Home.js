import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import play from './Playgame'
import how from './Howtoplay'
export default function Home() {
  return (
    <div className='Cricket'>
        <div className="left">
      <div className="heading">
        HAND CRICKET SIMULATOR
      </div>
      <div className="play">
        <div className="playnow">
        <Link to='/Playgame' className='Playnow'>Play Game</Link>
        </div>
        <div className="how">
        <Link to='/Howtoplay' className='Howtoplay'>How to Play</Link>
        </div>
      </div>
    </div>
    <div className="right">
        <div className="img">
            <img src="https://play-lh.googleusercontent.com/Vk3EWVzQCJnEKkpLIJLYqFcIs6KvXXcVQnc-8DA3pOpxFFPp32Gpgpof2Tgou0JWwwY"  alt="Hand-Cricket" />
        </div>
    </div>
    </div>
  )
}

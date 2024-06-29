import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import myCV from './Divine-joy-cv.pdf'
import { BsFillMoonStarsFill , BsFillSunFill} from 'react-icons/bs'
import {Slide} from 'react-awesome-reveal'
import {Link} from 'react-scroll'

const Home = ({theme, changeTheme}) => {
  return (
    <div className='container-fluid home'>
        <div className="theme-change" onClick={changeTheme}>
          {theme === 'light' ? (<p ><BsFillMoonStarsFill size={40}/></p>) : (<p ><BsFillSunFill className='sun-theme' size={40}/></p>) }

        </div>
        <div className='container home-content' id='home'> 
        <Slide right>
            <h1>Hi, i am Divine-joy</h1>
            <h3>
                <Typewriter
                options= {{
                    strings:['Frontend', 'Developer'],
                    autoStart: true,
                    loop: true,
        
                    
                    }}
                    />
            </h3>
            </Slide>  
            <Slide bottom>
            <div className='btn-for-action'>
              <Link to='contact'
              smooth={true}
              duration={100}
              spy={true}><button className='hire-me-btn'>Hire me</button></Link>
                
                <button className='resume-btn'>
                    <a href={myCV} download='Divine_CV'>
                    Get resume
                    </a>
                  </button>
            </div>
            </Slide>
        </div>
      
    </div> 
  )
}

export default Home

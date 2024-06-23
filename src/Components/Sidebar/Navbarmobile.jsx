import React from 'react'
import { useState } from 'react'
import './Navbarmobile.css'
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi'
import {FcHome, FcTodoList, FcContacts, FcFactory, FcSalesPerformance} from 'react-icons/fc'
import { MdBiotech } from 'react-icons/md'
import { MdCastForEducation } from 'react-icons/md'
import {Link} from 'react-scroll'
import Switch from 'react-switch'

const Navbarmobile = ({theme, changeTheme}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = ()=>{setOpen(!open)}
  return (
    <div className='nav-mobile'>
        <div className='nav-header'>
            
            <p> {open ? <GiCancel size={25} 
            onClick={handleOpen}/> : <GiHamburgerMenu size={25}
               onClick={handleOpen}/>}</p>
        </div>
      
        {open ? (<div className='navbar-items-mobile'>
        <ul>
        <li className='mobile-nav-item'> 
            <Link to='home'
                    spy={true}
                    duration={100}
                    smooth >
                <FcHome size={25}/> Home
            </Link>
        </li>
        <li className='mobile-nav-item'> 
            <Link to='about'
                    spy={true}
                    duration={100}
                    smooth >
                <FcContacts size={25} />About
            </Link>
            </li>  
            <li className='mobile-nav-item'> 
            <Link to='work'
                    spy={true}
                    duration={100}
                    smooth >
                <FcFactory size={25}/>Work Experience
            </Link>
            </li>
            <li className='mobile-nav-item'> 
            <Link to='tech'
                    spy={true}
                    duration={100}
                    smooth >
                
                <MdBiotech size={25} color={'pink'}/>Tech stack
            </Link>
            </li>
            <li className='mobile-nav-item'> 
            <Link to='education'
                    spy={true}
                    smooth 
                    duration={100}>
                
                <MdCastForEducation size={25} color={'green'}/>Education
            </Link>
            </li>
            <li className='mobile-nav-item'>
            <Link to='projects'
                    spy={true}
                    smooth 
                    duration={100}>
                 
                <FcTodoList size={25} />Projects
            </Link>
            </li>
            <li className='mobile-nav-item'> 
            <Link to='testimonials'
                    spy={true}
                    smooth
                    duration={100} >
              
                <FcSalesPerformance size={25} />Testimonials
            </Link>
            </li>
            <li className='mobile-nav-item'>
            <Link to='contact'
                    spy={true}
                    smooth
                    duration={100} >
              
                <FcContacts size={25} />Contact
            </Link>
            </li>
            <li className='mobile-nav-item'>
            <Switch onChange={changeTheme} checked
            ={theme === 'dark'}/>

            </li>
           
                
            </ul>

        </div>): null} 
       
       
      
    </div>
  )
}

export default Navbarmobile

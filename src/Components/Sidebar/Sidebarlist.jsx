import React from 'react'
import './Sidebarlist.css'
import {FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory, FcSalesPerformance} from 'react-icons/fc'
import { MdBiotech } from 'react-icons/md'
import { MdCastForEducation } from 'react-icons/md'
import {Link} from 'react-scroll'



const Sidebarlist = ({expandSideBar}) => {
  return (
    <>
    {expandSideBar? 
        <nav className='navbar-items'>
            <div className='sidebar-profile-pic'>
                <img src='/img/Divine-joy.jpeg'  alt='profilepic'/>

            </div>
            <ul>
        <li className='nav-item'> 
            <Link to='home'
                    spy={true}
                    duration={100}
                    smooth >
               
                <FcHome size={25}/>Home
            </Link>
        </li>
        <li className='nav-item'> 
            <Link to='about'
                    spy={true}
                    duration={100}
                    smooth >
                
                <FcContacts size={25}/>About
            </Link>
            </li>  
            <li className='nav-item'> 
            <Link to='work'
                    spy={true}
                    duration={100}
                    smooth >
                 
                <FcFactory size={25}/>Work Experience
            </Link>
            </li>
            <li className='nav-item'> 
            <Link to='tech'
                    spy={true}
                    duration={100}
                    smooth >
                
                <MdBiotech size={25} color={'pink'}/>Tech stack
            </Link>
            </li>
            <li className='nav-item'> 
            <Link to='education'
                    spy={true}
                    smooth 
                    duration={100}>
                
                <MdCastForEducation size={25} color={'green'}/>Education
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='projects'
                    spy={true}
                    smooth 
                    duration={100}>
                 
                <FcTodoList size={25} />Projects
            </Link>
            </li>
            <li className='nav-item'> 
            <Link to='testimonials'
                    spy={true}
                    smooth
                    duration={100} >
              
                <FcSalesPerformance size={25} />Testimonials
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='contact'
                    spy={true}
                    smooth
                    duration={100} >
              
                <FcContacts size={25} />Contact
            </Link>
            </li>
                
            </ul>

        </nav>
    :
        <div className='navbar-items-collapsed'>
            <ul>
                <Link to='home'>
                <li className='nav-item'><FcHome size={25}/> </li>
                </Link>

                <Link to='about'>
                <li className='nav-item'><FcContacts size={25}/></li>

                </Link>
                <Link to='work'>
                <li className='nav-item'><FcFactory size={25}/></li>
                </Link>

                <Link to='tech'>
                <li className='nav-item'><MdBiotech size={25} color={'pink'}/></li>
                </Link>

                <Link to='education'>
                <li className='nav-item'><MdCastForEducation size={25} color='green'/></li>
                </Link>

                <Link to='projects'>
                <li className='nav-item'><FcTodoList size={25}/></li>
                </Link>

                <Link to='testimonials'>
                <li className='nav-item'><FcSalesPerformance size={25}/></li>
                </Link>

                <Link to='contact'>
                <li className='nav-item'><FcContacts size={25}/></li>
                </Link>
                
             
               
               
  
               
               
                
            </ul>
        
            

        </div>
    }
    </>
  )
}

export default Sidebarlist

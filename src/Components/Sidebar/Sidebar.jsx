import React from 'react'
import { useState } from 'react'
import './Sidebar.css'
import Home from '../Home/Home'
import Sidebarlist  from './Sidebarlist'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const Sidebar = ({theme, changeTheme}) => {
    const [expandSideBar, setExpandSideBar] = useState(true)
    const handleExpandSidebar = ()=>{
        setExpandSideBar(!expandSideBar)
        
    }
  return (
    <div className='container-fluid sidebar-section'>
        <div className=  {expandSideBar ? 'sidebar-expand sidebar': 'sidebar'}>
            <div className='icon-for-sidebar-expand-and-collapse'>
              <p onClick={handleExpandSidebar}> 
              {expandSideBar ?  <BsChevronLeft size={30}/> : <BsChevronRight size={30}/> }</p> 

            </div>
            <Sidebarlist
            expandSideBar={expandSideBar}/>

        </div>

        <div className='container'>
          <Home changeTheme={changeTheme} theme={theme}/>
        </div>
      
    </div>
  )
}

export default Sidebar

import { useState, createContext } from 'react'
import ScrollToTop from 'react-scroll-to-top'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import Techstack
 from './Components/Techstack/Techstack'
 import Project from './Components/Projects/Project'
 import Workexperience from './Components/Workexperience/Workexperience'
 import Education from './Components/Education/Education'
 import Testimonials from './Components/Testimonials/Testimonials'
 import Contact from './Components/Contact/Contact'
 import Navbarmobile from './Components/Sidebar/Navbarmobile'


 export const ThemeContext = createContext(null)


function App() {
   const [theme, setTheme] = useState('light')
   const changeTheme =()=>{
      setTheme((prev) => (prev === 'light' ? 'dark': 'light'))

   } 
 return(
  <ThemeContext.Provider value={{theme, changeTheme}}>
      <div id={theme}>
         <Navbarmobile  changeTheme={changeTheme} theme={theme}/>
         <Sidebar changeTheme={changeTheme} theme={theme}/>
         <About/>
         <Workexperience/>
         <Techstack/>
         <Education/>
         <Project/>
         <Testimonials/>
         <Contact/>
      </div>
      
   <ScrollToTop 
      smooth
      height='20'
      width='20'
      style={{borderRadius: '90px', backgroundColor: 'pink'}}/>
 </ThemeContext.Provider>
 
 
 

 )
      
}

export default App

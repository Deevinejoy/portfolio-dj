import React from 'react'
import './Techstack.css'
import {useState} from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Techstack = () => {
    const data=[
        {
            name:' Frontend developer'
        },
        
        {
            name: 'Javascript'
        },
        {
            name: 'Tailwind'
        },
        {
            name: 'Reactjs'
        },
        {
            name: 'Bootstrap'
        },
        {
            name:'UI/UX'
        },
        {
            name: 'Python'
        },
        {
            name: 'Nextjs'
        },
        {
            name: 'Nodejs'
        },
        {
            name: 'Html/css'
        },

        {
            name: 'Git'
        },
        {
            name: 'Github'
        },
        {
            name: 'React Native'
        }
      
    ]
    const colors =
    [
        'pink', 'red', 'purple', 'orange', 'blue', 'green', 'wheat','brown', 'lavender', 'cyan', 'lightgreen', 'orangered'
    ]
   
    const [loadMore, setLoadMore] = useState(6)
    const handleLoadMore= () =>{
        setLoadMore((prev) => prev+3)
        
    }
  return (
    <div className='container' id='tech'>
        <div className='sect-title'>
            <h1>Tech stack</h1>
            <span className="line"></span>
        </div>
        <div className='row' >
        {data.slice(0,loadMore).map((item, index)=>
         <Fade right>
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' >
                <div  className={index===0? 'tech-content-marked tech-content':'tech-content'} key={index}>
                    <span className='tech-no'
                     style={{backgroundColor: colors[index]}}> {index+1}

                    </span>
                    <p>{item.name}</p> 
                </div>
                               
            </div>
        </Fade>

        )} 
        </div>
       
   {loadMore >= data.length? null :
    <Zoom>
      <span className='load-more' onClick={handleLoadMore}>Load More</span>
    </Zoom>
}

    
      
    </div>
  )
}

export default Techstack

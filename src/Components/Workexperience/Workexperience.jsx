import React from 'react'
import './Workexperience.css'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { MdGroupWork } from 'react-icons/md'
import 'react-vertical-timeline-component/style.min.css';
 

const Workexperience = () => {
    const data =[
        {
            company: 'Fiverr',
            position: 'Frontend developer',
            des: 'Freelancing',
            year: '2022-2024',
            tech:[
                {
                    techName: 'Reactjs'
                },
                {
                    techName: 'Nodejs'
                },
            
                {
                    techName: 'javascript'
                },
                {
                    techName: 'Tailwind'
                }
            ]
        },
        {
            company: 'Kitarific',
            position: 'Frontend developer',
            des: 'Worked deligently for a year',
            year: '2023-2024',
            tech:[
                {
                    techName: 'Reactjs'
                },
                {
                    techName: 'Bootstrap'
                },
            
                {
                    techName: 'Javascript'
                }
            ]
        },
                
        {
            company: 'Upwork',
            position: 'Frontend developer',
            des: 'Freelancing',
            year: '2022-2023',
            tech:[
                {
                    techName: 'Html'
                },
                {
                    techName: 'Javascript'
                },
            
                {
                    techName: 'Css'
                }
            ]
        },
    ]
    const colors =
    [
        'orange', 'red', 'brown'
    ]
  return (
    
    <div className='container work-experience'
    id='work'>
        <div className='section-title'>
            <h2>Work Experience</h2>
            <span className='line'></span>
        </div>
            <VerticalTimeline lineColor='brown' >
             {data.map((item, index)=>(

            
                <VerticalTimelineElement
                key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: colors[index], color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  brown' }}
                  date={item.year}
                  dateClassName='date-class'
                  iconStyle={{ background: colors[index], color: 'white' }}
                  icon={<MdGroupWork />}>
                  <h3       className="vertical-timeline-element-title">{item.company}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.position}
                  </h4>
                  <div className='row'>
                        { item.tech.map((tech, index)=>
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                                    <div className='tech-skills'>
                                        <p>{tech.techName}</p>
                                    </div>
                                </div>
                        )}
                        

                  </div>
                  <p>
                    {item.des}
                  </p>
                </VerticalTimelineElement>               
               ))}
           </VerticalTimeline>
    </div>
  )
}

export default Workexperience

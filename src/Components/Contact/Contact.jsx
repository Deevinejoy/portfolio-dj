import React, { useState } from 'react'
import './Contact.css'
import { RiSendPlaneFill } from 'react-icons/ri'
import {Zoom} from 'react-awesome-reveal'
import {Slide} from 'react-awesome-reveal'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [jobType, setJobType] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail =()=>{
    const SERVICE_ID = 'service_c2zo4hc'
    const TEMPLATE_ID = 'template_up6b9ib'
    const API_KEY = 'n1_c5qRKrhr5SvMDE'
    const templateParams = {
      from_name: name,
      from_email: email,
      from_job: jobType,
      to_name: 'Divine joy',
      message: message
    } 

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, API_KEY).then((response)=>{
      if (response) {
        toast.success("Sent Succesfully, i'll get back to you shortly")      
        setName('')
        setEmail('')
        setJobType('')
        setMessage('') 
      }
    })
    .catch(err =>{
      toast.error( 'Error sending email', err)
    
      console.log('Error sending email', err)
    })
}

const handleSubmit = (e)=>{
  e.preventDefault()
    if (!name){
      toast.error('please enter your name')
      return
    }
    if (!email){
      toast.error('please enter your email')
      return
    }
    if (!jobType){
      toast.error('please enter Job type')
      return
    }
    if (!message){
      toast.error('please enter your message')
      return
    } else{
       sendEmail()
    }
}

  return (
    <div className='container contact-section'
    id='contact'>
      
        <div className='row'>
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-5'>
              <Zoom top>
                <div className="contact-form-image">
                    <img src='/img/Divine-joy.jpeg' alt='contact image'/>


                </div>
                </Zoom>

            </div>
            <div className='col-xl-7   col-lg-7 col-md-7 col-sm-7'>
                <div className="contact-form">
                  <div className="text-center">
                    <h3>Contact me</h3>
                    <span className="line"></span>
                  </div>
                  <Slide direction='right'>
                <form action="" className="contact" onSubmit={handleSubmit} >
                    <label 
                    htmlFor ='name-text' className='form-label'>Name</label>
                    <input
                    id='name-text'
                    type='text'
                    className='form-control'
                    value={name}
                   
                    onChange={(e)=> setName(e.target.value)}/>

                    <label 
                    htmlFor ='email-text'
                    className='form-label'>E-mail</label>
                    <input
                    id='email-text'
                    type='text'
                    className='form-control'
                    value={email}
                
                    onChange={(e)=> setEmail(e.target.value)}/>

                    <label 
                    htmlFor ='select'
                    className='form-label'>Job-type</label>
                    <select 
                    id='select'
                    className='form-control custom-select'
                    value={jobType}
                    
                    
                    onChange={(e)=> setJobType(e.target.value)}>
                       <option>Full-Time</option>
                       <option>Part-time</option>
                       <option>Internship</option>
                       <option>Contract</option>
                    </select>

                    <label 
                    htmlFor='textarea'
                    className='form-label'>Messsage</label>
                    <textarea 
                    id='textarea'
                    rows='4' className='form-control text-area'
                    value={message}
                   
                    onChange={(e)=> setMessage(e.target.value)}>

                    </textarea>
                    <button className='btn-submit' role='submit' > 
                    <RiSendPlaneFill size={20}/>
                    </button>
                </form>
                </Slide>
              </div>


            </div>
        </div>
        <ToastContainer
        autoClose={8000}/>
   
       
    </div>
  )
}

export default Contact

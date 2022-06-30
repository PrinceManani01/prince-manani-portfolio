import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>

       <div className="container about_container">
         <div className='about_me'>
           <div className="about_me-image">
             <img src={ME} alt="About Image" />
           </div>
         </div>


         <div className="about_content">
           <div className= "about_cards">
             


             <article className="about_card">
               <VscFolderLibrary className='about-icon'/>
               <h5>Projects</h5>
               <small>3+ Completed Projects</small>
             </article>
             
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fugit, laborum consectetur nulla officia deserunt magnam. Iste dolore vel beatae voluptatem asperiores nesciunt animi expedita veniam quod, consequatur, minima possimus.</p>
           <a href="#contact" className='btn btn-primary'> Let's Talk</a>
         </div>

       </div>
    </section>
  )
}

export default About
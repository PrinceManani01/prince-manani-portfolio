import React from 'react'
import './experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have..</h5>
      <h2>My Experience</h2>
      <div className="container experience_container ">
        <div className="experience-fronted">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon' />
           <div>
           <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
           </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
           </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div><h4>BootStrap</h4>
            <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>


        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            
            <div><h4>MySQL</h4>
            <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            
            <div>
            <h4>Express JS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>

        <div className="experience_programmer">
        <h3>Others Skills</h3>
          <div className="experience_content">
            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4>Data Structures and Algorithms</h4>
            <small className='text-light'>Intermediate</small>
           </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Operating System</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Database Management System</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Object Oriented Programming</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          </div>


        </div><div className="experience_tools">
        <h3>Tools</h3>
          <div className="experience_content">
            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
           <div>
           <h4>BootStrap</h4>
            <small className='text-light'>Intermediate</small>
           </div>
            </article>

            <article className='experience_deatils'><BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Redux</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            
      
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Experience
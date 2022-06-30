import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dhqshqi', 'template_obbhb3l', form.current, 'llJVkqrczsg0tYfwR')
      e.target.reset();
      
  };
  return (
   <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>
     <div className="container contact_container">
       <div className="contact_options">

         <article className="contact_option">
           <h4>Email</h4>
           <MdOutlineEmail className='conatct_option-icon'/>
           <h5>princemanani2001@gmail.com</h5>
           <a href="mailto:princemanani2001@gmail.com" target="_blank">Send Message</a>
         </article>

         <article className="contact_option">
           <h4>Instagram</h4>
           <BsInstagram className='conatct_option-icon'/>
           <h5>_itspr1nce</h5>
           <a href="https://www.instagram.com/_itspr1nce/" target="_blank">Send Message</a>
         </article>

         <article className="contact_option">
           <h4>WhatsApp</h4>
           <BsWhatsapp className='conatct_option-icon'/>
           <h5>+91 9108782124</h5>
           <a href="https://api.whatsapp.com/send?phone+919108782124" target="_blank"> Send Message</a>
         </article>
       </div>
       {/* end of conatct */}
       <form ref={form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Full Name' required/>
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
         <button type='submit' className='btn btn-primary'>Submit</button>
       </form>
     </div>
   </section>
  )
}

export default Contact

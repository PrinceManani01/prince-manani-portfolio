import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>PRINCE MANANI</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/prince-manani-a5058b1a7/"><AiFillLinkedin/></a>
        <a href="https://www.instagram.com/_itspr1nce/"><BsInstagram/></a>
        
      </div>
      <div className='footer_copyright'>
        <small>&copy; PRINCE MANANI. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
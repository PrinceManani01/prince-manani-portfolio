import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub}from 'react-icons/bs'
import {SiNetlify} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/prince-manani-a5058b1a7/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/PrinceManani01" target="_blank"><BsGithub/></a>
        <a href="https://www.netlify.com/" target="_blank"><SiNetlify/></a>

    </div>
  )
}

export default HeaderSocial
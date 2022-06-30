import React from 'react'
import './portfolio.css'

import IMG2 from '../../assets/portfolio2.jpg'

import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'





const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Mi Store Clone</h3>
          <div className="portfolio_item-cta">
          <a href="https;//github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Personal Portfolio Website</h3>
          <div className="portfolio_item-cta">
          <a href="https;//github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3> E-Commerce Website</h3>
          <div className="portfolio_item-cta">
          <a href="https;//github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target={'_blank'}>Live Demo</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portfolio
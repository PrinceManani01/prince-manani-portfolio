import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



const data = [
  {
    avatar:   "https://randomuser.me/api/portraits/women/2.jpg",
    name:     "Ester Okamoto",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
  {
    avatar:   "https://randomuser.me/api/portraits/men/15.jpg",
    name:     "Maurício costa",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
  {
    avatar:   "https://randomuser.me/api/portraits/lego/1.jpg",
    name:     "Brandon Wilker",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
  {
    avatar:   "https://randomuser.me/api/portraits/women/61.jpg",
    name:     "Fátima Lunes",
    review:   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis maiores, ducimus vero quam sed quas ullam adipisci excepturi optio in?"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container" 
      modules={ [Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
      
  {
    data.map(({avatar,name,review},index) =>{
      return(
        <SwiperSlide key ={index} className="testimonial">
        <div className="client_avatar">
          <img src={avatar}  />
        </div>
        <h5 className='client-name'>{name}</h5>
        <small className='client_review'>
         {review}
        </small>    
    </SwiperSlide>
      )
    })
  }  
      </Swiper>
    </section>
  )
}

export default Testimonials
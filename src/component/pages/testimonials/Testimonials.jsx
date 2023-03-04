import React from 'react';
import Testimonial from './Testimonial';
import Slider from 'react-slick';
import './testimonial.scss'

const Testimonials = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    }
    const testimonialData = [
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis et minus porro sint ducimus quibusdam ratione vel doloremque quidem ipsam eius, quae ab nisi necessitatibus error autem voluptates exercitationem soluta fugiat. Aperiam odit eius consectetur, nesciunt esse ullam libero?',
            author_image: require('../../images/testimonial/post-1.jpg'),
            author_name: 'Mark Milan',
            author_status: "CEO, MediaPlexy Inc."
        },
        {
            id: 2,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis et minus porro sint ducimus quibusdam ratione vel doloremque quidem ipsam eius, quae ab nisi necessitatibus error autem voluptates exercitationem soluta fugiat. Aperiam odit eius consectetur, nesciunt esse ullam libero?',
            author_image: require('../../images/testimonial/post-2.jpg'),
            author_name: 'Rachel Rein',
            author_status: "CFO, Nomeo Services."
        },
        {
            id: 3,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis et minus porro sint ducimus quibusdam ratione vel doloremque quidem ipsam eius, quae ab nisi necessitatibus error autem voluptates exercitationem soluta fugiat. Aperiam odit eius consectetur, nesciunt esse ullam libero?',
            author_image: require('../../images/testimonial/post-3.jpg'),
            author_name: 'Janet Mitchell',
            author_status: "Student"
        },
        {
            id: 4,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis et minus porro sint ducimus quibusdam ratione vel doloremque quidem ipsam eius, quae ab nisi necessitatibus error autem voluptates exercitationem soluta fugiat. Aperiam odit eius consectetur, nesciunt esse ullam libero?',
            author_image: require('../../images/testimonial/post-4.jpg'),
            author_name: 'Peleng Thambusa',
            author_status: "Lead Designer, TechPlus Inc."
        },
        {
            id: 5,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis et minus porro sint ducimus quibusdam ratione vel doloremque quidem ipsam eius, quae ab nisi necessitatibus error autem voluptates exercitationem soluta fugiat. Aperiam odit eius consectetur, nesciunt esse ullam libero?',
            author_image: require('../../images/testimonial/post-5.jpg'),
            author_name: 'Christelle Achulo',
            author_status: "UI/UX MediaPlus Inc."
        },
        {
            id: 6,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis et minus porro sint ducimus quibusdam ratione vel doloremque quidem ipsam eius, quae ab nisi necessitatibus error autem voluptates exercitationem soluta fugiat. Aperiam odit eius consectetur, nesciunt esse ullam libero?',
            author_image: require('../../images/testimonial/post-6.jpg'),
            author_name: 'Mark Milan',
            author_status: "CEO, MediaPlexy Inc."
        },
    ]
  return (
    <div className='testimonials'>
      <Slider {...settings} className='padding-slider'>
        {testimonialData.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial}/>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;

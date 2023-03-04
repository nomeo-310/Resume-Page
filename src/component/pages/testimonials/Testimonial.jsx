import React from 'react'

const Testimonial = ({testimonial: {content, author_image, author_name, author_status}}) => {
  return (
    <div className='testimonial'>
      <p>{content}</p>
      <div className='testimonial-details'>
        <div className='testimonial-image'>
            <img src={author_image} alt={author_name}/>
        </div>
        <div className='testimonial-info'>
            <h4>{author_name}</h4>
            <span>{author_status}</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;

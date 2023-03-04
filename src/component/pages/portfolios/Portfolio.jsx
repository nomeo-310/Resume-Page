import React from 'react'

const Portfolio = ({portfolio: {name, category, image}}) => {
  return (
    <div className='portfolio'>
      <div className='portfolio-details'>
        <h4 className='title'>{name}</h4>
        <span className='term'>{category.join(' , ')}</span>
      </div>
      <div className='thumb'>
        <img src={image} alt={name}/>
        <div className='mask'></div>
      </div>
    </div>
  )
}

export default Portfolio;

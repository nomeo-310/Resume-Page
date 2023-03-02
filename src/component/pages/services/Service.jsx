import React from 'react'

const Service = ({service: {name, content, icon}}) => {
  return (
    <div className='service text-center'>
      <span className={`mdi ${icon} icon-simple`}></span>
      <h4 className='my-3'>{name}</h4>
      <p className='mb-0'>{content.substring(1,90)}</p>
    </div>
  )
}

export default Service;

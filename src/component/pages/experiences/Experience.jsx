import React from 'react'

const Experience = ({experience: {year, content, degree}}) => {
  return (
    <div className='experience'>
      <div className='title'>
        <span>{year}</span>
      </div>
      <div className='body'>
        <h4 className='mt-0'>{degree}</h4>
        <p>{content.substring(0, 100)}</p>
      </div>
    </div>
  )
}

export default Experience;

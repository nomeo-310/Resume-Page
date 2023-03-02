import React from 'react'
import './section-header.scss'

const SectionHeader = ({title}) => {
  return (
    <div className='section-header'>
      <h3 className='section-title'>{title}</h3>
      <div className='spacer' data-height='80'></div>
    </div>
  )
}

export default SectionHeader;

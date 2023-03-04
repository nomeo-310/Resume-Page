import React from 'react'

const PricingBox = ({ pricebox: {name, price, icon, content, recommended }}) => {
  return (
    <div className={recommended ? 'price-box text-center recommended': 'price-box text-center'}>
      <span className={`price-icon mdi ${icon} icon`}></span>
      <span className='plan'>{name}</span>
      <h3 className='price'>
        <span className='mdi mdi-currency-ngn'></span>{price.toLocaleString()}
        <span className='slash'>/month</span>
      </h3>
      <div className='price-content'>
        <ul>
            {content.map((contentItem, index) => (
                <li key={index}>{contentItem}</li>
            ))}
        </ul>
      </div>
      <a href="#!" className='btn btn-default'>Get Started</a>
    </div>
  )
}

export default PricingBox;

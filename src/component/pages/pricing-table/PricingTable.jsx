import React from 'react';
import './pricing-table.scss'
import PricingBox from './PricingBox';

const PricingTable = () => {
  const pricingData = [
    {
      id:1,
      name: 'Basic',
      icon: 'mdi-lightning-bolt',
      price: 3950,
      content: ['Frontend Builder', 'Regular Support', '1 Year of Update'],
      recommended: false
    },
    {
      id:2,
      name: 'Professional',
      icon: 'mdi-fire',
      price: 8750,
      content: ['Frontend Builder', 'Regular Support', '2 Years of Update', 'White Labeling'],
      recommended: true
    },
    {
      id:3,
      name: 'Premium',
      icon: 'mdi-rocket-launch',
      price: 10500,
      content: ['Frontend Builder', 'Regular Support', '3 Years of Update'],
      recommended: false
    },

  ];
  return (
    <div className='pricing-table row'>
      {pricingData.map((pricingInfo) => (
        <div className={pricingInfo.recommended ? 'col-md-4 px-md-0 my-5 my-md-0' : 'col-md-4 mt-3'} key={pricingInfo.id}>
          <PricingBox pricebox={pricingInfo}/>
        </div>
      ))}
    </div>
  );
}

export default PricingTable;

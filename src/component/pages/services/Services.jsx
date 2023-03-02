import React from 'react';
import './services.scss'
import Service from './Service';

const Services = () => {
    const serviceData = [
        {
            id:1,
            name:'Development',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem vel officia blanditiis veritatis necessitatibus illo, libero soluta dolores, in quam a tempora pariatur ducimus?',
            icon: 'mdi-earth'
        },
        {
            id:2,
            name:'Design',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem vel officia blanditiis veritatis necessitatibus illo, libero soluta dolores, in quam a tempora pariatur ducimus?',
            icon: 'mdi-react'
        },
        {
            id:3,
            name:'Advertising',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem vel officia blanditiis veritatis necessitatibus illo, libero soluta dolores, in quam a tempora pariatur ducimus?',
            icon: 'mdi-directions'
        },
        {
            id:4,
            name:'SEO',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem vel officia blanditiis veritatis necessitatibus illo, libero soluta dolores, in quam a tempora pariatur ducimus?',
            icon: 'mdi-rocket-launch'
        },
        {
            id:5,
            name:'Copy Write',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem vel officia blanditiis veritatis necessitatibus illo, libero soluta dolores, in quam a tempora pariatur ducimus?',
            icon: 'mdi-note'
        },
        {
            id:6,
            name:'Support',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem vel officia blanditiis veritatis necessitatibus illo, libero soluta dolores, in quam a tempora pariatur ducimus?',
            icon: 'mdi-share-variant'
        }
    ]
  return (
    <div className='services row -mt-20'>
      {serviceData.map((serviceInfo) => (
        <div className='col-md-4 col-ms-6 mt-20' key={serviceInfo.id}>
            <Service service={serviceInfo}/>
        </div>
      ))}
    </div>
  );
}

export default Services;

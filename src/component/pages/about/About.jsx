import React from 'react'
import './about.scss'
import { Link as ScrollLink } from 'react-scroll'

const About = () => {
  const aboutData = {
    name: 'Salomi Afolabi Onome',
    image: require('../../images/img_thumb.jpg'),
    cv_path: require('../../images/Resume.pdf'),
    location: 'Lagos, Nigeria',
    birthday: '3 October, 1989',
    email: 'onomesalomi@gmail.com',
    about_me: 'I am Salomi Afolabi Onome from Lagos, Nigeria. I have rich experience in website design and software development'
  }
  return (
    <div className='about row'>
      <div className='col-md-3 text-center'>
        <img src={aboutData.image} alt={aboutData.name}/>
      </div>
      <div className='col-md-9'>
        <h2 className='mt-4 mt-md-0 mb-4'>Hello,</h2>
        <p className='mb-0'>{aboutData.about_me}</p>
        <div className='row my-4'>
          <div className='col-md-6'>
            <p className='mb-2'>
              Name: <span className='text-dark'>{aboutData.name}</span>
            </p>
            <p className='mb-0'>
              Birthday: <span className='text-dark'>{aboutData.birthday}</span>
            </p>
          </div>
          <div className='col-md-6 mt-2 mt-md-0 mt-sm-2'>
            <p className='mb-2'>
              Location: <span className='text-dark'>{aboutData.location}</span>
            </p>
            <p className='mb-0'>
              Email: <span className='text-dark'>{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cv_path} className='btn btn-default me-3'>
          <span className='mdi mdi-cloud-download-outline'></span> Download Resume
        </a>
        <ScrollLink 
          activeClass='active'
          to='section-contact'
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className='btn btn-alt mt-2 mt-md-0 mt-xs-2'
          >
            <span className='mdi mdi-email'></span>Hire Me
        </ScrollLink>
      </div>
    </div>
  )
}

export default About;

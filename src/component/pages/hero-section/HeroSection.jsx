import React from 'react'
import './hero-section.scss'
import heroImage from '../../images/hero.jpg';
import { Link as ScrollLink } from 'react-scroll';


const HeroSection = () => {
  const heroData = {
    name: 'Salomi Afolabi',
    about_me: "I am a web developer, I love writting code and make new friends and probably cook something delicious and nice"
  }
  return (
    <section className='hero-section background parallax shadow-dark d-flex align-items-center' style={{backgroundImage: `url(${heroImage})`}}>
      <div className='cta mx-auto mt-2'>
        <h1 className='mt-0 mb-4 dot'>
          I'm {heroData.name}
        </h1>
        <p className='mb-4'>
          {heroData.about_me}
        </p>
        <ScrollLink 
          activeClass='active'
          to='section-portfolios'
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className='btn btn-default btn-lg me-3'
          >
            <span className='mdi mdi-cog'></span>View Portfolio
        </ScrollLink>
        <div className='spacer d-md-none d-lg-none d-sm-none' data-height='10'></div>
        <ScrollLink 
          activeClass='active'
          to='section-portfolios'
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className='btn btn-border-light btn-lg me-3'
          >
            <span className='mdi mdi-email'></span>Hire Me
        </ScrollLink>
      </div>
      <div className='overlay'></div>
    </section>
  )
}

export default HeroSection;

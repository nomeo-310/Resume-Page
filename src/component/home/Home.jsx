import React from 'react'
import { useEffect } from 'react';
import Layout from '../layout/Layout';
import { Element } from 'react-scroll';
import HeroSection from '../pages/hero-section/HeroSection';
import About from '../pages/about/About';
import SectionHeader from '../pages/common/section-header/SectionHeader';
import Skills from '../pages/skills/Skills';
import FunFacts from '../pages/fun-facts/FunFacts';
import Services from '../pages/services/Services';
import Experiences from '../pages/experiences/Experiences';
import Portfolios from '../pages/portfolios/Portfolios';
import PricingTable from '../pages/pricing-table/PricingTable';
import Testimonials from '../pages/testimonials/Testimonials';
import Blogs from '../pages/blog/Blogs';
import Contact from '../pages/contact/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <div>
      <Layout>
        <Element name='section-home'>
          <HeroSection/>
        </Element>
        <Element name='section-about'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='About Me'/>
            <About/>
          </section>
        </Element>
        <Element name='section-skill'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='My Skills'/>
            <Skills/>
          </section>
        </Element>
        <Element name='section-fun-facts'>
          <FunFacts/>
        </Element>
        <Element name='section-services'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='My Services'/>
            <Services/>
          </section>
        </Element>
        <Element name='section-resume'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='Experiences'/>
            <Experiences/>
          </section>
        </Element>
        <Element name='section-portfolios'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='Portfolios'/>
            <Portfolios/>
          </section>
        </Element>
        <Element name='section-pricing'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='Pricing Table'/>
            <PricingTable/>
          </section>
        </Element>
        <Element name='section-testimonials'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='Testimonials'/>
            <Testimonials/>
          </section>
        </Element>
        <Element name='section-blogs'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='Recent Posts'/>
            <Blogs/>
          </section>
        </Element>
        <Element name='section-contact'>
          <section className='shadow-blue white-bg padding'>
            <SectionHeader title='Contact Me'/>
            <Contact/>
          </section>
        </Element>
      </Layout>
    </div>
  )
}

export default Home;

import React from 'react'
import Layout from '../layout/Layout';
import { Element } from 'react-scroll';
import HeroSection from '../pages/hero-section/HeroSection';
import About from '../pages/about/About';

const Home = () => {
  return (
    <div>
      <Layout>
        <Element name='section home'>
          <HeroSection/>
        </Element>
        <Element name='section about'>
          <section className='shadow-blue white-bg padding'>
            <About/>
          </section>
        </Element>
      </Layout>
    </div>
  )
}

export default Home;

import React from 'react'
import Layout from '../layout/Layout';
import { Element } from 'react-scroll';
import HeroSection from '../pages/hero-section/HeroSection';

const Home = () => {
  return (
    <div>
      <Layout>
        <Element name='section home'>
          <HeroSection/>
        </Element>
        <Element name='section about'>
          
        </Element>
      </Layout>
    </div>
  )
}

export default Home;

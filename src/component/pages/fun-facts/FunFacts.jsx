import React from 'react'
import './fun-facts.scss'
import TrackVisibility from 'react-on-screen'
import FunFact from './FunFact'

const FunFacts = () => {
    const funFactsData = [
        {
            id:1,
            title: 'Project Completed',
            count: 157,
            icon: 'mdi-heart'
        },
        {
            id:2,
            title: 'Cup of Coffee',
            count: 2765,
            icon: 'mdi-coffee'
        },
        {
            id:3,
            title: 'Happy Customers',
            count: 350,
            icon: 'mdi-emoticon-excited'
        },
        {
            id:4,
            title: 'Awards Won',
            count: 29,
            icon: 'mdi-trophy'
        },
    ]
  return (
    <div className='fun-facts'>
      <section className='shadow-dark color-white padding-50 background-blue'>
        <div className='fun-fact-wrapper row -mt-50'>
            {funFactsData.map((funfact) => (
                <div className='col-md-3 col-sm-6 mt-50' key={funfact.id}>
                    <TrackVisibility once>
                        <FunFact funfact={funfact}/>
                    </TrackVisibility>
                </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default FunFacts;

import React from 'react';
import CountUp from 'react-countup';

const FunFact = ({funfact: {title, count, icon = null}, isVisible}) => {
    const winWidth = window.innerWidth;

    const CountQuery = ()=> {
        if (winWidth && winWidth > 767) {
            return <CountUp end={isVisible ? count: 0}/>
        }
        return <CountUp end={count}/>
    }
  return (
    <div className='fun-fact-item text-center'>
        {icon ? <span className={`mdi ${icon} icon-circle`}></span> : null}
        <h2 className='count'>{CountQuery()}</h2>
        <span>{title}</span>
    </div>
  );
}

export default FunFact;

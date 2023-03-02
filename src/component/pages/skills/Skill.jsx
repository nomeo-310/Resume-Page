import React from 'react';
import './skills.scss'

const Skill = ({progress: {name, percentage}, isVisible}) => {
    const winWidth = window.innerWidth;
    const ProgressQuery =()=> {
        if (winWidth && winWidth < 767) {
            return (
                <div className='progress-bar' 
                    role='progressbar' 
                    aria-valuemax='100' 
                    aria-valuemin='0' 
                    aria-aria-valuenow={percentage}
                    style={isVisible ? {width: `${percentage}%`}: {width: 0}}
                ></div>  
            )
        }
        return (
            <div className='progress-bar'
                role='progressbar' 
                aria-valuemax='100' 
                aria-valuemin='0' 
                aria-aria-valuenow={percentage}
                style={{width: `${percentage}%`}}
            ></div>
        )
    }
  return (
    <div className='skill-item'>
        <div className='skill-info clearfix'>
            <h4 className='mb-3 mt-0'>{name}</h4>
            <span>{percentage}%</span>
        </div>
        <div className='progress'>{ProgressQuery()}</div>
        <p></p>
    </div>
  );
}

export default Skill;

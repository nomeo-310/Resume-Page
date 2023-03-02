import React from 'react'
import TrackVisibility from 'react-on-screen'
import Skill from './Skill'

const Skills = () => {
    const skillData = {
        skill_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vero perspiciatis eveniet id enim? Illum corrupti, numquam quo fugit blanditiis quia dolorem tempore minima sunt quidem ipsa rem dolor aperiam!',
        progressData : [
            {
                id:1,
                name: 'Wordpress',
                percentage: 85
            },
            {
                id:2,
                name: 'HTML & CSS',
                percentage: 90
            },
            {
                id:3,
                name: 'JQuery',
                percentage: 60
            },
            {
                id:4,
                name: 'React',
                percentage: 70
            },
        ]
    }
  return (
    <div className='skills'>
      <p className='mb-0'>{skillData.skill_content}</p>
      <div className='mt-5'>
        <div className='row -mt-50'>
            {skillData.progressData.map((progress) => (
                <div className='col-md-6 mt-50' key={progress.id}>
                    <TrackVisibility>
                        <Skill progress={progress}/>
                    </TrackVisibility>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;

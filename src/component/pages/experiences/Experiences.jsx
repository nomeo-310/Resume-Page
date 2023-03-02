import React from 'react';
import './experiences.scss'
import Experience from './Experience';

const Experiences = () => {
    const experienceData = [
        {
            id: 1,
            year: '2019-Present',
            degree: 'Academic Degree',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero doloremque impedit delectus, atque consectetur maiores omnis nam sunt, alias dolore sequi minima vero quo recusandae fugit aliquid possimus? Laboriosam, molestias ullam. Distinctio vel neque, voluptatum repellendus aspernatur illo ab exercitationem, adipisci a et magnam non voluptas omnis facere corrupti eos unde. Temporibus molestias eos, minima suscipit corrupti, animi amet earum veritatis omnis, odio assumenda nesciunt. Sit dolore, illum possimus quisquam quo distinctio veniam ducimus quos culpa laudantium qui mollitia optio.'
        },
        {
            id: 2,
            year: '2015-2018',
            degree: "Bachelor's Degree",
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero doloremque impedit delectus, atque consectetur maiores omnis nam sunt, alias dolore sequi minima vero quo recusandae fugit aliquid possimus? Laboriosam, molestias ullam. Distinctio vel neque, voluptatum repellendus aspernatur illo ab exercitationem, adipisci a et magnam non voluptas omnis facere corrupti eos unde. Temporibus molestias eos, minima suscipit corrupti, animi amet earum veritatis omnis, odio assumenda nesciunt. Sit dolore, illum possimus quisquam quo distinctio veniam ducimus quos culpa laudantium qui mollitia optio.'
        },
        {
            id: 3,
            year: '2015-2012',
            degree: "Honour's Degree",
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero doloremque impedit delectus, atque consectetur maiores omnis nam sunt, alias dolore sequi minima vero quo recusandae fugit aliquid possimus? Laboriosam, molestias ullam. Distinctio vel neque, voluptatum repellendus aspernatur illo ab exercitationem, adipisci a et magnam non voluptas omnis facere corrupti eos unde. Temporibus molestias eos, minima suscipit corrupti, animi amet earum veritatis omnis, odio assumenda nesciunt. Sit dolore, illum possimus quisquam quo distinctio veniam ducimus quos culpa laudantium qui mollitia optio.'
        },
    ]
  return (
    <div className='experiences'>
        {experienceData.map((experienceInfo) => (
            <Experience experience={experienceInfo} key={experienceInfo.id}/>
        ))}
        <span className='time-line'></span>
    </div>
  );
}

export default Experiences;

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Portfolio from './Portfolio';
import './portfolios.scss';

const Portfolios = () => {
    const filters = [
        {
            id: 1,
            name: 'All Projects'
        },
        {
            id: 2,
            name: 'Branding'
        },
        {
            id: 3,
            name: 'Creative'
        },
        {
            id: 4,
            name: 'Design'
        },
        {
            id: 5,
            name: 'Art'
        },
    ];
    const portfolioData = [
        {
            id: 1,
            name: 'UI Design',
            category: ['design', 'creative'],
            image: require('../../images/portfolio/img_1.jpg'),
            slug: 'ui-design'
        },
        {
            id: 2,
            name: 'Ripped Jeans',
            category: ['branding', 'art'],
            image: require('../../images/portfolio/img_2.jpg'),
            slug: 'ripped-jeans'
        },
        {
            id: 3,
            name: 'Furnished Kitchen',
            category: ['branding', 'design'],
            image: require('../../images/portfolio/img_3.jpg'),
            slug: 'furnished-kitchen'
        },
        {
            id: 4,
            name: 'Minimalistic Studio',
            category: ['art', 'creative'],
            image: require('../../images/portfolio/img_4.jpg'),
            slug: 'minimalistic-studio'
        },
        {
            id: 5,
            name: 'The Work-Station',
            category: ['art', 'creative'],
            image: require('../../images/portfolio/img_5.jpg'),
            slug: 'work-station'
        },
        {
            id: 6,
            name: 'The Common Room',
            category: ['design', 'creative', 'art'],
            image: require('../../images/portfolio/img_6.jpg'),
            slug: 'common-room'
        },
        {
            id: 7,
            name: 'Creamy Cappuchino',
            category: ['branding', 'art'],
            image: require('../../images/portfolio/img_7.jpg'),
            slug: 'creamy-cappuchino'
        },
        {
            id: 8,
            name: 'Greek Breakfast',
            category: ['branding'],
            image: require('../../images/portfolio/img_8.jpg'),
            slug: 'greek-breakfast'
        },
        {
            id: 9,
            name: 'Concept Building',
            category: ['Design', 'Art'],
            image: require('../../images/portfolio/img_9.jpg'),
            slug: 'concept-building'
        },
        {
            id: 10,
            name: 'The Modern House',
            category: ['design', 'branding'],
            image: require('../../images/portfolio/img_10.jpg'),
            slug: 'modern-house'
        },
        {
            id: 11,
            name: 'The Modern Closet',
            category: ['design', 'creative', 'branding'],
            image: require('../../images/portfolio/img_11.jpg'),
            slug: 'modern-closet'
        },
        {
            id: 12,
            name: 'Simple Work-Station',
            category: ['design'],
            image: require('../../images/portfolio/img_12.jpg'),
            slug: 'simple-work-station'
        },
        {
            id: 13,
            name: 'Work Corner',
            category: ['design'],
            image: require('../../images/portfolio/img_13.jpg'),
            slug: 'work-corner'
        },
        {
            id: 14,
            name: 'Table For Two',
            category: ['branding', 'creative'],
            image: require('../../images/portfolio/img_14.jpg'),
            slug: 'table-for-two'
        },
        {
            id: 15,
            name: 'The Steak Out',
            category: ['branding', 'creative'],
            image: require('../../images/portfolio/img_15.jpg'),
            slug: 'steak-out'
        },
        {
            id: 16,
            name: 'Vegetarian Breakfast',
            category: ['design', 'creative', 'branding'],
            image: require('../../images/portfolio/img_16.jpg'),
            slug: 'vegetarian-breakfast'
        },
    ];

    const [getAllItems] = useState(portfolioData);
    const [dataVisibleCount, setDataVisibleCount] = useState(6);
    const [dataIncrement] = useState(3);
    const [activeFilter, setActiveFilter] = useState('');
    const [visibleItems, setVisibleItems] = useState([]);
    const [noMorePost, setNoMorePost] = useState(false);

    useEffect(() => {
        setActiveFilter(filters[0].name.toLowerCase());
        setVisibleItems(getAllItems.filter((item) => item.id <= 6))
    },[getAllItems]);

    const handleChange =(evt)=> {
        console.log(evt.target.value);
        evt.preventDefault();
        let targetFilter = evt.target.value 
            ? evt.target.value.toLowerCase() 
            : evt.target.textContent.toLowerCase();
        setActiveFilter(targetFilter)
        let tempData;
        if (targetFilter === filters[0].name.toLowerCase()) {
            tempData = getAllItems.filter((data) => data.id <= dataVisibleCount)
        } else {
            tempData = getAllItems.filter((data) => {
                return (
                    data.category.includes(targetFilter) && data.id <= dataVisibleCount
                );
            })
        };
        setVisibleItems(tempData);
    };

    const handleLoadMore =(event)=> {
        event.preventDefault();
        let tempCount = dataVisibleCount + dataIncrement;

        if (tempCount > getAllItems.length) {
            setNoMorePost(true)
        } else {
            setDataVisibleCount(tempCount);
            if (activeFilter === filters[0].name.toLowerCase()) {
                setVisibleItems(getAllItems.filter((data) => data.id <= tempCount))
            } else {
                let items = getAllItems.filter((data) => {
                    return data.category.includes(activeFilter) && data.id <= tempCount
                });
                setVisibleItems(items)
            }
        }
    };

  return (
    <div className='portfolios'>
      <ul className='portfolio-filter list-inline'>
        {filters.map((filter) => (
            <li key={filter.id} 
                className={filter.name.toLowerCase() === activeFilter 
                ? 
                'list-inline-item current'
                : 
                'list-inline-item'}
                onClick={handleChange}
            >{filter.name}</li>
        ))}
      </ul>
      <div className='portfolio-filter-wrapper mb-4'>
        <section className='portfolio-filter-mobile' onChange={(evt) => handleChange(evt)}>
            {filters.map((filter) => (
                <option key={filter.id} value={filter.name}>
                    {filter.name}
                </option>
            ))}
        </section>
      </div>
      <div className='portfolio-wrapper row'>
        {visibleItems.map((item) => (
            <div className='col-md-4 col-sm-6 grid-item' key={item.id}>
                <Portfolio portfolio={item}/>
            </div>
        ))}
      </div>
      {noMorePost ? null : (
        <div className='load-more text-center mt-4'>
            <a href="#!" className='btn btn-default' onClick={(event) => handleLoadMore(event)}>
                Load More
            </a>
        </div>
      )}
    </div>
  );
}

export default Portfolios;

import React from 'react'
import { Link } from 'react-scroll';
import Blog from './Blog';
import './blog.scss'

const Blogs = () => {
    const blogData = [
        {
            id: 1,
            title: 'The Truth About Design In 3 Minutes',
            category: 'Thoughts',
            feature_image: require('../../images/blog/blog_1.jpg'),
            author: 'Salomi Afolabi',
            date: '5 March 2023',
            slug: 'the-truth-about-design-in-3-minutes'
        },
        {
            id: 2,
            title: 'The Ugly Truth About Design Components',
            category: 'Blog',
            feature_image: require('../../images/blog/blog_2.jpg'),
            author: 'Salomi Afolabi',
            date: '6 March 2023',
            slug: 'the-ugly-truth-about-design'
        },
        {
            id: 3,
            title: 'How To Become Better With UI Design',
            category: 'Thoughts',
            feature_image: require('../../images/blog/blog.jpg'),
            author: 'Salomi Afolabi',
            date: '8 March 2023',
            slug: 'how-to-become-better-with-ui-design'
        }
    ]
  return (
    <>
        <div className='blogs row'>
        {blogData.map((blogInfo) => (
            <div className='col-md-4' key={blogInfo.id}>
                <Blog blogInfo={blogInfo}/>
            </div>
        ))}
        </div>
        <div className='spacer' data-height='50'></div>
        <div className='text-center'>
            <Link to='/' className='btn btn-default'>Show All Blogs</Link>
        </div>
    </>
  )
}

export default Blogs;

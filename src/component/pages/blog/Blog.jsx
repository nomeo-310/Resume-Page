import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blogInfo: {name, category, feature_image, title, date, author}}) => {
  return (
    <div className='blog'>
      <div className='blog-thumb'>
        <a href="#!">
          <span className='blog-category'>
            {category}
          </span>
        </a>
        <Link to='/'>
          <img src={feature_image} alt={name}/>
        </Link>
      </div>
      <h4 className='mt-4 mb-0'>
        <Link to='/'>{title}</Link>
      </h4>
      <ul className='list-inline meta mb-0 mt-3'>
        <li className='list-inline-item'>{date}</li>
        <li className='list-inline-item'>{author}</li>
      </ul>
    </div>
  );
}

export default Blog;

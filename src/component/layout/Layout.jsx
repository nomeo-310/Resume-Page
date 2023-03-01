import React from 'react'
import Header from '../header/Header';
import { useState } from 'react';
import './layout.scss';

const Layout = ({children}) => {
    const [toggleHeader, setToggleHeader] = useState(false);

    const toggleHandler =()=> {
        setToggleHeader(!toggleHeader);
    }
  return (
    <div className='site-wrapper'>
      <Header toggleHeader={toggleHeader} toggleHandler={toggleHandler}/>
      <main className={toggleHeader ? 'content push' : 'content'}>
        {children}
      </main>
    </div>
  )
}

export default Layout;

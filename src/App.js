import React from 'react';
import './App.scss';
import './css/all.min.css';
import './css/brands.css';
import './css/brands.min.css';
import './css/fontawesome.min.css';
import './material_icons/css/materialdesignicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/home/Home';


const App =() => {
  
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

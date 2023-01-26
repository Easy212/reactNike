
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Menu from './Menu';
import Header from './Header';
import MainIndex from './MainIndex';
import Footer from './Footer';
import Product from './Product';
import Detail from './Detail';
import Review from './Review';
import RevieWrite from './RevieWrite';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
        <Menu/>
        <div className='wrap'>
          <Header/>
          <Routes className="routesWarp">
              <Route exact path='/' element={<MainIndex/>}/>
              <Route path='Product' element={<Product/>}/>
              <Route path='Detail' element={<Detail/>}/>
              <Route path='Review' element={<Review/>}/>
              <Route path='RevieWrite' element={<RevieWrite/>}/>
          </Routes>
        </div>
        <Footer/>
      
    </BrowserRouter>
  );
}

export default App;

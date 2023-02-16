
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Menu from './component/Menu';
import Header from './component/Header';
import MainIndex from './component/MainIndex';
import Footer from './component/Footer';
import Product from './component/Product';
import Detail from './component/Detail';
import Review from './component/Review';
import RevieWrite from './component/RevieWrite';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const wait = () =>{
  alert('페이지를 준비중입니다').preventDefault();
}

function App() {


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Menu wait={wait}/>
        <div className='wrap'>
          <Header wait={wait}/>
          <Routes className="routesWarp">
              <Route exact path='/' element={<MainIndex wait={wait}/>}/>
              <Route path='Product' element={<Product wait={wait}/>}/>
              <Route path='Detail' element={<Detail wait={wait}/>}/>
              <Route path='Review' element={<Review/>}/>
              <Route path='RevieWrite' element={<RevieWrite/>}/>
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

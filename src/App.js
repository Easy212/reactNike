
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
  alert('페이지를 준비중입니다');
}

function App() {
  const reviewList = [
    {id:1, rating:'★★★★★', size:'작음', relax:'편안함', life:'보통', title:'구매후기',
     content:'배송도 빠르구 디자인 사이즈 원단 다만족합니다 주문하실때 반업이나 한사이즈 크게주문하세요 주문하실때 후회안하실듯 하네요', date:'2023.01.15'},
    {id:2, rating:'★★★☆☆', size:'큼', relax:'매우 편안함', life:'내구성 좋음', title:'발볼 넓은 분은 조금 불편할 수 있습니다',
     content:'250 치수 반업해서 255로 구매했어요!! 신으면 앞쪽 엄지손가락 두께만큼 남는거같아요 신다보니 편하고 이뻐요~', date:'2023.01.22'},
    {id:3, rating:'★★★★☆', size:'보통', relax:'매우 편안함', life:'보통', title:'기본에 충실한 기본 스니커즈',
     content:'편안했어요 블레이저 로우 빈티지보다 편안함', date:'2023.01.31'},
    {id:4, rating:'★★★★★', size:'보통', relax:'편안함', life:'보통', title:'선물하려고 주문',
     content:'싼 가격에 좋은 운동화입니다', date:'2023.02.12'},
    {id:5, rating:'★★☆☆☆', size:'보통', relax:'편하지 않음', life:'보통', title:'사진과 똑같아요',
     content:'디자인이 멋스러워 발이 불편해도 참고 신어요 ㅠㅜ', date:'2023.01.20'}

  ]    

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Menu wait={wait}/>
        <div className='wrap'>
          <Header wait={wait}/>
          <Routes className="routesWarp">
              <Route exact path='/' element={<MainIndex wait={wait}/>}/>
              <Route path='Product' element={<Product wait={wait}/>}/>
              <Route path='Detail' element={<Detail wait={wait} reviewList={reviewList}/>}/>
              <Route path='Review' element={<Review reviewList={reviewList}/>}/>
              <Route path='RevieWrite' element={<RevieWrite/>}/>
          </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

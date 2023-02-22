import React from "react";
import styles from '../css/Detail.module.css';
import DetailContent from "./DetailContent";
import DetailImg from "./DetailImg";
import Slide from "./Slide";


function Detail({wait, reviewList}){
  const slideContent =[
    {id:1, img:'https://easy212.github.io/reactNike/images/SK1002_1.png', name:'나이키 SB 줌 블레이저 로우 프로 GT', category:'스케이트보드화', price:'119,000원'},
    {id:2, img:'https://easy212.github.io/reactNike/images/SK1003_1.png', name:'나이키 SB 줌 블레이저 미드 프리미엄', category:'스케이트보드화', price:'199,000원'},
    {id:3, img:'https://easy212.github.io/reactNike/images/SK1004_1.png', name:'나이키 SB 이샤드 웨어 프리미엄', category:'스케이트보드화', price:'69,000원'},
    {id:4, img:'https://easy212.github.io/reactNike/images/SK1005_1.png', name:'나이키 SB 나이자 3', category:'스케이트보드화', price:'179,000원'},
    {id:5, img:'https://easy212.github.io/reactNike/images/SN0805_1.png', name:'나이키코트 에어 줌 베이퍼 프로', category:'남성 하드 코트 테니스화', price:'179,000원'} ,
    {id:6, img:'https://easy212.github.io/reactNike/images/SN0804_1.png', name:'나이키코트 줌 NXT', category:'남성 하드 코트 테니스화', price:'139,000원'},
    {id:7, img:'https://easy212.github.io/reactNike/images/SG0705_1.png', name:'나이키 에어 줌 빅토리 투어 2', category:'남성 하드 코트 테니스화', price:'239,000원'},
    {id:8, img:'https://easy212.github.io/reactNike/images/SG0704_1.png', name:'나이키 에어맥스 90 G', category:'골프화', price:'329,000원'}
  ]

  const detailImg =[
    {id:1, img1:'https://easy212.github.io/reactNike/images/SK1001_1.png', img2:'https://easy212.github.io/reactNike/images/SK1001_2.png',
           img3:'https://easy212.github.io/reactNike/images/SK1001_3.png', img4:'https://easy212.github.io/reactNike/images/SK1001_4.png'},
    {id:2, img1:'https://easy212.github.io/reactNike/images/SK1002_1.png', img2:'https://easy212.github.io/reactNike/images/SK1002_2.png',
           img3:'https://easy212.github.io/reactNike/images/SK1002_3.png', img4:'https://easy212.github.io/reactNike/images/SK1002_4.png'},
    {id:3, img1:'https://easy212.github.io/reactNike/images/SK1003_1.png', img2:'https://easy212.github.io/reactNike/images/SK1003_2.png',
           img3:'https://easy212.github.io/reactNike/images/SK1003_3.png', img4:'https://easy212.github.io/reactNike/images/SK1003_4.png'},
    {id:4, img1:'https://easy212.github.io/reactNike/images/SK1004_1.png', img2:'https://easy212.github.io/reactNike/images/SK1004_2.png',
           img3:'https://easy212.github.io/reactNike/images/SK1004_3.png', img4:'https://easy212.github.io/reactNike/images/SK1004_4.png'},
    {id:5, img1:'https://easy212.github.io/reactNike/images/SK1005_1.png', img2:'https://easy212.github.io/reactNike/images/SK1005_2.png',
           img3:'https://easy212.github.io/reactNike/images/SK1005_3.png', img4:'https://easy212.github.io/reactNike/images/SK1005_4.png'},
    {id:6, img1:'https://easy212.github.io/reactNike/images/SN0801_1.png', img2:'https://easy212.github.io/reactNike/images/SN0801_2.png',
           img3:'https://easy212.github.io/reactNike/images/SN0801_3.png', img4:'https://easy212.github.io/reactNike/images/SN0801_4.png'},
    {id:7, img1:'https://easy212.github.io/reactNike/images/SN0802_1.png', img2:'https://easy212.github.io/reactNike/images/SN0802_2.png',
           img3:'https://easy212.github.io/reactNike/images/SN0802_3.png', img4:'https://easy212.github.io/reactNike/images/SN0802_4.png'},
    {id:8, img1:'https://easy212.github.io/reactNike/images/SN0803_1.png', img2:'https://easy212.github.io/reactNike/images/SN0803_2.png',
           img3:'https://easy212.github.io/reactNike/images/SN0803_3.png', img4:'https://easy212.github.io/reactNike/images/SN0803_4.png'},
    {id:9, img1:'https://easy212.github.io/reactNike/images/SN0804_1.png', img2:'https://easy212.github.io/reactNike/images/SN0804_2.png',
           img3:'https://easy212.github.io/reactNike/images/SN0804_3.png', img4:'https://easy212.github.io/reactNike/images/SN0804_4.png'},
    {id:10, img1:'https://easy212.github.io/reactNike/images/SN0805_1.png', img2:'https://easy212.github.io/reactNike/images/SN0805_2.png',
            img3:'https://easy212.github.io/reactNike/images/SN0805_3.png', img4:'https://easy212.github.io/reactNike/images/SN0805_4.png'},
    {id:11, img1:'https://easy212.github.io/reactNike/images/SJ0501_1.png', img2:'https://easy212.github.io/reactNike/images/SJ0501_2.png',
            img3:'https://easy212.github.io/reactNike/images/SJ0501_3.png', img4:'https://easy212.github.io/reactNike/images/SJ0501_4.png'},
    {id:12, img1:'https://easy212.github.io/reactNike/images/SJ0502_1.png', img2:'https://easy212.github.io/reactNike/images/SJ0502_2.png',
            img3:'https://easy212.github.io/reactNike/images/SJ0502_3.png', img4:'https://easy212.github.io/reactNike/images/SJ0502_4.png'},
    {id:13, img1:'https://easy212.github.io/reactNike/images/SJ0503_1.png', img2:'https://easy212.github.io/reactNike/images/SJ0503_2.png',
            img3:'https://easy212.github.io/reactNike/images/SJ0503_3.png', img4:'https://easy212.github.io/reactNike/images/SJ0503_4.png'},
    {id:14, img1:'https://easy212.github.io/reactNike/images/SJ0504_1.png', img2:'https://easy212.github.io/reactNike/images/SJ0504_2.png',
            img3:'https://easy212.github.io/reactNike/images/SJ0504_3.png', img4:'https://easy212.github.io/reactNike/images/SJ0504_4.png'},
    {id:15, img1:'https://easy212.github.io/reactNike/images/SJ0505_1.png', img2:'https://easy212.github.io/reactNike/images/SJ0505_2.png',
            img3:'https://easy212.github.io/reactNike/images/SJ0505_3.png', img4:'https://easy212.github.io/reactNike/images/SJ0505_4.png'},
    {id:16, img1:'https://easy212.github.io/reactNike/images/ST0301_1.png', img2:'https://easy212.github.io/reactNike/images/ST0301_2.png',
            img3:'https://easy212.github.io/reactNike/images/ST0301_3.png', img4:'https://easy212.github.io/reactNike/images/ST0301_4.png'},
    {id:17, img1:'https://easy212.github.io/reactNike/images/ST0302_1.png', img2:'https://easy212.github.io/reactNike/images/ST0302_2.png',
            img3:'https://easy212.github.io/reactNike/images/ST0302_3.png', img4:'https://easy212.github.io/reactNike/images/ST0302_4.png'},
    {id:18, img1:'https://easy212.github.io/reactNike/images/ST0303_1.png', img2:'https://easy212.github.io/reactNike/images/ST0303_2.png',
            img3:'https://easy212.github.io/reactNike/images/ST0303_3.png', img4:'https://easy212.github.io/reactNike/images/ST0303_4.png'},
    {id:19, img1:'https://easy212.github.io/reactNike/images/ST0304_1.png', img2:'https://easy212.github.io/reactNike/images/ST0304_2.png',
            img3:'https://easy212.github.io/reactNike/images/ST0304_3.png', img4:'https://easy212.github.io/reactNike/images/ST0304_4.png'},
    {id:20, img1:'https://easy212.github.io/reactNike/images/ST0305_1.png', img2:'https://easy212.github.io/reactNike/images/ST0305_2.png',
            img3:'https://easy212.github.io/reactNike/images/ST0305_3.png', img4:'https://easy212.github.io/reactNike/images/ST0305_4.png'}
  ]

    return(
        <section className={styles.wrap}  >
          <div className={styles.dWrap} >
            <DetailImg detailImg={detailImg}/>
            <DetailContent wait={wait} reviewList={reviewList}/>
          </div>
  
          <div className={styles['swiper-container']}>
            <h3 className={styles.recommend}>추천상품</h3>
            <Slide slideContent={slideContent} />
          </div>
        </section>
    )
}
export default Detail
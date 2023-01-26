import React from "react";
import styles from './Detail.module.css';
import Detail_content from "./Detail_content";
import Detail_img from "./Detail_img";
import Slide from "./Slide";


function Detail(){
  const slideContent =[
    {id:1, img:"images/SK1002_1.png", name:'나이키 SB 줌 블레이저 로우 프로 GT', category:'스케이트보드화', price:'119,000원'},
    {id:2, img:'images/SK1003_1.png', name:'나이키 SB 줌 블레이저 미드 프리미엄', category:'스케이트보드화', price:'199,000원'},
    {id:3, img:'images/SK1004_1.png', name:'나이키 SB 이샤드 웨어 프리미엄', category:'스케이트보드화', price:'69,000원'},
    {id:4, img:'images/SK1005_1.png', name:'나이키 SB 나이자 3', category:'스케이트보드화', price:'179,000원'},
    {id:5, img:'images/SN0805_1.png', name:'나이키코트 에어 줌 베이퍼 프로', category:'남성 하드 코트 테니스화', price:'179,000원'} ,
    {id:6, img:'images/SN0804_1.png', name:'나이키코트 줌 NXT', category:'남성 하드 코트 테니스화', price:'139,000원'},
    {id:7, img:'images/SG0705_1.png', name:'나이키 에어 줌 빅토리 투어 2', category:'남성 하드 코트 테니스화', price:'239,000원'},
    {id:8, img:'images/SG0704_1.png', name:'나이키 에어맥스 90 G', category:'골프화', price:'329,000원'}
  ]
    return(
        <section className={styles.wrap}  >
          <div className={styles.dWrap} >
            <Detail_img/>
            <Detail_content/>
          </div>
  
          <div className={styles['swiper-container']}>
            <h3 className={styles.recommend}>추천상품</h3>
            <Slide slideContent={slideContent} />
          </div>
        </section>
    )
}
export default Detail
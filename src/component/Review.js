import React from "react";
import styles from '../css/Review.module.css';
import Review_list from "./Review_list";


function Review(){
    return(
      <div className={styles.rvWraps} >
        <div className={styles.reviewWrap}>
          <div className={styles.reviewTop}>
            <div className={styles.star}> 
              <h2>★★★★★</h2>
            </div>
            <h3>3개의 리뷰</h3>
          </div>
           
          <div className={styles.reviewMid}>
            <div className={styles.reviewSize}>
              <p>사이즈</p>
              <div className={styles.bar1}><span className={styles.point}></span></div>
              <div className={styles.triple}>
                <span>작은</span>
                <span>보통</span>
                <span>큰</span>
              </div>
            </div>
  
            <div className={styles.reviewRelax}>
              <p>편안함</p>
              <div className={styles.bar1}><span className={styles.point}></span></div>
              <div className={styles.triple}>
                <span>편하지 않음</span>
                <span>편안한</span>
                <span>매우편안한</span>
              </div>
            </div>
    
            <div className={styles.reviewLife}>
              <p>내구성</p>
              <div className={styles.bar1}><span className={styles.point}></span></div>
              <div className={styles.triple}>
                <span>내구성 없음</span>
                <span>보통</span>
                <span>내구성 좋음</span>
              </div>
            </div>
          </div>
  
          <div className={styles.reviewBotom}>
            <h3>3개의 리뷰</h3>
            <div className={styles.reviewSort}>
              <div>
                <select name="" id="" >
                  <option value="최신순">최신순</option>
                  <option value="오래된순">오래된순</option>
                  <option value="높은평점순">높은평점순</option>
                  <option value="낮은평점순">낮은평점순</option>
                </select>
              </div>
  
              <div>
                <select name="stars" id="stars">
                  <option value="평점">평점</option>
                  <option value="5">★★★★★</option>
                  <option value="4">★★★★</option>
                  <option value="3">★★★</option>
                  <option value="2">★★</option>
                  <option value="1">★</option>
                </select>
              </div>
            </div>
          </div>
          
        </div>
        <Review_list rating='★★★★★' size='보통' relax='편안함' life='보통' title='구매후기' 
                     content='배송도 빠르구 디자인 사이즈 원단 다만족합니다 주문하실때 반업이나 한사이즈 크게주문하세요
                              주문하실때 후회안하실듯 하네요' date='2023.01.01'/>
        <Review_list rating='★★★★☆' size='큼' relax='편안한' life='내구성 좋음' title='좋아요' 
                     content='250 치수 반업해서 255로 구매했어요!! 신으면 앞쪽 엄지손가락 두께만큼 남는거같아요 신다보니 편하고 이뻐요~' date='2023.01.03'/>
        <Review_list rating='★★★☆☆' size='작음' relax='편안한' life='내구성 좋음' title='작아요' 
                     content='배송도 빠르구 디자인 사이즈 원단 다만족합니다 주문하실때 반업이나 한사이즈 크게주문하세요
                              주문하실때 후회안하실듯 하네요' date='2023.01.09'/>
        <Review_list rating='★★☆☆☆' size='작음' relax='편하지 않은' life='보통' title='구매후기' 
                     content='배송도 빠르구 디자인 사이즈 원단 다만족합니다 주문하실때 반업이나 한사이즈 크게주문하세요
                              주문하실때 후회안하실듯 하네요' date='2023.01.10'/>
        <Review_list/>        
      </div>
    )
}
export default Review
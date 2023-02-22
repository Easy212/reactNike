import React from "react";
import styles from '../css/Review.module.css';
import ReviewList from "./ReviewList";


function Review({reviewList}){

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
        {reviewList.map(review => (
              <ReviewList
                review={review} key={review.id}
              />
              ))}
          
      </div>
    )
}
export default Review
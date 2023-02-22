import React from "react";
import styles from '../css/Review_list.module.css';


function Review_list({review}){
    return(
        <div className={styles.reviewContent}>
            <div className={styles.rvLeft}>
              <div className={styles.lRating}>
                <p>{review.rating}</p>
              </div>

              <div className={styles.lSize}>
                <p>사이즈:</p> <span>{review.size}</span>
                <div className={styles.bar2}><span className={styles.point}></span></div>
              </div>
  
              <div className={styles.Relax}>
                <p>편안함:</p> <span>{review.relax}</span>
                <div className={styles.bar2}><span className={styles.point}></span></div>
              </div>
  
              <div className={styles.lLife}>
                <p>내구성:</p> <span>{review.life}</span>
                <div className={styles.bar2}><span className={styles.point}></span></div>
              </div>
            </div>

            <div className={styles.rvRight}>
              <div className={styles.rvContentWrap}>
                <div className={styles.rvContent}>
                  <h4>{review.title}</h4>
                  <p>
                    {review.content}
                  </p>
                  <p className={styles.rvDate}>{review.date}</p>
                </div>
              </div>
            </div>
        </div>
    )
}
export default Review_list
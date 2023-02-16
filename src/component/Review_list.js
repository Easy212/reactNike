import React from "react";
import styles from '../css/Review_list.module.css';


function Review_list(props){
    return(
        <div className={styles.reviewContent}>
            <div className={styles.rvLeft}>
              <div className={styles.lRating}>
                <p>{props.rating}</p>
              </div>

              <div className={styles.lSize}>
                <p>사이즈:</p> <span>{props.size}</span>
                <div className={styles.bar2}><span className={styles.point}></span></div>
              </div>
  
              <div className={styles.Relax}>
                <p>편안함:</p> <span>{props.relax}</span>
                <div className={styles.bar2}><span className={styles.point}></span></div>
              </div>
  
              <div className={styles.lLife}>
                <p>내구성:</p> <span>{props.life}</span>
                <div className={styles.bar2}><span className={styles.point}></span></div>
              </div>
            </div>

            <div className={styles.rvRight}>
              <div className={styles.rvContentWrap}>
                <div className={styles.rvContent}>
                  <h4>{props.title}</h4>
                  <p>
                    {props.content}
                  </p>
                  <p className={styles.rvDate}>{props.date}</p>
                </div>
              </div>
            </div>
        </div>
    )
}
export default Review_list
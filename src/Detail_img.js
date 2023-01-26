import React from "react";
import styles from './Detail_img.module.css';


function Detail_img(){
    return(
        <div className={styles.detailLeft}>
            <div className={styles.detailWrap}>
                <div className={styles.detailImg}>
                    <img src="images/SK1001_1.png" alt="스케이드보드화"/>
                </div>
                <div className={styles.detailImg}>
                    <img src="images/SK1001_2.png" alt="스케이드보드화"/>
                </div>
                <div className={styles.detailImg}>
                    <img src="images/SK1001_3.png" alt="스케이드보드화"/>
                </div>
                <div className={styles.detailImg}>
                    <img src="images/SK1001_4.png" alt="스케이드보드화"/>
                </div>
            </div>
        </div>
    )
}
export default Detail_img
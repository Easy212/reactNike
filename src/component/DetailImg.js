import React from "react";
import styles from '../css/Detail_img.module.css';


function Detail_img({detailImg}){
    return(
        <div className={styles.detailLeft}>
            <div className={styles.detailWrap}>
                <div className={styles.detailImg}>
                    <img src={detailImg[0].img1} alt="스케이드보드화"/>
                </div>
                <div className={styles.detailImg}>
                    <img src={detailImg[0].img2} alt="스케이드보드화"/>
                </div>
                <div className={styles.detailImg}>
                    <img src={detailImg[0].img3} alt="스케이드보드화"/>
                </div>
                <div className={styles.detailImg}>
                    <img src={detailImg[0].img4} alt="스케이드보드화"/>
                </div>
            </div>
        </div>
    )
}
export default Detail_img
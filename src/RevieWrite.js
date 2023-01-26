import React, {useState}from "react";
import styles from './RevieWrite.module.css';


function RevieWrite(){
    /*const [reviewTitle, setReviewTitle] = useState('')
    const [reviewList, setReviewList] = useState([])
    const addReview = ()=>{
        setReviewList([...reviewList, reviewTitle])
    }*/

    return(
        <div className={styles.wrap}>
            <div className={styles.writeWrap}>
                <div className={styles.writeTitle}>
                    <h2>리뷰작성</h2>
                    <h3>상품에 대한 리뷰를 작성해주세요</h3>
                </div>

                <form onSubmit={e=>{
                    e.preventDefault();
                    const rating = e.target.rating.value;
                    const revText = e.target.revText.value;
                    const revtitle = e.target.revTitle.value;
                    const radioSize = e.target.radioSize.value;
                    const radioRelax = e.target.radioRelax.value;
                    const radioLife = e.target.radioLife.value;
                }}>
                    <div className={styles.writeContent}>
                        <div className={styles.grade}>
                            <div className={styles.gradeT}>
                            <p>평점</p>
                            </div>
                            <div className={styles.gradeC}>
                            <input type="radio" name="rating" value="5" id="rate5"/><label htmlFor="rate5">★</label>
                            <input type="radio" name="rating" value="4" id="rate4"/><label htmlFor="rate4">★</label>
                            <input type="radio" name="rating" value="3" id="rate3"/><label htmlFor="rate3">★</label>
                            <input type="radio" name="rating" value="2" id="rate2"/><label htmlFor="rate2">★</label>
                            <input type="radio" name="rating" value="1" id="rate1"/><label htmlFor="rate1">★</label>
                            </div>
                        </div>
            
                        <div className={styles.review}>
                            <div className={styles.reviewT}>
                            <p>리뷰</p>
                            </div>
                            <div className={styles.reviewC}>
                            <textarea name="revText" id="" cols="30" rows="10" wrap="hard"></textarea>
                            <div className={styles.reviewInfo}>
                                <p>리뷰를 작성해 주세요. 좋았던 점, 안 좋았던 점, 다른 구매자들에게 도움이 될 내용 등(최소 5자)를 작성해 주세요.</p>
                            </div>
                            </div>
                        </div>
            
                        <div className={styles.reviewTitle}>
                            <div className={styles.reviewTitleT}>
                            <p>리뷰제목</p>
                            </div>
                            <div className={styles.reviewTitleC}>
                            <textarea name="revTitle" id="" cols="30" rows="10" wrap="hard" /*value={reviewTitle} onChange={(event)=>setReviewTitle(event.target.value)}*/></textarea>
                            <div className={styles.reviewTitleInfo}>
                                <p>제목을 작성해주세요</p>
                            </div>
                            </div>
                        </div>
            
                        <div className={styles.writeSize}>
                            <div className={styles.writeSizeT}>
                            <p>사이즈</p>
                            </div>
                            <div className={styles.writeSizeC}>
                            <div className={styles.writeSizeR}>
                                <input type="radio" id="radioSize" name="radioSize" value="큰" />
                                <input type="radio" id="radioSize" name="radioSize" value="보통"/>
                                <input type="radio" id="radioSize" name="radioSize" value="작은"/>
                            </div>
                            
                            <div className={styles.radioT}>
                                <span>큰</span><span className={styles.space}>보통</span><span>작은</span>
                            </div>
                            </div>
                        </div>
            
                        <div className={styles.writeRelax}>
                            <div className={styles.writeRelaxT}>
                            <p>편안함</p>
                            </div>
                            <div className={styles.writeRelaxC}>
                            <div className={styles.writeRelaxR}>
                                <input type="radio" id="radioRelax" name="radioRelax" value="편하지 않은"/>
                                <input type="radio" id="radioRelax" name="radioRelax" value="편안한"/>
                                <input type="radio" id="radioRelax" name="radioRelax" value="매우 편안함"/>
                            </div>
                            

                            <div className={styles.radioT}>
                                <span>편하지 않은</span><span>편안한</span><span>매우 편안함</span>
                            </div>
                            </div>
                        </div>
            
                        <div className={styles.writeLife}>
                            <div className={styles.writeLifeT}>
                            <p>내구성</p>
                            </div>
                            <div className={styles.writeLifeC}>
                            <div className={styles.writeLifeR}>
                                <input type="radio" id="radioLife" name="radioLife" value="내구성 없음"/>
                                <input type="radio" id="radioLife" name="radioLife" value="보통"/>
                                <input type="radio" id="radioLife" name="radioLife" value="내구성 좋음"/>
                            </div>
                            
                            <div className={styles.radioT}>
                                <span>내구성 없음</span><span>보통</span><span>내구성 좋음</span>
                            </div>
                            </div>

                            
                        </div>
            
                        <div className={styles.writeImg}>
                            <div className={styles.writeImgT}>
                            <p>사진</p>
                            </div>
                            <div className={styles.writeImgC}>
                            <label htmlFor={styles.imgUpload}>
                                <div className={styles.btnUpload}><span><img src="images/uploadImg.png" alt="사진 업로드 아이콘" className={styles.upIcon}/>사진 추가</span></div>
                            </label>
                            <input type="file" id={styles.imgUpload}/>
                            </div>

                        </div>
            
                        <div className={styles.writeRe}>
                            <div className={styles.writeInfo}>
                            <p>등록을 누르면 개인정보취급방침, 이용약관 그리고 서비스 약관에 동의하는 것으로 간주됩니다.</p>
                            </div>
                            <div className={styles.writeSub}>
                            <input type="submit" value="등록" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RevieWrite
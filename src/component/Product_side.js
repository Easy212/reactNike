import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/Product_side.module.css';
function Product_side({wait}){
    return(
        <div className={styles.category}>
            <div className={styles.category_list}>
              <ul>
                <li><Link onClick={() => wait()} to="#">라이프 스타일</Link></li>
                <li><Link onClick={() => wait()} to="#">조던</Link></li>
                <li><Link onClick={() => wait()} to="#">러닝</Link></li>
                <li><Link onClick={() => wait()} to="#">농구</Link></li>
                <li><Link onClick={() => wait()} to="#">축구</Link></li>
                <li><Link onClick={() => wait()} to="#">트레이닝 및 짐</Link></li>
                <li><Link onClick={() => wait()} to="#">스케이트보딩</Link></li>
                <li><Link onClick={() => wait()} to="#">골프</Link></li>
                <li><Link onClick={() => wait()} to="#">테니스</Link></li>
                <li><Link onClick={() => wait()} to="#">샌들 & 슬리퍼</Link></li>
              </ul>
            </div>

            <div className={`${styles.category_con} ${styles.category_sex}`}>
                <input id={styles.sex_btn} type="checkbox"/>
                <label htmlFor={styles.sex_btn} className={styles.checkLabel}>성별
                  <span className={styles.c_down}><i className='bx bx-chevron-down'></i></span> 
                  <span className={styles.c_up}><i className='bx bx-chevron-up' ></i></span>
                </label>
      
                <form action="#" className={styles.form_sex}>
                  <label><input type="checkbox" name="man" id={styles.man}/>남성</label>
                  <label><input type="checkbox" name="woman" id={styles.woman}/>여성</label>
                  <label><input type="checkbox" name="unisex" id={styles.unisex}/>유니섹스</label>
                </form>
            </div>

          
            <div className={`${styles.category_con} ${styles.category_price}`}>
                <input id={styles.price_btn} type="checkbox"/>
                <label htmlFor={styles.price_btn} className={styles.checkLabel}>가격
                  <span className={styles.c_down}><i className='bx bx-chevron-down'></i></span> 
                  <span className={styles.c_up}><i className='bx bx-chevron-up' ></i></span>
                </label>
                <form action="#" className={styles.form_price}>
                  <label><input type="checkbox" name="50000under" id="50000under"/>0 - 50,000원</label>
                  <label><input type="checkbox" name="100000under" id="100000under"/>50,000 - 100,000원</label>
                  <label><input type="checkbox" name="150000under" id="150000under"/>100,000 - 150,000원</label>
                </form>
            </div>

            <div className={`${styles.category_con} ${styles.category_color}`}>
                <input id={styles.color_btn} type="checkbox"/>
                <label htmlFor={styles.color_btn} className={styles.checkLabel}>색상
                  <span className={styles.c_down}><i className='bx bx-chevron-down'></i></span> 
                  <span className={styles.c_up}><i className='bx bx-chevron-up' ></i></span>
                </label>
                <form action="#" className={styles.form_color}>
                  <label><input type="checkbox" name="black" id="black"/>블랙</label>
                  <label><input type="checkbox" name="blue" id="blue"/>블루</label>
                  <label><input type="checkbox" name="brown" id="brown"/>브라운</label>
                  <label><input type="checkbox" name="grey" id="grey"/>그레이</label>
                  <label><input type="checkbox" name="red" id="red"/>레드</label>
                  <label><input type="checkbox" name="white" id="white"/>화이트</label>
                </form>
            </div>

            <div className={`${styles.category_con} ${styles.category_brand}`}>
                <input id={styles.brand_btn} type="checkbox"/>
                <label htmlFor={styles.brand_btn} className={styles.checkLabel}>브랜드
                  <span className={styles.c_down}><i className='bx bx-chevron-down'></i></span> 
                  <span className={styles.c_up}><i className='bx bx-chevron-up' ></i></span>
                </label>
                <form action="#" className={styles.form_brand}>
                  <label><input type="checkbox" name="nikeSport" id="nikeSport"/>나이키 스포츠웨어</label>
                  <label><input type="checkbox" name="NikeLab" id="NikeLab"/>NikeLab</label>
                  <label><input type="checkbox" name="jordan" id="jordan"/>조던</label>
                  <label><input type="checkbox" name="ACG" id="ACG"/>ACG</label>
                </form>
            </div>

            <div className={`${styles.category_con} ${styles.category_shoesHeight}`}>
                <input id={styles.shoesHeight_btn} type="checkbox"/>
                <label htmlFor={styles.shoesHeight_btn} className={styles.checkLabel}>신발높이
                  <span className={styles.c_down}><i className='bx bx-chevron-down'></i></span> 
                  <span className={styles.c_up}><i className='bx bx-chevron-up' ></i></span>
                </label>
              <form action="#" className={styles.form_shoesHeight}>
                <label><input type="checkbox" name="lowTop" id="lowTop"/>로우 탑</label>
                <label><input type="checkbox" name="midTop" id="midTop"/>미드 탑</label>
                <label><input type="checkbox" name="heighTop" id="heighTop"/>하이 탑</label>
              </form>
            </div>

            <div className={`${styles.category_con} ${styles.category_sport}`}>
                <input id={styles.sport_btn} type="checkbox"/>
                <label htmlFor={styles.sport_btn} className={styles.checkLabel}>스포츠
                  <span className={styles.c_down}><i className='bx bx-chevron-down'></i></span> 
                  <span className={styles.c_up}><i className='bx bx-chevron-up' ></i></span>
                </label>
                <form action="#" className={styles.form_sport}>
                  <label><input type="checkbox" name="lifeStyle" id="lifeStyle"/>라이프스타일</label>
                  <label><input type="checkbox" name="training" id="training"/>트레이닝 및 짐</label>
                  <label><input type="checkbox" name="skate" id="skate"/>스케이트 보딩</label>
                </form>
            </div>
        </div>
    )
}



export default Product_side
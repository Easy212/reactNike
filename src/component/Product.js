import React from "react"
import styles from '../css/Product.module.css';
import Product_list from "./Product_list"
import Product_side from "./Product_side"



function Product({wait}){

    return(
    <section>   
        <div className={styles.wrap}>

          <div className={styles.header}>
            <div className={styles.title}>
              <div className={styles.main_title}>남성 신발 <span></span></div>
            </div>
          </div>
          
          <div className={styles.product_con}>
            <Product_side wait={wait}/>
            <div className={styles.product_list}>
              <Product_list link='/Detail' img='https://easy212.github.io/reactNike/images/SK1001_1.png' name='나이키 BRSB' category='스케이트보드화' price='99,000원'/>
              <Product_list link='' img='https://easy212.github.io/reactNike/images/SK1002_1.png' name='나이키 SB 줌 블레이저 로우 프로 GT' category='스케이트보드화' price='99,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SK1003_1.png' name='나이키 SB 줌 블레이저 미드 프리미엄' category='스케이트보드화' price='119,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SK1004_1.png' name='나이키 SB 이샤드 웨어 프리미엄' category='스케이트보드화' price='129,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SK1005_1.png' name='나이키 SB 나이자 3' category='스케이트보드화' price='119,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SN0801_1.png' name='나이키코트 리액트 베이퍼 NXT' category='남성 하드 코트 테니스화' price='239,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SN0802_1.png' name='나이키코트 줌 라이트 3' category='남성 하드 코트 테니스화' price='79,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SN0803_1.png' name='나이키코트 줌 베이퍼 케이지 4 라파' category='남성 하드 코트 테니스화' price='179,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SN0804_1.png' name='나이키코트 줌 NXT' category='남성 하드 코트 테니스화' price='169,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SN0805_1.png' name='나이키코트 에어 줌 베이퍼 프로' category='남성 하드 코트 테니스화' price='139,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SJ0501_1.png' name='조던 누 레트로 1 로우' category='남성 신발' price='179,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SJ0502_1.png' name='조던 시리즈 미드' category='남성 신발' price='11,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SJ0503_1.png' name='에어 조던 1 미드 SE 크래프트' category='남성 신발' price='159,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SJ0504_1.png' name='조던 시리즈 .06' category='남성 신발' price='99,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/SJ0505_1.png' name='조던 에어 200E SP' category='남성 신발' price='179,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/ST0301_1.png' name='나이키 프리 메트콘 4' category='트레이닝화' price='139,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/ST0302_1.png' name='나이키 에어맥스 알파 트레이너 5' category='남성 트레이닝화' price='99,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/ST0303_1.png' name='나이키 디파이 올 데이' category='남성 트레이닝화' price='79,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/ST0304_1.png' name='나이키 슈퍼램 고 3 넥스트 네이처 플라이니트' category='남성 트레이닝화' price='119,000원'/>
              <Product_list onClick={() => wait()} link='' img='https://easy212.github.io/reactNike/images/ST0305_1.png' name='나이키 줌 메트콘 터보 2' category='남성 트레이닝화' price='119,000원'/>
            </div>
          </div>
        </div>
    </section>
    )
    
}

export default Product
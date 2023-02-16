import React from "react";
import { Link } from "react-router-dom";
import styles from '../css/MainIndex.module.css';
import Slide from "./Slide";


function MainIndex({wait}){
  const slideContent =[
    {id:1, img:"https://easy212.github.io/reactNike/images/shoes-01.png", name:'나이키 데이브레이크', category:'여성신발 라이프스타일', price:'119,000원'},
    {id:2, img:'https://easy212.github.io/reactNike/images/shoes-02.png', name:'나이키 에어맥스 97', category:'남성신발 라이프스타일', price:'199,000원'},
    {id:3, img:'https://easy212.github.io/reactNike/images/shoes-03.png', name:'나이키 코드 레거시', category:'여성 뮬', price:'69,000원'},
    {id:4, img:'https://easy212.github.io/reactNike/images/shoes-04.png', name:'나이키 리액트 인피니티 런 플라이니트 2', category:'여성신발 러닝', price:'179,000원'},
    {id:5, img:'https://easy212.github.io/reactNike/images/shoes-05.png', name:'나이키 코믹스 유니티', category:'성인공용 신발 농구', price:'179,000원'} ,
    {id:6, img:'https://easy212.github.io/reactNike/images/shoes-06.png', name:'나이키 에어 줌 빅토리 투어 2', category:'성인공용 신발 골프', price:'239,000원'},
    {id:7, img:'https://easy212.github.io/reactNike/images/shoes-07.png', name:'나이키 에어 줌 슈퍼랩 2', category:'남성 신발 트레이닝', price:'139,000원'},
    {id:8, img:'https://easy212.github.io/reactNike/images/shoes-08.png', name:'나이키 머큐리얼 드림 스피드 슈퍼플라이', category:'성인공용 신발 축구', price:'329,000원'}
  ]
    return(
    <section>
      <article className={styles.main_visual}>
        <div className={styles.main_img}>
          <img src="https://easy212.github.io/reactNike/images/M-01.png" alt="크레이터 임펙트 이미지"/>
        </div>
        <div className={styles.main_text}>
          <h2 className={styles.title_01}>크레이터 임펙트</h2>
          <p className={styles.title_01_text}>더 가벼워진 탄소 발자국에 볼드한 이미지까지 더한 나이키 크레이터 임펙트-<br/>
            나이키 멤버가 되어 가장 먼저 만나보세요</p>
          <p className={styles.title_01_text}>제로 탄소와 제로 폐기물을 목표로 미래를 보호하기 위한<br/>
            나이키의 여정과 멤버만을 위한 특별한 혜택도 확인해 보세요</p>
          <div className={styles.btn_area}>
            <Link onClick={() => wait()} className={styles.btn_01}>구매하기</Link>
            <Link onClick={() => wait()} className={styles.btn_01}>자세히보기</Link>
          </div>
        </div>
      </article>

      <article className={styles.main_visual}>
        <div className={styles.main_img}>
          <img src="https://easy212.github.io/reactNike/images/M-02.png" alt="나이키 에어 베이퍼맥스 이미지"/>
        </div>
        <div className={styles.main_text}>
          <h2 className={styles.title_01}>나이키 에어 베이퍼맥스 EVO</h2>
          <p className={styles.title_01_text}>클래식한 에어맥스 시리즈를 리믹스하여<br/>
            더울 볼드해진 나이키 에어 베이퍼맥스 EVO를 만나보세요</p>
          <div className={styles.btn_area}>
            <Link onClick={() => wait()} className={styles.btn_01}>구매하기</Link>
          </div>
        </div>
      </article>

      <article className={styles.main_visual}>
        <div className={styles.main_img}>
          <img src="https://easy212.github.io/reactNike/images/M-03.png" alt="나이키 에어맥스 비바 이미지"/>
        </div>
        <div className={styles.main_text}>
          <h2 className={styles.title_01}>나이키 에어퍼맥스 비바</h2>
          <p className={styles.title_01_text}>맥스 에어 유닛과 아이코닉한 디자인의 비바와 함께<br/>
            시선을 압도하는 세련된 스타일을 연출해보세요</p>
          <div className={styles.btn_area}>
            <Link onClick={() => wait()} className={styles.btn_01}>구매하기</Link>
          </div>
        </div>
      </article>

      <article className={styles.content}>
        <h3 className={styles.content_title}>이번주 스타일링</h3>
        <div className={styles.content_img_wrap}>
          <div className={styles.content_img}>
            <div className={styles.main_img}>
              <img src="https://easy212.github.io/reactNike/images/style-01.png" alt="스프링키즈재킷남아"/>
            </div>
            <div className={styles.main_img}>
              <img src="https://easy212.github.io/reactNike/images/style-02.png" alt="스프링키즈재킷"/>
            </div>
            <div className={styles.main_img}>
              <img src="https://easy212.github.io/reactNike/images/style-03.png" alt="스프링키즈재킷"/>
            </div>
          </div>
        </div>
        <div className={styles.main_text}>
          <h2 className={styles.title_01}>스프링 키즈 재킷 스타일</h2>
          <p className={styles.title_01_text}>봄 시즌을 위한 키즈 재킷 제품과 함께 산뜻한 스타일을 완성해보세요</p>
          <div className={styles.btn_area}>
            <Link onClick={() => wait()} className={styles.btn_01}>구매하기</Link>
            <Link onClick={() => wait()} className={styles.btn_01}>더 많은 스타일링 보기</Link>
          </div>
        </div>
      </article>

      <article className={styles.content}>
        <h3 className={styles.content_title}>Trending Now</h3>
        <div className={styles.content_img}>
          <div className={styles.trend_img}>
            <img src="https://easy212.github.io/reactNike/images/trend-01.png" alt="trend"/>
            <div className={styles.trend_text}>
              <h3 className={`${styles.content_title} ${styles.c_white}`}>월드투어 컬렉션</h3>
              <div className={styles.btn_area}>
                <Link onClick={() => wait()} className={`${styles.btn_01} ${styles.b_white}`}>구매하기</Link>
              </div>
            </div>
          </div>
          <div className={styles.trend_img}>
            <img src="https://easy212.github.io/reactNike/images/trend-02.png" alt="trend"/>
            <div className={styles.trend_text}>
              <h3 className={`${styles.content_title} ${styles.c_white}`}>에어조틱 컬렉션</h3>
              <div className={styles.btn_area}>
                <Link onClick={() => wait()} className={`${styles.btn_01} ${styles.b_white}`}>구매하기</Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <article className={styles.content}>
        <h3 className={styles.content_title}>Featured Shoes</h3>
        <Slide slideContent={slideContent}/>
      </article>

      
        
    </section>
    )
}

export default MainIndex
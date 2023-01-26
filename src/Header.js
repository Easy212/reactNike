import React from "react"
import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header(){
  return (
    <header>
      <div className={styles.sub_bg}></div>
      <Link to="/">
        <h1 className={styles.logo}>
          <img src={process.env.PUBLIC_URL+'/images/NIKE-LOGO.svg'} alt="나이키로고"/>
        </h1>
      </Link>
      <nav  className={styles.backHover}>
        <ul className={styles.main_menu}>
          <li>
            <Link to="" className={styles.menu_a}>New Releases</Link>
            <ul className={styles['sub-menu']}>
              <li><Link to="#">New/Featured</Link></li>
              <li><Link to="#">New for Man</Link></li>
              <li><Link to="#">New for Women</Link></li>
              <li><Link to="#">New for Kids</Link></li>
            </ul>
          </li>
    
          <li>
            <Link to="# "className={styles.menu_a}>Men</Link>
            <ul className={styles['sub-menu']}>
              <li><Link to="#">New/Featured</Link></li>
              <li><Link to="/Product">신발</Link></li>
              <li><Link to="#">의류</Link></li>
              <li><Link to="#">스포츠</Link></li>
              <li><Link to="#">브랜드</Link></li>
            </ul>
          </li>
    
          <li>
            <Link to="#" className={styles.menu_a}>Woman</Link>
            <ul className={styles['sub-menu']}>
              <li><Link to="#">New/Featured</Link></li>
              <li><Link to="#">신발</Link></li>
              <li><Link to="#">의류</Link></li>
              <li><Link to="#">스포츠</Link></li>
              <li><Link to="#">브랜드</Link></li>
              <li><Link to="#">용품</Link></li>
            </ul>
          </li>
    
          <li>
            <Link to="# " className={styles.menu_a}>Kids</Link>
            <ul className={styles['sub-menu']}>
              <li><Link to="#">New/Featured</Link></li>
              <li><Link to="#">신발</Link></li>
              <li><Link to="#">의류</Link></li>
              <li><Link to="#">스포츠</Link></li>
            </ul>
          </li>
    
          <li>
            <Link to="#" className={styles.menu_a}>Sale</Link>
            <ul className={styles['sub-menu']}>
              <li><Link to="#">New to Sale</Link></li>
              <li><Link to="#">Mens Sale</Link></li>
              <li><Link to="#">Womens Sale</Link></li>
              <li><Link to="#">Kids Sale</Link></li>
            </ul>
          </li>
    
          <li><Link to="#" className={styles.menu_a}>SNKRS</Link></li>
        </ul>
      </nav>
  
      <div className={styles['icon-menu']}>
        <ul>
          <li className={styles.search_box}>
            <Link to="#">
              <div className={styles.search_con}>
                <img src={process.env.PUBLIC_URL+'/images/search.svg'} alt="찾기 아이콘"/>
                <form action="#">
                  <input type="text" name="search" id={styles.search} placeholder="검색"/>
                </form>
              </div>
            </Link>
          </li>
          <li className={styles['heart-btn']}><Link to="#"><img src={process.env.PUBLIC_URL+'/images/heart.svg'} alt="즐겨찾기 아이콘"/></Link></li>
          <li><Link to="#"><img src={process.env.PUBLIC_URL+'/images/shopping-bag.svg'} alt="장바구니 아이콘"/></Link></li>
          <li className={styles['menu-btn']}><Link to="#"><img src={process.env.PUBLIC_URL+'/images/menu.svg'} alt="메뉴 아이콘"/></Link></li>
        </ul>
      </div>
      <div className={styles.backColor}></div>
   </header>
  )
}

export default Header;
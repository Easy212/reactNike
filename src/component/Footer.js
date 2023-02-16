import React from "react";
import styles from '../css/Footer.module.css';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className={styles['f-top']}>
            <ul className={styles['f-mobile']}>
                <li><Link to="#">주문배송</Link></li>
                <li><Link to="#">매장안내</Link></li>
                <li><Link to="#">고객센터</Link></li>
            </ul>
            <ul className={styles['f-menu']}>
                <li><Link to="#">매장안내</Link></li>
                <li><Link to="#">나이키 트레이닝 가이드</Link></li>
                <li><Link to="#">로그인</Link></li>
                <li><Link to="#">멤버가입</Link></li>
            </ul>
            <ul className={styles['f-menu']}>
                <li><Link to="#">고객센터</Link></li>
                <ul className={styles['f-sub']}>
                <li><Link to="#">080-022-0182</Link></li>
                <li><Link to="#">주문결제</Link></li>
                <li><Link to="#">배송</Link></li>
                <li><Link to="#">주문배송조회</Link></li>
                <li><Link to="#">멤버쉽 혜택/서비스</Link></li>
                <li><Link to="#">1:1 채팅 문의</Link></li>
                <li><Link to="#">1:1 이메일 문의</Link></li>
                <li><Link to="#">이용약관</Link></li>
                <li><Link to="#">개인정보처리방침</Link></li>
                </ul>
            </ul>
            <ul className={styles['f-menu']}>
                <li><Link to="#">ABOUT NIKE</Link></li>
                <ul className={styles['f-sub']}>
                <li><Link to="#">나이키에 대하여</Link></li>
                </ul>
            </ul>
            <ul className={`${styles['f-menu']} ${styles.social}`}>
                <li><Link to="#">SOCIAL</Link></li>
                <ul className={styles['f-sub']}>

                <li><Link to="#"><i className="xi-twitter"></i></Link></li>
                <li><Link to="#"><i className="xi-facebook"></i></Link></li>
                <li><Link to="#"><i className="xi-youtube"></i></Link></li>
                <li><Link to="#"><i className="xi-instagram"></i></Link></li>
                </ul>
            </ul>
            </div>

            <div className={styles['f-line']}>

            </div>

            <div className={styles['f-bottom']}>
                <ul>
                    <li><Link to="#">이용약관</Link></li>
                    <li><Link to="#">개인정보처리방침</Link></li>
                </ul>
                <div className={styles['f-info']}>
                
                    <p>(유)나이키코리아 대표 KIM MYUNG HEE<br/>
                    서울 강남구 테헤란로 152 강남파이낸스센터 31층<br/>
                    통신판매업신고번호 2011-서울강남-03461<br/>
                    등록번호 220-88-09068 사업자정보확인<br/>
                    고객센터 전화문의 080-022-0128<br/>
                    FAX 02-6744-5880 E-mail service@nike.co.kr<br/>
                    호스팅서비스사업자 브리즈
                    </p>
                    <div className={styles['inipay']}>
                    <p>안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한<br/>
                        KG 이니시스의 구매안전 서비스(채무지급보증)를 이용하실 수 있습니다.
                    </p>
                    <p>온라인디지털콘텐츠사업발전법에 의한
                        <Link to="#">콘텐츠보호안내 자세히보기</Link>
                        <img src="images/inipay.png" alt="inipay"/>
                    </p>
                    </div>
                </div>
                <p><i className="xi-maker"></i>대한민국 &copy; 2021 Nike, Inc. All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer
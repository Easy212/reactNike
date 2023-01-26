import React from "react";
import { Link } from "react-router-dom";
import styles from "./Detail_content.module.css"; 


function Detail_content(){


    return(
        <div className={styles.detailRight}>
              <div className={styles.detailTitle}>
                <h2>나이키 BRSB</h2>
                <h3>스케이트보드화</h3>
                <p>99,000 원</p>
              </div>
              <div className={styles.detailSize}>
                <form action="">
                  <table className={styles.size}>
                    <thead>
                      <tr>
                       <th colSpan="5"><span>사이즈 선택</span></th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td><input type="radio" id="selSize1" disabled className={styles.selSize} name="selSize" value="230" /><label htmlFor="selSize1">230</label></td>
                      <td><input type="radio" id="selSize2" className={styles.selSize} name="selSize" value="235" /><label htmlFor="selSize2">235</label></td>
                      <td><input type="radio" id="selSize3" className={styles.selSize} name="selSize" value="240" /><label htmlFor="selSize3">240</label></td>
                      <td><input type="radio" id="selSize4" className={styles.selSize} name="selSize" value="245" /><label htmlFor="selSize4">245</label></td>
                      <td><input type="radio" id="selSize5" className={styles.selSize} name="selSize" value="250" /><label htmlFor="selSize5">250</label></td>
                    </tr>

                    <tr>
                      <td><input type="radio" id="selSize6" className={styles.selSize} name="selSize" value="255" /><label htmlFor="selSize6">255</label></td>
                      <td><input type="radio" id="selSize7" className={styles.selSize} name="selSize" value="260" /><label htmlFor="selSize7">260</label></td>
                      <td><input type="radio" id="selSize8" className={styles.selSize} name="selSize" value="265" /><label htmlFor="selSize8">265</label></td>
                      <td><input type="radio" id="selSize9" className={styles.selSize} name="selSize" value="270" /><label htmlFor="selSize9">270</label></td>
                      <td><input type="radio" id="selSize10" className={styles.selSize} name="selSize" value="275" /><label htmlFor="selSize10">275</label></td>
                    </tr>

                    <tr>
                      <td><input type="radio" id="selSize11" className={styles.selSize} name="selSize" value="280" /><label htmlFor="selSize11">280</label></td>
                      <td><input type="radio" id="selSize12" className={styles.selSize} name="selSize" value="285" /><label htmlFor="selSize12">285</label></td>
                      <td><input type="radio" id="selSize13" className={styles.selSize} name="selSize" value="290" /><label htmlFor="selSize13">290</label></td>
                      <td><input type="radio" id="selSize14" className={styles.selSize} name="selSize" value="295" /><label htmlFor="selSize14">295</label></td>
                      <td><input type="radio" id="selSize15" className={styles.selSize} name="selSize" value="300" /><label htmlFor="selSize15">300</label></td>
                    </tr>
                    </tbody>
                  </table>
              </form>
             
              </div>
              <div className={styles.shoppingBasket}>
                <button>장바구니</button>
              </div>
              <div className={styles.wish}>
                <button>위시리스트<img src="images/heart.svg" alt="위시리스트 아이콘"/></button>
              </div>
              <div className={styles.detailInfo}>
                <p>친숙한 인기 아이템이 나이키 BRSB로 재탄생했습니다. 
                  컬러 블로킹부터 바닥의 톱니 패턴에 이르기까지 거의 모든 디테일에서 
                  오리지널 나이키 코르테즈에서 받은 영감을 엿볼 수 있습니다. 
                  스케이트보딩용으로 제작된 신발이기에 뒤꿈치와 발끝을 감싸는 
                  밑창의 고무 등 가장 필요한 곳에 추가적인 요소를 더해 내구성이 우수합니다. 
                  또한, 알리 존과 같이 마모되기 쉬운 부위에 추가 레이어를 덧대 측면을 감쌌습니다.
                </p>
              </div>
              <div className={styles.delivery}>
                <input id={styles.deliveryBtn} type="checkbox"/>
                <label htmlFor={styles.deliveryBtn} className={styles.chLabel}>무료 배송 및 반품
                  <span className={styles.down}><i className='bx bxs-chevron-down'></i></span> 
                  <span className={styles.up}><i className='bx bxs-chevron-up' ></i></span>
                </label>
               
                <div className={styles.deliveryOpen}>
                    <p> 일반 배송 <br/><br/>
  
                      • 배송지역: 전국 (일부 지역 제외)<br/><br/>
                      
                      • 배송비: 무료배송<br/><br/>
                      
                      • 제품 수령일로부터 14일 이내 제품에 대해서만 무료 반품 서비스가 가능합니다.<br/><br/><br/>
                      
                      
                      오늘도착 서비스<br/><br/>
                      
                      • 이용시간: 낮 12시까지 결제 시, 당일 도착 (일요일, 공휴일 제외)<br/><br/>
                      
                      • 서비스지역: 서울∙과천∙의왕∙군포∙수원∙성남∙안양시 전체, 용인시 수지구∙기흥구, 부천시 중동∙상동∙심곡동<br/><br/>
                      
                      • 서비스비용: 5,000원<br/><br/><br/>
                    
                      
                      A/S 안내 <br/><br/>
                      
                      • 나이키 온라인에서 구매하신 제품에 대한 A/S 는 나이키코리아 고객센터(080-022-0182)에서 유선으로만 접수 가능합니다.
                    </p>
                </div>

              </div>
              
              <div className={styles.reviews}>
                <input id={styles.reviewBtn} type="checkbox"/>
                <label htmlFor={styles.reviewBtn} className={styles.chLabel}>리뷰
                  <span className={styles.down}><i className='bx bxs-chevron-down'></i></span> 
                  <span className={styles.up}><i className='bx bxs-chevron-up'></i></span>
                </label>
                
                <div className={styles.reviewOpen}>
                  <div className={styles.reviewOpenCon}>
                    <h4>구매후기</h4>
                    <span className={styles.rStar}>★★★★★</span> <span className={styles.rId}>ididid</span> <span className={styles.rDate}>2012년01월01일</span>
                    <p>
                      다만족합니다
                      주문하실때 반업이나 한사이즈 크게주문하세요
                      주문하실때 후회안하실듯 하네요
                    </p>
                  </div>
                  <p><Link to="/RevieWrite">리뷰 작성하기</Link></p>
                  <p><Link to="/Review">리뷰 더보기</Link></p>
                </div>
              </div>
  
              <div className={styles.addInfo}>
                <input id={styles.addInfoBtn} type="checkbox"/>
                <label htmlFor={styles.addInfoBtn} className={styles.chLabel}>추가정보
                  <span className={styles.down}><i className='bx bxs-chevron-down'></i></span> 
                  <span className={styles.up}><i className='bx bxs-chevron-up' ></i></span>
                </label>
                <div className={styles.addInfoOpen}>
                  <p>
                    상품정보제공고시<br/><br/>
  
                    • 제조연월: 수입제품으로 각 상품별 입고 시기에 따라 상이하여 정확한 제조연월 제공이 어렵습니다. 제조연월을 확인하시려면 고객센터에 문의하시기 바라며, 정확한 제조연월은 배송받으신 제품의 라벨을 참고하시기 바랍니다.<br/><br/>
                    • A/S 책임자와 전화번호: (유)나이키코리아 온라인 스토어 고객센터 / 080-022-0182<br/><br/>
                    • 품질보증기준: 품질보증기간-섬유 및 일반 소재(구입 후 6개월), 가죽소재(구입 후 1년). 유통 중 손상되었거나 품질에 이상이 있는 제품에 한하여 소비자 피해 보상 규정에 의거 보상하여 드립니다. 단, 제품에 부착되어 있는 사용방법 및 취급 시 주의사항에 따라 제품을 관리해 주시고, 소비자 부주의로 인한 품질 이상 및 변형에 대해서는 책임을 지지 않습니다.<br/><br/>
                    • 제조자/수입품의 경우 수입자를 함께 표기: Nike. Inc / (유)나이키코리아
                  </p>
                </div>
              </div>
            </div>
    )
}
export default Detail_content
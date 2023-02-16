import React from "react"
import { Link } from "react-router-dom"
import './Product.css'
import ProductMenu from "./ProductMenu"

function Product(){
  const PoductContent =[
    {id:1, img:"images/SK1001_1.png", name:'나이키 BRSB', category:'스케이트보드화', price:'99,000원'},
    {id:2, img:'images/SK1002_1.png', name:'나이키 SB 줌 블레이저 로우 프로 GT', category:'스케이트보드화', price:'99,000원'},
    {id:3, img:'images/SK1003_1.png', name:'나이키 SB 줌 블레이저 미드 프리미엄', category:'스케이트보드화', price:'119,000원'},
    {id:4, img:'images/SK1004_1.png', name:'나이키 SB 이샤드 웨어 프리미엄', category:'스케이트보드화', price:'129,000원'},
    {id:5, img:'images/SK1005_1.png', name:'나이키 SB 나이자 3', category:'스케이트보드화', price:'119,000원'} ,
    {id:6, img:'images/SN0801_1.png', name:'나이키코트 리액트 베이퍼 NXT', category:'남성 하드 코트 테니스화', price:'239,000원'},
    {id:7, img:'images/SN0802_1.png', name:'나이키코트 줌 라이트 3', category:'남성 하드 코트 테니스화', price:'79,000원'},
    {id:8, img:'images/SN0803_1.png', name:'나이키코트 줌 베이퍼 케이지 4 라파', category:'남성 하드 코트 테니스화', price:'179,000원'},
    {id:9, img:'images/SN0804_1.png', name:'나이키코트 줌 NXT', category:'남성 하드 코트 테니스화', price:'169,000원'},
    {id:10, img:'images/SN0805_1.png', name:'나이키코트 에어 줌 베이퍼 프로', category:'남성 하드 코트 테니스화', price:'139,000원'},
    {id:11, img:'images/SJ0501_1.png', name:'조던 누 레트로 1 로우', category:'남성 하드 코트 테니스화', price:'179,000원'},
    {id:12, img:'images/SJ0502_1.png', name:'조던 시리즈 미드', category:'남성 신발', price:'119,000원'},
    {id:13, img:'images/SJ0503_1.png', name:'에어 조던 1 미드 SE 크래프트', category:'남성 신발', price:'159,000원'},
    {id:14, img:'images/SJ0504_1.png', name:'조던 시리즈 .06', category:'남성 신발', price:'99,000원'},
    {id:15, img:'images/SJ0505_1.png', name:'조던 에어 200E SP', category:'남성 신발', price:'179,000원'},
    {id:16, img:'images/ST0301_1.png', name:'나이키 프리 메트콘 4', category:'트레이닝화', price:'139,000원'},
    {id:17, img:'images/ST0302_1.png', name:'나이키 에어맥스 알파 트레이너 5', category:'남성 트레이닝화', price:'99,000원'},
    {id:18, img:'images/ST0303_1.png', name:'나이키 디파이 올 데이', category:'남성 트레이닝화', price:'79,000원'},
    {id:18, img:'images/ST0304_1.png', name:'나이키 슈퍼램 고 3 넥스트 네이처 플라이니트', category:'남성 트레이닝화', price:'119,000원'},
    {id:18, img:'images/ST0305_1.png', name:'나이키 줌 메트콘 터보 2', category:'남성 트레이닝화', price:'119,000원'}
  ]
    return(
    <section>
        <div className="wrap">
          <div className="header">
            <div className="title">
              <div className="sub_title"><span>의류</span> / <span>남성 탑& 티셔츠</span></div>
              <div className="main_title">남성 탑 & 티셔츠 <span>(352)</span></div>
            </div>
            <div className="btn_con">
              <div className="filter">
                <span>필터 숨기기</span>
                <i className='bx bx-slider'></i>
              </div>
              <div className="desc">
                <span>정렬 기준 : <p></p></span>
                <i className='bx bx-chevron-down'></i>
                <div className="desc_list hidden">
                  <ul>
                    <li><a href="#">추천순</a></li>
                    <li><a href="#">최신순</a></li>
                    <li><a href="#">높은 가격순</a></li>
                    <li><a href="#">낮은 가격순</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="product_con">
            <div className="category">
              <div className="category_list">
                <ul>
                  <li><a href="#">그래픽 티셔츠</a></li>
                  <li><a href="#">롱슬리브</a></li>
                  <li><a href="#">숏슬리브</a></li>
                  <li><a href="#">민소매 & 탱크탑</a></li>
                  <li><a href="#">폴로</a></li>
                  <li><a href="#">저지</a></li>
                </ul>
              </div>

              <div className="category_con category_sex">
                <div className="title">
                  <div className="text">성별<span></span></div>
                  <div className="btn"><i className='bx bx-chevron-down'></i></div>
                </div>
                <form action="#">
                  <label><input type="checkbox" name="man" id="man"/>남성</label>
                  <label><input type="checkbox" name="woman" id="woman"/>여성</label>
                  <label><input type="checkbox" name="unisex" id="unisex"/>유니섹스</label>
                </form>
              </div>
  
              
              <div className="category_con category_price">
                <div className="title">
                  <div className="text">가격대<span></span></div>
                  <div className="btn"><i className='bx bx-chevron-down'></i></div>
                </div>
                
                <form action="#">
                  <label><input type="checkbox" name="50000under" id="50000under"/>0 - 50,000원</label>
                  <label><input type="checkbox" name="100000under" id="100000under"/>50,000 - 100,000원</label>
                  <label><input type="checkbox" name="150000under" id="150000under"/>100,000 - 150,000원</label>
                </form>
              </div>

              <div className="category_con category_color">
                <div className="title">
                  <div className="text">색상<span></span></div>
                  <div className="btn"><i className='bx bx-chevron-down'></i></div>
                </div>
                <form action="#">
                  <label><input type="checkbox" name="black" id="black"/>블랙</label>
                  <label><input type="checkbox" name="blue" id="blue"/>블루</label>
                  <label><input type="checkbox" name="brown" id="brown"/>브라운</label>
                  <label><input type="checkbox" name="grey" id="grey"/>그레이</label>
                  <label><input type="checkbox" name="red" id="red"/>레드</label>
                  <label><input type="checkbox" name="white" id="white"/>화이트</label>
                </form>
              </div>
              
              <div className="category_con category_brand">
                <div className="title">
                  <div className="text">브랜드<span></span></div>
                  <div className="btn"><i className='bx bx-chevron-down'></i></div>
                </div>
                <form action="#">
                  <label><input type="checkbox" name="nikeSport" id="nikeSport"/>나이키 스포츠웨어</label>
                  <label><input type="checkbox" name="NikeLab" id="NikeLab"/>NikeLab</label>
                  <label><input type="checkbox" name="ACG" id="ACG"/>ACG</label>
                </form>
              </div>

              <div className="category_con category_fit">
                <div className="title">
                  <div className="text">핏<span></span></div>
                  <div className="btn"><i className='bx bx-chevron-down'></i></div>
                </div>
                <form action="#">
                  <label><input type="checkbox" name="loose" id="loose"/>루즈</label>
                  <label><input type="checkbox" name="overSize" id="overSize"/>오버사이즈</label>
                  <label><input type="checkbox" name="nomal" id="nomal"/>표준</label>
                </form>
              </div>
    
              <div className="category_con category_sport">
                <div className="title">
                  <div className="text">스포츠<span></span></div>
                  <div className="btn"><i className='bx bx-chevron-down'></i></div>
                </div>
                <form action="#">
                  <label><input type="checkbox" name="lifeStyle" id="lifeStyle"/>라이프스타일</label>
                  <label><input type="checkbox" name="training" id="training"/>트레이닝 및 짐</label>
                  <label><input type="checkbox" name="skate" id="skate"/>스케이트 보딩</label>
                </form>
              </div>
  
            </div>

            
            <div className="product_list">
              <ProductMenu link='/Detail' img='images/SK1001_1.png' name='나이키 SB 줌 블레이저 로우 프로 GT' category='스케이트보드화' price='99,000원'/>
              <ProductMenu link='' img='images/SK1002_1.png' name='나이키 SB 줌 블레이저 로우 프로 GT' category='스케이트보드화' price='99,000원'/>
              <ProductMenu link='' img='images/SK1003_1.png' name='나이키 SB 줌 블레이저 미드 프리미엄' category='스케이트보드화' price='119,000원'/>
              <ProductMenu link='' img='images/SK1004_1.png' name='나이키 SB 이샤드 웨어 프리미엄' category='스케이트보드화' price='129,000원'/>
              <ProductMenu link='' img='images/SK1005_1.png' name='나이키 SB 나이자 3' category='스케이트보드화' price='119,000원'/>
              <ProductMenu link='' img='images/SN0801_1.png' name='나이키코트 리액트 베이퍼 NXT' category='남성 하드 코트 테니스화' price='239,000원'/>
              <ProductMenu link='' img='images/SN0802_1.png' name='나이키코트 줌 라이트 3' category='남성 하드 코트 테니스화' price='79,000원'/>
              <ProductMenu link='' img='images/SN0803_1.png' name='나이키코트 줌 베이퍼 케이지 4 라파' category='남성 하드 코트 테니스화' price='179,000원'/>
              <ProductMenu link='' img='images/SN0804_1.png' name='나이키코트 줌 NXT' category='남성 하드 코트 테니스화' price='169,000원'/>
              <ProductMenu link='' img='images/SN0805_1.png' name='나이키코트 에어 줌 베이퍼 프로' category='남성 하드 코트 테니스화' price='139,000원'/>
              <ProductMenu link='' img='images/SJ0501_1.png' name='조던 누 레트로 1 로우' category='남성 신발' price='179,000원'/>
              <ProductMenu link='' img='images/SJ0502_1.png' name='조던 시리즈 미드' category='남성 신발' price='11,000원'/>
              <ProductMenu link='' img='images/SJ0503_1.png' name='에어 조던 1 미드 SE 크래프트' category='남성 신발' price='159,000원'/>
              <ProductMenu link='' img='images/SJ0504_1.png' name='조던 시리즈 .06' category='남성 신발' price='99,000원'/>
              <ProductMenu link='' img='images/SJ0505_1.png' name='조던 에어 200E SP' category='남성 신발' price='179,000원'/>
              <ProductMenu link='' img='images/ST0301_1.png' name='나이키 프리 메트콘 4' category='트레이닝화' price='139,000원'/>
              <ProductMenu link='' img='images/ST0302_1.png' name='나이키 에어맥스 알파 트레이너 5' category='남성 트레이닝화' price='99,000원'/>
              <ProductMenu link='' img='images/ST0303_1.png' name='나이키 디파이 올 데이' category='남성 트레이닝화' price='79,000원'/>
              <ProductMenu link='' img='images/ST0304_1.png' name='나이키 슈퍼램 고 3 넥스트 네이처 플라이니트' category='남성 트레이닝화' price='119,000원'/>
              <ProductMenu link='' img='images/ST0305_1.png' name='나이키 줌 메트콘 터보 2' category='남성 트레이닝화' price='119,000원'/>

  
            </div>
          </div>
        </div>
    </section>
    )
    
}

export default Product
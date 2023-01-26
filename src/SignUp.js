import React from 'react'
import { Modal, Button } from 'react-bootstrap'
/*import 'bootstrap/dist/css/bootstrap.min.css'*/
import './SignUp.css'

const SignUp = ({show, onHide}) => {
  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>회원가입</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="" method="post" id="joinForm" name="joinForm">
          <div class="formSign">
            <p><strong class="require">필수</strong>는 필수 입력 사항 입니다.</p>
          </div>
          <div class="baseInfo">
            <h3>기본정보</h3>
            <fieldset>
              <label for="name">성명<strong class="require">필수</strong></label>
              <input type="text" id="name" name="name" placeholder="성함을 입력해주세요"/>
            </fieldset>
            <fieldset>
              <label for="id">아이디<strong class="require">필수</strong></label>
              <input type="text" id="id" name="id" minlength="4" maxlength="16" size="30" required placeholder="영문 숫자 포함 4~16자"/>
              <a href="pop_idCheck.html" class="idCheck">ID 중복확인</a>
            </fieldset>
            <fieldset>
              <label for="pw">비밀번호<strong class="require">필수</strong></label>
              <input type="password" id="pw" name="pw" minlength="10" size="30" required placeholder="영문 숫자 포함 10자이상"/>
            </fieldset>
            <fieldset>
              <label for="confirmPw">비밀번호확인<strong class="require">필수</strong></label>
              <input type="password" id="confirmPw" name="confirmPw"  minlength="10" size="30" required/>
            </fieldset>

            <fieldset class="tel_selct">
              <label>연락처</label>
              <select id="hp1" name="hp1">
                <option value="010">010</option>
                <option value="017">017</option>
                <option value="019">019</option>
                <option value="011">011</option>
                <option value="018">018</option>
                <option value="016">016</option>
              </select> - <input type="text" id="hp2" name="hp2"/>
            </fieldset>
            
            <fieldset>
              <label for="email">이메일<strong class="require">필수</strong></label>
              <input type="email" id="email" name="email" size="30" required placeholder="입력 예) easy@naver.com"/>
            </fieldset>
          </div>

          <div class="addInfo">
            <h3>추가정보</h3>
            <fieldset class="sex" >
              <label>성별</label>
              <input type="radio" id="sexInfo1" name="sexInfo" value="남자" checked/>
              <label>남자</label>
              <input type="radio" id="sexInfo2" name="sexInfo" value="여자"/>
              <label>여자</label>
            </fieldset>

            <fieldset class="birth">
              <label>생년월일</label>
              <input type="date" id="birth" name="birth" />
            </fieldset>
            
            <fieldset class="region">
              <label>지역</label>
              <select name="region">
                <option value="선택안함">선택</option>
                <option value="경기">경기</option>
                <option value="서울">서울</option>
                <option value="인천">인천</option>
                <option value="강원">강원</option>
                <option value="충남">충남</option>
                <option value="충북">충북</option>
                <option value="대전">대전</option>
                <option value="경남">경남</option>
                <option value="경북">경북</option>
                <option value="대구">대구</option>
                <option value="부산">부산</option>
                <option value="울산">울산</option>
                <option value="전북">전북</option>
                <option value="전남">전남</option>
                <option value="광주">광주</option>
                <option value="제주">제주</option>
              </select>
            </fieldset>

            <fieldset class="shoesSize">
              <label>신발 사이즈</label>
              <select name="shoesSize">
                <option value="선택안함">선택</option>
                <option value="220">220</option>
                <option value="225">225</option>
                <option value="230">230</option>
                <option value="235">235</option>
                <option value="240">240</option>
                <option value="245">245</option>
                <option value="250">250</option>
                <option value="255">255</option>
                <option value="260">260</option>
                <option value="265">265</option>
                <option value="270">270</option>
                <option value="275">275</option>
                <option value="280">280</option>
                <option value="285">285</option>
                <option value="290">290</option>
                <option value="295">295</option>
                <option value="300">300</option>
              </select>
            </fieldset>
            <div class="btnJoinArea">
              <button type="submit" class="btnOk">회원가입</button>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>

  )
}

export default SignUp

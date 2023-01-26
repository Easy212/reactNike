import React, {useState, Button} from "react";
import { Link } from "react-router-dom";
import SignUp from './SignUp';
import './App.css';
import styles from './Menu.module.css';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function Menu(){
    const [signUpOn, setSignUpOn] = useState(false);
    return(
      <>
      <SignUp show={signUpOn} 
        onHide={()=>setSignUpOn(false)}
      /> 
      <div className={styles['menu-area']}>
        <div className={styles['h-top']}>
          <div className={styles['jordan-logo']}>
            <Link to="/">
              <img src="images/AIR-JORDAN-LOGO.svg" alt="에어조던로고"/>
              <span>Jordan</span>
            </Link>
          </div>
          <div className={styles['top-menu-area']}>
            <h4 className={styles['top-menu-title']}>나이키 멤버만을 위한 트별한 혜택을 알아보세요</h4>
            <ul className={styles['top-menu']}>
              <li><Link to="#">고객센터</Link></li>
              <li><Link onClick={() => setSignUpOn(true)}>멤버가입</Link></li>
              <li><Link to="#">로그인</Link></li>
            </ul>
          </div>
          <ul className={styles.customer}>
            <li><Link to="#"><img src="images/shopping-bag.svg" alt="장바구니"/>장바구니</Link></li>
            <li><Link to="#"><img src="images/truck.svg" alt="주문배송"/>주문배송</Link></li>
            <li><Link to="#"><img src="images/help-circle.svg" alt="고객센터"/>고객센터</Link></li>
          </ul>
        </div>
      </div>
      </>
    )
}



export default Menu
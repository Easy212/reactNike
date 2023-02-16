import React from "react";
import { Link } from "react-router-dom"
import styles from '../css/Product_list.module.css';


function Product_list(props){
    return(
        <div className={styles.product_item}>
            <Link to={props.link}>
                <div className={styles.item_img}>
                    <img src={props.img} alt=""/>
                </div>
                <div className={styles.TextBox}>
                    <div className={styles.productName}>
                        {props.name}
                    </div>
                    <div className={styles.productSubName}>
                        {props.category}
                    </div>
                    <div className={styles.price}>
                        {props.price}
                    </div>
                </div>
            </Link>
      </div>
    )
}
export default Product_list
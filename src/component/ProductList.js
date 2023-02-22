import React from "react";
import { Link } from "react-router-dom"
import styles from '../css/Product_list.module.css';


function Product_list({product}){
    return(
        <div className={styles.product_item}>
            <Link to={product.link}>
                <div className={styles.item_img}>
                    <img src={product.img} alt=""/>
                </div>
                <div className={styles.TextBox}>
                    <div className={styles.productName}>
                        {product.name}
                    </div>
                    <div className={styles.productSubName}>
                        {product.category}
                    </div>
                    <div className={styles.price}>
                        {product.price}
                    </div>
                </div>
            </Link>
      </div>
    )
}
export default Product_list
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <div>
                    <p><small>by: {seller}</small></p>
                    <p>$ {price}</p>
                    <p><small>Only {stock} left in stock - Order soon</small></p>
                    <button className="main-button" 
                        onClick = {() => props.handleAddProduct(props.product)}
                    ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                </div>
                {/* <div>
                    <p>{star}</p>
                </div> */}
            </div>
        </div>
    );
};

export default Product;
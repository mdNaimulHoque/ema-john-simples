import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import '../Product/Product';
import '../Shop/Shop';

const Header = (props) => {
    return (
        <div className="header">
            <div className="menu-container">
                <img src={logo} alt="" />
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <button className="btn btn-primary">Sign In</button>
                </nav>
            </div>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="type to search here"/>
                <a href="review"><FontAwesomeIcon icon={faShoppingCart} /></a>
                {/* <p> {cart.length}</p> */}
            </div>
        </div>
    );
};

export default Header;
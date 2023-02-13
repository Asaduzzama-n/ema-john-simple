import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="link">

                    <NavLink to={'/'}>Shop</NavLink>
                    <NavLink to={'/order'}>Orders</NavLink>
                    <NavLink to={'/inventory'}>Inventory</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                    
{/* 
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                    <a href="/login">Login</a> */}
                </div>
            </nav>
        </div>
    );
};

export default Header;
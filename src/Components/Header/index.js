import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './index.css'
import Cookies from "js-cookie";



const Header = () => {

    const navigator = useNavigate();

    const onClickLogout = () => {
        Cookies.remove('jwt_token');
        navigator('/login')
    }
    
    return (
        <nav className="nav-header">
            <div className="nav-content">
                <img
                    className="website-logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    alt="website logo"
                />

                <ul className="nav-menu">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                </ul>

                <button type="button" className="logout-desktop-btn" onClick={onClickLogout}>
                    Logout
                </button>

                <button type="button" className="logout-mobile-btn">
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                        alt="logout icon"
                        className="logout-icon"
                    />
                </button>
            </div>
        </nav>
    )
}

export default Header;
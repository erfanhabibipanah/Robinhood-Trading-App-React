import React from 'react';
import './Header.css';
import Logo from '../../Assets/robinhood.svg';
import { SearchOutlined } from '@material-ui/icons';
const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img
                    src={Logo}
                    className="header_logo_image"
                    alt="robinhood-logo"
                />
            </div>
            <div className="header_search">
                <div className="header_search_container">
                    <SearchOutlined className="header_search_container_icon" />
                    <input
                        placeholder="Search"
                        className="header_search_container_input"
                        type="text"
                    />
                </div>
            </div>
            <div className="header__menuitems">
                <a href="/" className="active">
                    Free Stocks
                </a>
                <a href="/">Portfolio</a>
                <a href="/">Cash</a>
                <a href="/">Messages</a>
                <a href="/">Account</a>
            </div>
        </div>
    );
};

export default Header;

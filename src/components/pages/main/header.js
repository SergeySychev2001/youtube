import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../styles/pages/main/header.css';

const Header = () => {

    const location = useLocation();

    const mainClasses = location.pathname === '/main' ? "button active" : "button";
    const favouritesClasses = location.pathname === '/main/favourites' ? "button active" : "button";

    return(
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    <nav className="header__nav">
                        <Link to="/main">
                            <button className={mainClasses}>Поиск</button>
                        </Link>
                        <Link to="/main/favourites">
                            <button className={favouritesClasses}>Избранное</button>
                        </Link>
                    </nav>
                    <button className="button">Выйти</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
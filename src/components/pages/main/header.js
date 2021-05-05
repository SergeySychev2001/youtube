import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/pages/main/header.css';

const Header = () => {

    return(
        <header className="header">
            <div className="container">
                <div className="header-wrap">
                    <nav className="header__nav">
                        <Link to="/main"><button className="button active">Поиск</button></Link>
                        <Link to="/main/favourites"><button className="button">Избранное</button></Link>
                    </nav>
                    <button className="button">Выйти</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
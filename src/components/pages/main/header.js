import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { logOut, storeIsCleaned } from '../../../redux/actions';
import '../../../styles/pages/main/header.css';

const Header = ({history, storeIsCleaned, logOut}) => {

    const location = useLocation();

    const mainClasses = location.pathname === '/main' ? "button active" : "button";
    const favouritesClasses = location.pathname === '/main/favourites' ? "button active" : "button";

    const logOutBtn = () => {
        sessionStorage.clear();
        logOut();
        storeIsCleaned();
    }

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
                    <div>
                        <div></div>
                        <button className="button" onClick={logOutBtn}>Выйти</button>
                    </div>  
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        storeIsCleaned: () => dispatch(storeIsCleaned()),
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Header)); 
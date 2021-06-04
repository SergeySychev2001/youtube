import React from 'react';
import { connect } from 'react-redux';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { storeIsCleaned } from '../../../redux/actions';
import '../../../styles/pages/main/header.css';

const Header = ({history, storeIsCleaned}) => {

    const location = useLocation();

    const mainClasses = location.pathname === '/main' ? "button active" : "button";
    const favouritesClasses = location.pathname === '/main/favourites' ? "button active" : "button";

    const logOut = () => {
        sessionStorage.clear();
        history.push('/authorization');
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
                        <button className="button" onClick={logOut}>Выйти</button>
                    </div>  
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        storeIsCleaned: () => dispatch(storeIsCleaned())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Header)); 
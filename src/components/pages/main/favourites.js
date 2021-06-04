import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { favouriteListIsLoaded } from '../../../redux/actions';
import '../../../styles/pages/main/favourites.css'
import FavouriteList from '../../favourite-list/favourite-list';

const Favourites = ({favouriteListIsLoaded}) => {

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        const videoList = JSON.parse(localStorage.getItem(userId));
        favouriteListIsLoaded(videoList);
    }, []);

    return(
        <div className="favourites">
            <div className="favourites__title">Избранное</div>
            <FavouriteList/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        favouriteListIsLoaded: (data) => dispatch(favouriteListIsLoaded(data))
    }
}

export default connect(null, mapDispatchToProps)(Favourites); 
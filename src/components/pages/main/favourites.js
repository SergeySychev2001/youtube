import React from 'react';
import '../../../styles/pages/main/favourites.css'
import FavouriteList from '../../favourite-list/favourite-list';

const Favourites = () => {
    return(
        <div className="favourites">
            <div className="favourites__title">Избранное</div>
            <FavouriteList/>
        </div>
    )
}

export default Favourites;
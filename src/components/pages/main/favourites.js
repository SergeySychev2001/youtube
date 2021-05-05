import React from 'react';
import '../../../styles/pages/main/favourites.css'
import RequestList from '../../request-list/request-list';

const Favourites = () => {
    return(
        <div className="favourites">
            <div className="favourites__title">Избранное</div>
            <RequestList/>
        </div>
    )
}

export default Favourites;
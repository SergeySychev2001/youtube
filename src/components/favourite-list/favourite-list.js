import React from 'react';
import { connect } from 'react-redux';
import '../../styles/favourite-list/favourite-list.css';

import FavouriteListItem from './favourite-list-item';


const FavouriteList = ({favouriteList}) => {
    const favouriteListItems = favouriteList.map(({title}, idx) => {
        return <FavouriteListItem key={idx} id={idx} title={title}/>;
    });

    return(
        <ul className="favourite-list">
            {favouriteListItems}
        </ul>
    )
}

const mapStateToProps = ({favouriteList}) => {
    return {
        favouriteList
    }
}

export default connect(mapStateToProps)(FavouriteList);
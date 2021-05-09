import React from 'react';
import { connect } from 'react-redux';
import '../../styles/request-list/request-list.css';

import RequestListItem from './request-list-item';


const RequestList = ({favouriteList}) => {
    console.log(favouriteList)
    const requestListItems = favouriteList.map(({title}, idx) => {
        return <RequestListItem key={idx} id={idx} title={title}/>;
    });

    return(
        <ul className="request-list">
            {requestListItems}
        </ul>
    )
}

const mapStateToProps = ({favouriteList}) => {
    return {
        favouriteList
    }
}

export default connect(mapStateToProps)(RequestList);
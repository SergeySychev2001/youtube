import React from 'react';
import '../../styles/request-list/request-list.css';

import RequestListItem from './request-list-item';

const RequestList = () => {
    return(
        <div className="request-list">
            <RequestListItem/>
            <RequestListItem/>
            <RequestListItem/>
        </div>
    )
}

export default RequestList;
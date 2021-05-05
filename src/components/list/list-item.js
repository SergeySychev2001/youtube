import React from 'react';
import '../../styles/list/list-item.css';

const ListItem = ({video, title, channelTitle, count}) => {
    return(
        <li className="list__item">
            <div className="item__video"><img src={video}/></div>
            <div className="item__body">
                <div className="item__title">{title}</div>
                <div className="item__description">
                    <div className="item__channel-title">{channelTitle}</div>
                    <div className="item__count">{count} просмотров</div>
                </div>
            </div>
        </li>
    )
}

export default ListItem;
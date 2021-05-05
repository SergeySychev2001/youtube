import React from 'react';
import '../../styles/grid/grid-item.css';

const GridItem = ({video, title, channelTitle, count}) => {
    return(
        <div className="grid__item">
            <div className="item__video"><img src={video}/></div>
            <div className="item__title">{title}</div>
            <div className="item__description">
                <div className="item__channel-title">{channelTitle}</div>
                <div className="item__count">{count} просмотров</div>
            </div>
        </div>
    )
}

export default GridItem
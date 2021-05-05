import React from 'react';
import ListItem from './list-item';
import '../../styles/list/list.css';

const List = ({videoList}) => {

    const listItems = videoList.map(({channelTitle, thumbnail, viewCount, videoTitle, videoId}) => {
        return <ListItem    key={videoId} 
                            video={thumbnail} 
                            title={videoTitle} 
                            channelTitle={channelTitle} 
                            count={viewCount}/>
    });

    return(
        <ul className="list">
            {listItems}
        </ul>
    )
}

export default List;
import React from 'react';
import ListItem from './list-item';
import '../../styles/list/list.css';

const List = ({videoList}) => {

    const listItems = videoList.map(({channelTitle, thumbnail, viewCount, videoTitle, videoId}) => {
        return <ListItem    videoId={videoId} 
                            thumbnail={thumbnail} 
                            videoTitle={videoTitle} 
                            channelTitle={channelTitle} 
                            viewCount={viewCount}/>
    });

    return(
        <ul className="list">
            {listItems}
        </ul>
    )
}

export default List;
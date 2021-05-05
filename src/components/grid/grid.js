import React from 'react';
import GridItem from './grid-item';
import '../../styles/grid/grid.css';

const Grid = ({videoList}) => {

    const gridItems = videoList.map(({channelTitle, thumbnail, viewCount, videoTitle, videoId}) => {
        return <GridItem    key={videoId} 
                            video={thumbnail} 
                            title={videoTitle} 
                            channelTitle={channelTitle} 
                            count={viewCount}/>
    });

    return(
        <div className="grid">
            {gridItems}
        </div>
    )
}

export default Grid
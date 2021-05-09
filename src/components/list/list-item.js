import React, { useState } from 'react';
import '../../styles/list/list-item.css';

import VideoPlayer from '../video-player';

const ListItem = ({videoId, thumbnail, videoTitle, channelTitle, viewCount}) => {

    const [videoPlayerMode, setVideoPlayerMode] = useState(false);

    const videoPlayerContent = videoPlayerMode ? 
    (<VideoPlayer   disableVideoPlayer={() => setVideoPlayerMode(false)}
                    videoId={videoId}
                    videoTitle={videoTitle}
                    />) 
    : null;

    return(
        <li key={videoId} className="list__item">
            <div className="item__video" onClick={() => setVideoPlayerMode(true)}>
                <img src={thumbnail}/>
            </div>
            <div className="item__body">
                <div className="item__title" onClick={() => setVideoPlayerMode(true)}>{videoTitle}</div>
                <div className="item__description">
                    <div className="item__channel-title">{channelTitle}</div>
                    <div className="item__count">{viewCount} просмотров</div>
                </div>
            </div>
            {videoPlayerContent}
        </li>
    )
}

export default ListItem;
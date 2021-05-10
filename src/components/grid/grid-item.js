import React, { useState } from 'react';
import '../../styles/grid/grid-item.css';

import Modal from '../modal';
import VideoPlayer from '../video-player';

const GridItem = ({ 
                    channelTitle, 
                    thumbnail, 
                    viewCount, 
                    videoTitle, 
                    videoId
                }) => {

    const [modalMode, setModalMode] = useState(false);

    const modalContent = modalMode ? 
    (<Modal disableModal={() => setModalMode(false)}>
        <VideoPlayer    videoId={videoId}
                        videoTitle={videoTitle}/>
    </Modal>) 
    : null;

    return(
        <div className="grid__item">
            <div    className="item__video"
                    onClick={() => setModalMode(true)}>
                <img src={thumbnail}/>
            </div>
            <div    className="item__title"
                    onClick={() => setModalMode(true)}
                    >
                {videoTitle}
            </div>
            <div className="item__description">
                <div className="item__channel-title">{channelTitle}</div>
                <div className="item__count">{viewCount} просмотров</div>
            </div>
            {modalContent}
        </div>
    )
}

export default GridItem
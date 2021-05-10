import React, { useState } from 'react';
import '../../styles/list/list-item.css';

import Modal from '../modal';
import VideoPlayer from '../video-player';

const ListItem = ({ 
                    videoId, 
                    thumbnail, 
                    videoTitle, 
                    channelTitle, 
                    viewCount
                }) => {

    const [modalMode, setModalMode] = useState(false);

    const modalContent = modalMode ? 
    (<Modal disableModal={() => setModalMode(false)}>
        <VideoPlayer    videoId={videoId}
                        videoTitle={videoTitle}/>
    </Modal>) 
    : null;

    return(
        <li key={videoId} className="list__item">
            <div    className="item__video" 
                    onClick={() => setModalMode(true)}>
                <img src={thumbnail}/>
            </div>
            <div className="item__body">
                <div    className="item__title" 
                        onClick={() => setModalMode(true)}>
                    {videoTitle}
                </div>
                <div className="item__description">
                    <div className="item__channel-title">{channelTitle}</div>
                    <div className="item__count">{viewCount} просмотров</div>
                </div>
            </div>
            {modalContent}
        </li>
    )
}

export default ListItem;
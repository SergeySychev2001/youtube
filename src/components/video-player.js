import React from 'react';
import '../styles/video-player.css';

const VideoPlayer = ({disableVideoPlayer, videoId, videoTitle}) => {
    return(
        <div className="video-player" onClick={disableVideoPlayer}>
            <iframe width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={videoTitle} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        </div> 
    )
}

export default VideoPlayer;
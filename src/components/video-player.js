import React from 'react';

const VideoPlayer = ({videoId, videoTitle}) => {
    return(
        <iframe width="861" 
                height="484" 
                src={`https://www.youtube.com/embed/${videoId}`}
                title={videoTitle} 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    )
}

export default VideoPlayer;
import axios from 'axios';

const KEY = 'AIzaSyB0NARK8wk_3gT948qOpLEMBW-Ry6iLxjg';

const youtube = axios.create({
                baseURL: 'https://www.googleapis.com/youtube/v3/',
                params:{
                    part: 'snippet',
                    maxResults: '2',
                    key: KEY,
                    type: 'video'
                }
            });

const search = (text) => {
    return youtube.get('/search', {
                params: {
                    q: text
                }
            }).then(({data}) => {
                return {
                    totalResults: data.pageInfo.totalResults,
                    videoId: data.items.map(item => item.id.videoId)
                }
            });
}

const videoInfo = async (text) => {
    return await search(text)
    .then(({totalResults, videoId}) => {
        youtube.get('/videos', {
            params:{
                id: videoId.join(','),
                part: 'snippet, statistics'
            }
        }).then(({data}) => {
            return {
                totalResults,
                videoList:  data.items.map(({id, snippet, statistics}) => {
                                return {
                                    videoId: id,
                                    channelTitle: snippet.channelTitle,
                                    videoTitle: snippet.title,
                                    description: snippet.description,
                                    thumbnail: snippet.thumbnails.medium.url,
                                    viewCount: statistics.viewCount
                                }
                            })
            }
        });
    });
}

export {videoInfo, search}; 
import axios from 'axios';

const KEY = 'AIzaSyB1jSPYDdlDZZa-jsAQyP_0jqpEK2A5lVg';

const youtube = axios.create({
                baseURL: 'https://www.googleapis.com/youtube/v3/',
                params:{
                    part: 'snippet',
                    maxResults: '12',
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

const videoInfo = (text) => {
    return search(text)
    .then(({totalResults, videoId}) => {
        return  youtube.get('/videos', {
                    params:{
                        id: videoId.join(','),
                        part: 'snippet, statistics'
                }
        }).then(({data}) => {
            return {
                requestName: text,
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
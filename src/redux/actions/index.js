import {search, videoInfo} from '../../services/youtube';

const fetchVideoListSuccess = (data) => {
    return {
        type: 'FETCH_VIDEO_LIST_SUCCESS',
        payload: data
    }
}

const fetchVideoListFailure = (data) => {
    return {
        type: 'FETCH_VIDEO_LIST_FAILURE',
        payload: data
    }
}

const fetchVideoListRequest = () => {
    return {
        type: 'FETCH_VIDEO_LIST_REQUEST'
    }
}

// const updateVideoList = (dispatch) => {
//     dispatch(fetchVideoListRequest());
//     // search('ter');
//     // .then(data => console.log(data))
//     // .catch(error => dispatch(fetchVideoListFailure(error)));
// }

// export {updateVideoList};
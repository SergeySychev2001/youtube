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

const updateVideoList = (dispatch) => (text) => {
    dispatch(fetchVideoListRequest());
    videoInfo(text)
    .then(data => dispatch(fetchVideoListSuccess(data)))
    .catch(error => dispatch(fetchVideoListFailure(error)));
}

const modalIsVisible = () => {
    return {
        type:'MODAL_IS_VISIBLE'
    }
}

// const modalIsVisible =  {
//     type:'MODAL_IS_VISIBLE'
// }

export {updateVideoList, modalIsVisible};
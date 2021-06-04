import {videoInfo} from '../../services/youtube';

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

const updateVideoList = (dispatch) => (requestName, maxResults = 12, order = 'relevance') => {
    dispatch(fetchVideoListRequest());
    videoInfo(requestName, maxResults, order)
    .then(data => dispatch(fetchVideoListSuccess(data)))
    .catch(error => dispatch(fetchVideoListFailure(error)));
}

const favouriteListItemIsAdded = (data) => {
    return{
        type: 'FAVOURITELIST_ITEM_IS_ADDED',
        payload: data
    }
}

const favouriteListItemIsUpdate = (id, data) => {
    return{
        type: 'FAVOURITELIST_ITEM_IS_UPDATE',
        payload: {
            id, 
            data
        }
    }
}

const favouriteListItemIsDeleted = (id) => {
    return{
        type: 'FAVOURITELIST_ITEM_IS_DELETED',
        payload: id
    }
}

const favouriteListIsLoaded = (data) => {
    return{
        type: 'FAVOURITELIST_IS_LOADED',
        payload: data
    }
}

const storeIsCleaned = () => {
    return{
        type: 'STORE_IS_CLEANED'
    }
}

const signIn = () => {
    return{
        type: 'SIGN_IN'
    }
}

const logOut = () => {
    return{
        type: 'LOG_OUT'
    }
}

export {
    updateVideoList, 
    favouriteListItemIsAdded, 
    favouriteListItemIsUpdate, 
    favouriteListItemIsDeleted,
    favouriteListIsLoaded,
    storeIsCleaned,
    signIn,
    logOut
    };
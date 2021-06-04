const initialState = {
    loggedIn: false,
    loading: false,
    error: null,
    favouriteList: [],
    videoData: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_VIDEO_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                videoData: action.payload
            };
        case 'FETCH_VIDEO_LIST_FAILURE':
            return{
                ...state,
                loading: false,
                error: action.payload,
                videoData: {}
            };
        case 'FETCH_VIDEO_LIST_REQUEST':
            return{
                ...state,
                loading: true,
                error: null,
                videoData: {}
            };
        case 'FAVOURITELIST_ITEM_IS_ADDED':
            const newFavouriteListItem = {
                requestName: action.payload.requestName,
                title: action.payload.title,
                sortBy: action.payload.sortBy,
                count: action.payload.count
            } 
            return {
                ...state,
                favouriteList: [
                    ...state.favouriteList,
                    newFavouriteListItem
                ]
            };
        case 'FAVOURITELIST_ITEM_IS_UPDATE':
            const updatedFavouriteListItem = {
                requestName: action.payload.data.requestName,
                title: action.payload.data.title,
                sortBy: action.payload.data.sortBy,
                count: action.payload.data.count
            }
            return{
                ...state,
                favouriteList: [
                    ...state.favouriteList.slice(0, action.payload.id),
                    updatedFavouriteListItem,
                    ...state.favouriteList.slice(+action.payload.id + 1)
                ]
            };
        case 'FAVOURITELIST_ITEM_IS_DELETED':
            if (state.favouriteList.length == 1){
                return{
                    ...state,
                    favouriteList: []
                }
            }else{
                return {
                    ...state,
                    favouriteList: [
                        ...state.favouriteList.slice(0, +action.payload),
                        ...state.favouriteList.slice(+action.payload + 1)
                    ]
                }
            };
        case 'FAVOURITELIST_IS_LOADED':
            return{
                ...state,
                favouriteList: action.payload
            };
        case 'STORE_IS_CLEANED':
            return{
                loading: false,
                error: null,
                favouriteList: [],
                videoData: {}
            };
        case 'SIGN_IN': 
            return{
                ...state,
                loggedIn: true
            }
        ;
        case 'LOG_OUT': 
            return{
                ...state,
                loggedIn: false
            }
        ;
        default: return state;
    }
}

export default reducer;
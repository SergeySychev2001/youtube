const initialState = {
    loading: false,
    error: null,
    favouriteList: [
        {
            requestName: 'Metallica',
            title: 'Metallica',
            sortBy: 'rating',
            count: 12
        },
        {
            requestName: 'Megadeth',
            title: 'Megadeth',
            sortBy: 'relevance',
            count: 17
        },
        {
            requestName: 'Anthrax',
            title: 'Anthrax',
            sortBy: 'date',
            count: 15
        }
    ],
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
            }
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
            }
        case 'FAVOURITELIST_ITEM_IS_DELETED':
            return {
                ...state,
                favouriteList: [
                    ...state.favouriteList.slice(0, action.payload),
                    ...state.favouriteList.slice(+action.payload + 1)
                ]
            }
        default: return state;
    }
}

export default reducer;
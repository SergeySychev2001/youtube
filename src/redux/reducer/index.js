const initialState = {
    modal: false,
    loading: false,
    error: null,
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
        case 'MODAL_IS_VISIBLE':
            return {
                ...state,
                modal: true
            };
        default: return state;
    }
}

export default reducer;
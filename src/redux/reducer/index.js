const initialState = {
    loading: false,
    error: null,
    VideoList: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_VIDEO_LIST_SUCCESS':
            return {
                loading: false,
                error: null,
                VideoItems: action.payload
            };
        case 'FETCH_VIDEO_LIST_FAILURE':
            return{
                loading: false,
                error: action.payload,
                VideoItems: []
            };
        case 'FETCH_VIDEO_LIST_REQUEST':
            return{
                loading: true,
                error: null,
                VideoItems: []
            };
    }
}

export default reducer;
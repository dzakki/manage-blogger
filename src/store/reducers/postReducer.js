import { GET_POSTS, GET_POST, ADD_POST, ONLOAD_POST } from "../actionTypes";

const initialState = {
    posts: [],
    post: null,
    onload_post: false,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.data,
                onload_post: false
            }
        case GET_POST:
            console.log('masuklah', action.data)
            return {
                ...state,
                post: action.data,
                onload_post: false
            }
        case ADD_POST:
            return {
                ...state,
                post: null,
                onload_post: false
            }
        case ONLOAD_POST:
            return {
                ...state,
                onload_post: true
            }
        default:
            return state;
    };
};
export default postReducer;
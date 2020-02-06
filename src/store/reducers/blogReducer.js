import { GET_BLOGS, ONLOAD_BLOG } from "../actionTypes";
const initalState = {
    blogs: [],
    onload_blog: false
}

export default function blogReducer(state = initalState, action) {  
    switch (action.type) {
        case GET_BLOGS:
            return {
                blogs: action.data,
                onload_blog: false,
            };
        case ONLOAD_BLOG:
            return {
                ...state,
                onload_blog: true,
            }
        default:
            return state;
    }
}
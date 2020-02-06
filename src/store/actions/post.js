import { 
    GET_POST, 
    GET_POSTS, 
    ONLOAD_POST,
    ERRORS,
} from "../actionTypes";

export const getPosts = url => dispatch => {
    dispatch({
        type: ONLOAD_POST
    })
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: GET_POSTS,
                data: data.items
            })
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                errors: err
            })
        })
}

export const getPost = (url) => dispatch => {
    dispatch({
        type: ONLOAD_POST
    })
    fetch(url)
        .then(response => response.json())
        .then(post => {
            dispatch({
                type: GET_POST,
                data: post
            })
            console.log(typeof post)
            console.log(post.title)
        })
        .catch(err => {
            dispatch({
                type: ERRORS,
                errors: err
            })
        })
}
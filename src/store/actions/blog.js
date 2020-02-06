import { GET_BLOGS, ONLOAD_BLOG} from "../actionTypes";

export const getBlogs = () => dispatch => {
    console.log('assasdwdwd')
    dispatch({
        type: ONLOAD_BLOG
    })
    fetch(`https://www.googleapis.com/blogger/v3/users/self/blogs`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token.bearer')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dispatch({
            type: GET_BLOGS,
            data: data.items
        })
    })
    .catch(err => {
        console.log(err)
    })
}
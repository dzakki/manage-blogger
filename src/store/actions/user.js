import { LOGIN, LOGOUT, GET_POSTS } from '../actionTypes';

export const login = (data) => (dispatch) => {
    let tesUrl = `https://accounts.google.com/o/oauth2/token?`
        tesUrl+= `code=${data}&`
        tesUrl+= `grant_type=authorization_code&`
        tesUrl+= `client_id=${process.env.REACT_APP_CLIENT_ID}&`
        tesUrl+= `client_secret=${process.env.REACT_APP_CLIENT_SECRET}&`
        tesUrl+= `redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`
    fetch(tesUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;'
        },
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('isLoggedIn', true); 
        localStorage.setItem('token.bearer', data.access_token);
        dispatch({
            type: LOGIN,                                                                                                                                                                                                                                                                                                                                                                                                     
        });
    })
    .catch(err => {
        console.log(err)
    })
};

export const logout = () => dispatch => {
    fetch(`https://oauth2.googleapis.com/revoke?token=${localStorage.getItem('token.bearer')}`, {
        method: 'POST',
        headers: {
            "Content-type": 'application/x-www-form-urlencoded'
        }
    })
    .then(res => res.json())
    .then(() => {
        localStorage.clear()
        dispatch({
            type: GET_POSTS,
            data: []
        })
        dispatch({
            type: LOGOUT,
        });
    })
};
import { LOGIN, LOGOUT } from '../actionTypes'
const initialState = {
    isLogged: localStorage.getItem('isLoggedIn') || false,
    data: {
        tokenBearer: localStorage.getItem('token.bearer'),
        email: localStorage.getItem('email'),
    },
};
export default function userReducer(state = initialState, action) {  
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogged: true,
            };
        case LOGOUT: 
            return {
                ...state,
                isLogged: false,
            };
        default:
            return state;
    };
};
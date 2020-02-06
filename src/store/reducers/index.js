import { combineReducers } from 'redux';
import user from './userReducer';
import blog from './blogReducer';
import post from './postReducer';
import { ERRORS, SUCCESS } from '../actionTypes';
const initialState = {
    errors: null,
    success: null,
};

const general = (state = initialState, action) => {
    switch (action.type) {
        case ERRORS:
            return {
                ...state,
                errors: action.errors,
            };
        case SUCCESS:
            return {
                ...state,
                success: action.success,
            };
        default:
            return state;
    };
};

export default combineReducers({
    general,
    blog,
    user,
    post,
});
import {  combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form'
import guideReducer from  './guideReducer';
import authReducer from  './authReducer';

export default combineReducers({
    help : guideReducer,
    auth : authReducer,
    form : reduxFormReducer
});

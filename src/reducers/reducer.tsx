import cakeReducer from './cakeReducer';
import { combineReducers } from 'redux';

export default combineReducers({
        cake: cakeReducer
    });
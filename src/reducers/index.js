import { combineReducers } from 'redux'
import Auth from './Auth';
import Normal from './Normal';
import Admin from './Admin';

export default combineReducers({
    Auth,
    Normal,
    Admin,
})



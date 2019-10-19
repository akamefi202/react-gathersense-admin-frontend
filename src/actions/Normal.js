import {
    ADD_OPEN,
    ADD_CLOSE,
    GET_DATA,
} from '../common/ActionTypes';

export const addOpen = () => ({ type: ADD_OPEN, });
export const addClose = () => ({ type: ADD_CLOSE, });
export const getData = () => ({type: GET_DATA});


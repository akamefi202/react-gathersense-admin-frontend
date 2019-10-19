import {
    ADD_ADMIN,
    EDIT_ADMIN,
    DELETE_ADMIN,
} from '../common/ActionTypes';

export const addAdmin = (data, callback) => ({
    type: ADD_ADMIN,
    payload: data, 
    call: callback, 
})

export const editAdmin = (data, callback) => ({
    type: EDIT_ADMIN,
    payload: data, 
    call: callback, 
})

export const deleteAdmin = (data, callback) => ({
    type: DELETE_ADMIN,
    payload: data,
    call: callback, 
})

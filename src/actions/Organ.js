import {
    ADD_ORGAN,
    EDIT_ORGAN,
    DELETE_ORGAN
} from '../common/ActionTypes';

export const addOrgan = (data, callback) => ({
    type: ADD_ORGAN,
    payload: data,
    call: callback 
})
export const editOrgan = (data, callback) => ({
    type: EDIT_ORGAN,
    payload: data,
    call: callback 
})
export const deleteOrgan = (data, callback) => ({
    type: DELETE_ORGAN,
    payload: data,
    call: callback 
})


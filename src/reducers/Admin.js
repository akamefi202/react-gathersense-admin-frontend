import {
    ADD_ADMIN,
    ADD_ADMIN_START,
    ADD_ADMIN_END,
    ADD_ADMIN_SUCCESS,
    EDIT_ADMIN,
    EDIT_ADMIN_START,
    EDIT_ADMIN_END,
    EDIT_ADMIN_SUCCESS,
    DELETE_ADMIN,
    DELETE_ADMIN_START,
    DELETE_ADMIN_END,
    DELETE_ADMIN_SUCCESS,
} from '../common/ActionTypes';

const INIT_STATE = {
    uploading: false,
    addstate: '',
    errorMessage: '',
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {        
        case ADD_ADMIN: {
            return {
                ...state,
                data: action.payload,
                uploading: true,
            }
        }
        case ADD_ADMIN_START: {
            return {
                ...state,
                addstate: action.addstate,
            }
        }   
        case ADD_ADMIN_SUCCESS: {
            return {
                ...state,
                addstate: action.addstate,
                uploading: false,
            }
        }       
        case ADD_ADMIN_END: {
            return {
                ...state,
                addstate: action.addstate,
                errorMessage: action.errorMessage,
                uploading: false,
            }
        }
        case EDIT_ADMIN: {
            return {
                ...state,
                data: action.payload,
                uploading: true,
            }
        }
        case EDIT_ADMIN_START: {
            return {
                ...state,
                editstate: action.editstate,
            }
        }   
        case EDIT_ADMIN_SUCCESS: {
            return {
                ...state,
                editstate: action.editstate,
                uploading: false,
            }
        }       
        case EDIT_ADMIN_END: {
            return {
                ...state,
                editstate: action.editstate,
                errorMessage: action.errorMessage,
                uploading: false,
            }
        }
        case DELETE_ADMIN: {
            return {
                ...state,
                data: action.payload,
                uploading: true,
            }
        }
        case DELETE_ADMIN_START: {
            return {
                ...state,
                deletestate: action.deletestate,
            }
        }   
        case DELETE_ADMIN_SUCCESS: {
            return {
                ...state,
                deletestate: action.deletestate,
                uploading: false,
            }
        }       
        case DELETE_ADMIN_END: {
            return {
                ...state,
                deletestate: action.deletestate,
                errorMessage: action.errorMessage,
                uploading: false,
            }
        }        
        default: 
            return state;
    }
};
export default reducer;


import {
    ADD_ORGAN,
    ADD_ORGAN_START,
    ADD_ORGAN_END,
    ADD_ORGAN_SUCCESS,
} from '../common/ActionTypes';

const INIT_STATE = {
    uploading: false,
    addstate: '',
    errorMessage: '',
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {        
        case ADD_ORGAN: {
            return {
                ...state,
                data: action.payload,
                uploading: true,
            }
        }
        case ADD_ORGAN_START: {
            return {
                ...state,
                addstate: action.addstate,
            }
        }   
        case ADD_ORGAN_SUCCESS: {
            return {
                ...state,
                addstate: action.addstate,
                uploading: false,
            }
        }       
        case ADD_ORGAN_END: {
            return {
                ...state,
                addstate: action.addstate,
                errorMessage: action.errorMessage,
                uploading: false,
            }
        }   
        case EDIT_ORGAN: {
            return {
                ...state,
                data: action.payload,
                uploading: true,
            }
        }
        case EDIT_ORGAN_START: {
            return {
                ...state,
                editstate: action.editstate,
            }
        }   
        case EDIT_ORGAN_SUCCESS: {
            return {
                ...state,
                editstate: action.editstate,
                uploading: false,
            }
        }       
        case EDIT_ORGAN_END: {
            return {
                ...state,
                editstate: action.editstate,
                errorMessage: action.errorMessage,
                uploading: false,
            }
        }   
        case DELETE_ORGAN: {
            return {
                ...state,
                data: action.payload,
                uploading: true,
            }
        }
        case DELETE_ORGAN_START: {
            return {
                ...state,
                deletestate: action.deletestate,
            }
        }   
        case DELETE_ORGAN_SUCCESS: {
            return {
                ...state,
                deletestate: action.deletestate,
                uploading: false,
            }
        }       
        case DELETE_ORGAN_END: {
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


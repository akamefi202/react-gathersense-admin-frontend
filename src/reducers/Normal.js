import {
    ADD_OPEN,
    ADD_CLOSE,
    GET_DATA,
    // GET_DATA_START,
    GET_DATA_END,
    GET_DATA_SUCCESS,
    // GET_DATA_FAILED,

} from '../common/ActionTypes';

const INIT_STATE = {
    addopen: false,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_OPEN:
            return { ...state, addopen: true };
        case ADD_CLOSE:
            return { ...state, addopen: false };
        case GET_DATA:
            return {
                ...state,
                dataloading: true,
            }
        case GET_DATA_END:
            return {
                ...state,
                getstate: action.getstate,
                admin_data: action.json_admin, 
                organ_data: action.json_organ, 
                candi_data: action.json_candi, 
                train_data: action.json_train 
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                dataloading: false,
            }       
        
        default: 
            return state;
    }
};
export default reducer;


import { 
    put, 
    takeLatest, 
    all, 
} from 'redux-saga/effects';
import { 
    ADD_ORGAN,
    ADD_ORGAN_START,
    ADD_ORGAN_END,
    ADD_ORGAN_URL,
    ADD_ORGAN_FAILED,
    ADD_ORGAN_SUCCESS,
    EDIT_ORGAN,
    EDIT_ORGAN_START,
    EDIT_ORGAN_END,
    EDIT_ORGAN_URL,
    EDIT_ORGAN_FAILED,
    EDIT_ORGAN_SUCCESS,
    DELETE_ORGAN,
    DELETE_ORGAN_START,
    DELETE_ORGAN_END,
    DELETE_ORGAN_URL,
    DELETE_ORGAN_FAILED,
    DELETE_ORGAN_SUCCESS,
} from '../common/ActionTypes';

function* addOrgan(action) {
    const token = localStorage.getItem('GSAtoken');
    yield put({ type: ADD_ORGAN_START, addstate: ADD_ORGAN_START });
    
    try {
        yield fetch(ADD_ORGAN_URL, {
            method: 'POST',
            headers: {
                authorization: token,
                //'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data',                
            },
            body: action.payload
        })
        .then(
            response => response.json()
        )
        .then((responseJson) => {
            return responseJson.organization;
        })

        yield put({ type: ADD_ORGAN_SUCCESS, addstate: ADD_ORGAN_SUCCESS});
        // refresh
        action.call();
    }catch (error) {
        let errorMessage;
        console.log(error.status)
        switch (error.status) {
            case 500: errorMessage = 'Internal Server Error'; break;
            case 422: errorMessage = 'Invalid credentials'; break;
            default: errorMessage = 'Something went wrong'; break;
        }
        yield put({ type: ADD_ORGAN_END, addstate: ADD_ORGAN_FAILED, errorMessage: errorMessage});
    }
}

function* actionWatcherAddOrgan() {
    yield takeLatest(ADD_ORGAN, addOrgan);
}

function* editOrgan(action) {
    const token = localStorage.getItem('GSAtoken');
    yield put({ type: EDIT_ORGAN_START, addstate: EDIT_ORGAN_START });
    
    try {
        yield fetch(EDIT_ORGAN_URL, {
            method: 'PUT',
            headers: {
                authorization: token,
                //'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data',                
            },
            body: action.payload
        })
        .then(
            response => response.json()
        )
        .then((responseJson) => {
            return responseJson.organization;
        })

        yield put({ type: EDIT_ORGAN_SUCCESS, editstate: EDIT_ORGAN_SUCCESS});
        // refresh
        action.call();
    }catch (error) {
        let errorMessage;
        console.log(error.status)
        switch (error.status) {
            case 500: errorMessage = 'Internal Server Error'; break;
            case 422: errorMessage = 'Invalid credentials'; break;
            default: errorMessage = 'Something went wrong'; break;
        }
        yield put({ type: EDIT_ORGAN_END, editstate: EDIT_ORGAN_FAILED, errorMessage: errorMessage});
    }
}

function* actionWatcherEditOrgan() {
    yield takeLatest(EDIT_ORGAN, editOrgan);
}

function* deleteOrgan(action) {
    const token = localStorage.getItem('GSAtoken');
    
    yield put({ type: DELETE_ORGAN_START, addstate: DELETE_ORGAN_START });
    try {
        yield fetch(DELETE_ORGAN_URL, {
            method: 'delete',
            headers: {
                authorization: token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": action.payload.id,
            })
        })
        yield put({ type: DELETE_ORGAN_SUCCESS, editstate: DELETE_ORGAN_SUCCESS});
        //refresh

        action.call();
    }catch (error) {
        let errorMessage;
        console.log(error.status)
        switch (error.status) {
            case 500: errorMessage = 'Internal Server Error'; break;
            case 422: errorMessage = 'Invalid credentials'; break;
            default: errorMessage = 'Something went wrong'; break;
        }
        yield put({ type: DELETE_ORGAN_END, editstate: DELETE_ORGAN_FAILED, errorMessage: errorMessage});
    }
}

function* actionWatcherDeleteOrgan() {
    yield takeLatest(DELETE_ORGAN, deleteOrgan);
}
export default function* Auth() {
    yield all([
        actionWatcherAddOrgan(),
        actionWatcherEditOrgan(),
        actionWatcherDeleteOrgan()
    ]);
}
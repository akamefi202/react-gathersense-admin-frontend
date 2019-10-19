import { 
    put, 
    takeLatest, 
    all, 
    //select 
} from 'redux-saga/effects';
import { 
    ADD_ADMIN,
    ADD_ADMIN_START,
    ADD_ADMIN_END,
    ADD_ADMIN_URL,
    ADD_ADMIN_FAILED,
    ADD_ADMIN_SUCCESS,
    EDIT_ADMIN,
    EDIT_ADMIN_START,
    EDIT_ADMIN_END,
    EDIT_ADMIN_URL,
    EDIT_ADMIN_FAILED,
    EDIT_ADMIN_SUCCESS,
    DELETE_ADMIN,
    DELETE_ADMIN_START,
    DELETE_ADMIN_END,
    DELETE_ADMIN_URL,
    DELETE_ADMIN_FAILED,
    DELETE_ADMIN_SUCCESS,
  } from '../common/ActionTypes';

//const getToken = (state) => state.Auth.token;

function* addAdmin(action) {
    //const token = yield select(getToken);
    const token = localStorage.getItem('GSAtoken');

    yield put({ type: ADD_ADMIN_START, addstate: ADD_ADMIN_START });

    try {
        yield fetch(ADD_ADMIN_URL, {
            method: 'POST',
            headers: {
                authorization: token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": action.payload.name,
                "email": action.payload.email,
                "password": action.payload.password,
            })
        })
        .then(
            response => response.json()
        )
        .then((responseJson) => {
            return responseJson.administrator;
        })
        // .then(            
        // )

        yield put({ type: ADD_ADMIN_SUCCESS, addstate: ADD_ADMIN_SUCCESS});
        // //refresh
        action.call()
    }catch (error) {
        let errorMessage;
        console.log(error.status)
        switch (error.status) {
            case 500: errorMessage = 'Internal Server Error'; break;
            case 422: errorMessage = 'Invalid credentials'; break;
            default: errorMessage = 'Something went wrong'; break;
        }
        yield put({ type: ADD_ADMIN_END, addstate: ADD_ADMIN_FAILED, errorMessage: errorMessage});
    }
}

function* actionWatcherAddAdmin() {
    yield takeLatest(ADD_ADMIN, addAdmin);
}

function* EditAdmin(action) {
    const token = localStorage.getItem('GSAtoken');
    
    yield put({ type: EDIT_ADMIN_START, addstate: EDIT_ADMIN_START });
    try {
        yield fetch(EDIT_ADMIN_URL, {
            method: 'PUT',
            headers: {
                authorization: token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": action.payload.id,
                "name": action.payload.name,
                "email": action.payload.email,
                "password": action.payload.password,
            })
        })
        .then(
            response => response.json()
        )
        .then((responseJson) => {
            return responseJson.administrator;
        })

        yield put({ type: EDIT_ADMIN_SUCCESS, editstate: EDIT_ADMIN_SUCCESS});
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
        yield put({ type: EDIT_ADMIN_END, editstate: EDIT_ADMIN_FAILED, errorMessage: errorMessage});
    }
}

function* actionWatcherEditAdmin() {
    yield takeLatest(EDIT_ADMIN, EditAdmin);
}

function* DeleteAdmin(action) {
    const token = localStorage.getItem('GSAtoken');
    

    yield put({ type: DELETE_ADMIN_START, addstate: DELETE_ADMIN_START });
    try {
        yield fetch(DELETE_ADMIN_URL, {
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
        yield put({ type: DELETE_ADMIN_SUCCESS, editstate: DELETE_ADMIN_SUCCESS});
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
        yield put({ type: DELETE_ADMIN_END, editstate: DELETE_ADMIN_FAILED, errorMessage: errorMessage});
    }
}

function* actionWatcherDeleteAdmin() {
    yield takeLatest(DELETE_ADMIN, DeleteAdmin);
}

export default function* Auth() {
    yield all([
        actionWatcherAddAdmin(),
        actionWatcherEditAdmin(),
        actionWatcherDeleteAdmin(),
    ]);
}
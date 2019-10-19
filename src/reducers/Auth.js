import {
  LOGIN_START,
  LOGIN_END,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  SETUSERNAME,
} from '../common/ActionTypes';

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  initURL: '',
  authUser: localStorage.getItem('user_id'),

  loading: false,
  userName: localStorage.getItem('GSAuserName'),
  token: '',
  errorMessage: '',
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        data: action.payload,
        loading: true,
      }
    }
    case LOGIN_END: {
      return {        
        ...state,
        loginstate: action.loginstate,
        errorMessage: action.errorMessage,
        email: action.email,
        id: action.id,
        userName: action.name,
        token: action.token,
        loading: false,
      }
    }
    case LOGOUT: {
      return {        
        ...state,
        email: '',
        id: '',
        userName: '',
        token: '',
        logoutstate: '',
        errorMessage: '',
      }
    }
    case LOGOUT_SUCCESS: {
      return {        
        ...state,
        email: '',
        id: '',
        userName: '',
        token: '',
        logoutstate: action.logoutstate,
      }
    }
    case LOGOUT_FAILED: {
      return {        
        ...state,
        email: '',
        id: '',
        userName: '',
        token: '',
        errorMessage: action.errorMessage,
      }
    }
    case SETUSERNAME: {
      return {        
        ...state,
        userName: action.name,
      }
    }
    default:
      return state;
  }
}

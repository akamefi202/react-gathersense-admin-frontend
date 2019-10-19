import {
  LOGIN_START,
  LOGOUT,
  SETUSERNAME,
} from '../common/ActionTypes';


export const Login = (data) => ({
  type: LOGIN_START,
  payload: data,
});

export const Logout = () => ({
  type: LOGOUT,
})

export const setUserName = (name) => ({
  type: SETUSERNAME,
  name: name,
})

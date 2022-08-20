import {
  ACT_LOGIN_SUCCESS,
  ACT_LOGOUT
} from "./actions";

const intState = {
  token: '',
  currentUser: null
}

function reducer(authState = intState, action) {
  switch (action.type) {
    case ACT_LOGIN_SUCCESS:
      localStorage.setItem('access_token', action.payload.token)
      return {
        token: action.payload.token,
          currentUser: action.payload.user
      }
      case ACT_LOGOUT:
        localStorage.removeItem('access_token');
        return {
          token: '',
            currentUser: null
        }
        default:
          return authState;
  }
}

export default reducer;
import _ from 'lodash';
import AuthManager from '../utils/AuthManager';
import { LOGIN } from '../actions/LoginActions';

let initialState = {
  login: false
};

function loginStatus(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      AuthManager.login(action.user);
      return {login: true};

    default:
      return state;
  }
}


export default loginStatus;

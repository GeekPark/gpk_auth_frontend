import _ from 'lodash';
import { combineReducers } from 'redux';

import { LOGIN } from '../actions/LoginActions';
import { SUCCESS_MSG, ERROR_MSG } from '../actions/MessageAction';

function loginStatus(state = {login: false}, action) {
  switch (action.type) {
    case LOGIN:
      // todo: change something
      return _.assign({}, state);

    default:
      return state;
  }
}

const initialFlashState = {
  type: 'success',
  text: '默认的消息'
};

function flashUpdate(state = initialFlashState, action) {
  let newState = _.assign({}, state);

  switch (action.type) {
    case SUCCESS_MSG:
      newState.type = 'success';
      newState.text = action.text;
      break;
    case ERROR_MSG:
      newState.type = 'error';
      newState.text = action.text;
      break;
  }

  return newState;
}

const rootReducer = combineReducers({
  flash: flashUpdate
});

export default rootReducer;

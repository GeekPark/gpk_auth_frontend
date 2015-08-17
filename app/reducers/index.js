import _ from 'lodash';
import { combineReducers } from 'redux';

import { LOGIN, SWITCH_PANEL } from '../actions/LoginActions';
import { SUCCESS_MSG, ERROR_MSG, HIDE_MSG } from '../actions/MessageAction';

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
  text: '默认的消息',
  isShow: false
};

function flashUpdate(state = initialFlashState, action) {
  let newState = _.assign({}, state);

  switch (action.type) {
    case SUCCESS_MSG:
      newState.type = 'success';
      newState.text = action.text;
      newState.isShow = true;
      break;
    case ERROR_MSG:
      newState.type = 'error';
      newState.text = action.text;
      newState.isShow = true;
      break;
    case HIDE_MSG:
      newState.isShow = false;
      break;
  }

  return newState;
}

function switchPanel(state = { nowPanel: 'signin' }, action) {
  let newState = _.assign({}, state);

  switch (action.type) {
    case SWITCH_PANEL:
      newState.nowPanel = action.nowPanel;
      break;
  }
  
  return newState;
}

const rootReducer = combineReducers({
  flash: flashUpdate,
  panel: switchPanel
});

export default rootReducer;

import _ from 'lodash';
import { combineReducers } from 'redux';

import * as TYPE from '../actions/ActionTypes';

const initialFlashState = {
  type: 'success',
  text: '默认的消息',
  isShow: false
};

function flashUpdate(state = initialFlashState, action) {
  let newState = _.assign({}, state);

  switch (action.type) {
    case TYPE.SUCCESS_MSG:
      newState.type = 'success';
      newState.text = action.text;
      newState.isShow = true;
      break;
    case TYPE.ERROR_MSG:
      newState.type = 'error';
      newState.text = action.text;
      newState.isShow = true;
      break;
    case TYPE.HIDE_MSG:
      newState.isShow = false;
      break;
  }

  return newState;
}

function switchPanel(state = { nowPanel: 'signin' }, action) {
  let newState = _.assign({}, state);

  switch (action.type) {
    case TYPE.SWITCH_PANEL:
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

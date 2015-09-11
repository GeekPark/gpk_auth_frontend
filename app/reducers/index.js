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

//modal reducer
const initialModalState = {
  type: 'colse',
  contentPath: 'ContentsPath',
  title: 'Title'
};

function modalUpdate(state = initialModalState, action) {
  let newState = _.assign({}, state);
  switch (action.type) {
    case TYPE.OPEN_MODAL:
      newState.type = 'open';
      newState.title = action.title;
      newState.contentPath = action.contentPath;
      break;
    case TYPE.CLOSE_MODAL:
      newState.type = 'colse';
  }
  return newState;
}
//modal reducer end


//info reducer
const initialInfoState = {
  nowContent: 'personal'
};
function switchInfo(state = initialInfoState, action){
  let newState = _.assign({}, state);

  switch (action.type){
    case TYPE.SWITCH_INFO:
      newState.nowContent = action.nowContent;
      break;
  }
  return newState;
}
//info reducer end

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
  panel: switchPanel,
  modal: modalUpdate,
  info: switchInfo
});

export default rootReducer;

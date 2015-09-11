import * as TYPE from './ActionTypes';
const DELAY_TIME = 2000;

export let flashHide = ()  =>
  ({type: TYPE.HIDE_MSG});


export function flashSuccess(text) {
  return dispatch => {
    dispatch({
      type: TYPE.SUCCESS_MSG,
      text: text
    });
    setTimeout(() => dispatch(flashHide()), DELAY_TIME);
  };
}

export function flashError (text) {
  return dispatch => {
    dispatch({
      type: TYPE.ERROR_MSG,
      text: text
    });
    setTimeout(() => dispatch(flashHide()), DELAY_TIME);
  };
}

export const openModal = (title, path) =>
  ({type: TYPE.OPEN_MODAL, title: title, contentPath: path});

export const closeModal = () =>
  ({type: TYPE.CLOSE_MODAL});

export const switchPanel = panel =>
  ({ type: TYPE.SWITCH_PANEL, nowPanel: panel });

export const switchInfo = content =>
  ({ type: TYPE.SWITCH_INFO, nowContent: content });

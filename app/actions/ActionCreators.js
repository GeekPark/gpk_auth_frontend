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

export const switchPanel = panel =>
  ({ type: TYPE.SWITCH_PANEL, nowPanel: panel });

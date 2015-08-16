const DELAY_TIME = 2000;

export const SUCCESS_MSG = 'SUCCESS_MSG';
export function flashSuccess(text) {
  return dispatch => {
    dispatch({
      type: SUCCESS_MSG,
      text: text
    });
    dispatch(setTimeout(() => dispatch(flashHide()), DELAY_TIME));
  };
}

export const ERROR_MSG = 'ERROR_MSG';
export function flashError (text) {
  return dispatch => {
    dispatch({
      type: ERROR_MSG,
      text: text
    });
    dispatch(setTimeout(() => dispatch(flashHide()), DELAY_TIME));
  };
}

export const HIDE_MSG = 'HIDE_MSG';
let flashHide = ()  => ({type: HIDE_MSG});

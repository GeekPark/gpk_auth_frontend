const DELAY_TIME = 2000;

export const HIDE_MSG = 'HIDE_MSG';
export let flashHide = ()  => ({type: HIDE_MSG});

export const SUCCESS_MSG = 'SUCCESS_MSG';
export function flashSuccess(text) {
  return dispatch => {
    dispatch({
      type: SUCCESS_MSG,
      text: text
    });
    setTimeout(() => dispatch(flashHide()), DELAY_TIME);
  };
}

export const ERROR_MSG = 'ERROR_MSG';
export function flashError (text) {
  return dispatch => {
    dispatch({
      type: ERROR_MSG,
      text: text
    });
    setTimeout(() => dispatch(flashHide()), DELAY_TIME);
  };
}

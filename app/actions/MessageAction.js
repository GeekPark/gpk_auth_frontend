export const SUCCESS_MSG = 'SUCCESS_MSG';
export function flashSuccess(text) {
  return {
    type: SUCCESS_MSG,
    text: text
  };
}

export const ERROR_MSG = 'ERROR_MSG';
export function flashError (text) {
  return {
    type: ERROR_MSG,
    text: text
  };
}

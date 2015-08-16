import $ from 'jquery';
import { findDOMNode } from 'react';
import { flashSuccess, flashError, flashHide, delayHide } from '../actions/MessageAction';

// get react jsx input/select value
export function getInputValue (refName){
  let dom = findDOMNode(this.refs[refName]);
  // note: if <select> should return value
  switch(dom.type) {
    case 'checkbox':
      return dom.checked;
    default:
      return dom.value.trim();
  }
}

export function handleError(dispatch) {
  return (jqXHR) => {
    dispatch(flashError(getErrorText(jqXHR)));
  };
}

export function getErrorText(jqXHR) {
  return jqXHR && jqXHR.responseText ?
    $.parseJSON(jqXHR.responseText).error
    : 'ops 发生了未知的错误 ...';
}

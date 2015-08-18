import $ from 'jquery';
import _ from 'lodash';
import { findDOMNode } from 'react';

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

export function getErrorText(jqXHR) {
  return jqXHR && jqXHR.responseText ?
    $.parseJSON(jqXHR.responseText).error
    : 'ops 发生了未知的错误 ...';
}

const reg = {
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
};

const rules = {
  'isRequire': {
    check: value => _.isEmpty(value) ? false : true,
    message: '不能为空'
  },
  'email': {
    check: value => reg.email.test(value.toString()),
    message: '不是合法的邮件地址'
  }
};

let checkRule = (value, rule, name, errorHandle) => {
  let result = rules[rule].check(value);
  if(!result) errorHandle(name + rules[rule].message);
  return result;
};

export function validateAll(items, errorHandle) {
  return items.every(item => {
    return item.rule.every(rule => {
      return checkRule(item.value, rule, item.ref, errorHandle);
    });
  });
}

import $ from 'jquery';
import _ from 'lodash';
import { findDOMNode } from 'react';

const reg = {
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
};

const nameHash = {
  'email': '邮箱',
  'password': '密码',
  'captcha': '验证码'
};

const translateName = value =>
  _.isString(nameHash[value]) ? nameHash[value] : value;

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
  if(jqXHR && jqXHR.responseText) {
    let res;
    try {
      res = $.parseJSON(jqXHR.responseText);
    }
    catch (e) {
      return '无法解析的返回错误，请检查服务器端 ...';
    }

    // expand all error when received a error array
    if(res.errors) {
      return _.reduce(res.errors, (result, current, key) => {
        return result + ' ' + translateName(key) + _.reduce(
          current,
          (itemResult, itemCurrent) => itemResult + itemCurrent + ' ',
          '');
      }, '');
    }

    if(res.error) return res.error;
  } else {
    return 'ops 发生了未知的错误 ...';
  }
}

const rules = {
  'isRequire': {
    check: value => _.isEmpty(value) ? false : true,
    message: '不能为空喔！'
  },
  'email': {
    check: value => reg.email.test(value.toString()),
    message: '地址不对哦！'
  },
  'minLength': {
    check: value => value.length >= 6,
    message: '太短啦！'
  }
};

let checkRule = (value, rule, name, errorHandle) => {
  let result = rules[rule].check(value);
  if(!result) errorHandle(translateName(name) + rules[rule].message);
  return result;
};

export function validateAll(items, errorHandle) {
  return items.every(item => {
    return item.rule.every(rule => {
      return checkRule(item.value, rule, item.ref, errorHandle);
    });
  });
}

export const changeHash = newHash => window.location.hash = newHash;

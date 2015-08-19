import React, { Component } from 'react';
import { getInputValue, getErrorText, validateAll } from '../utils/ReactHelper';
import AuthManager from '../utils/AuthManager';
import CONFIG from '../server_config';

class LoginForm extends Component {
  onLogin(e) {
    e.preventDefault();
    e.stopPropagation();
    const { actions } = this.props;

    // getInputValue need read local this
    let getValue = getInputValue.bind(this);

    let validateItems = [
      { ref: 'email', rule: ['isRequire', 'email'] },
      { ref: 'password', rule: ['isRequire'] },
      { ref: 'captcha', rule: ['isRequire'] }
    ];

    validateItems.map(ele => ele.value = getValue(ele.ref));

    if(!validateAll(validateItems, actions.flashError)) return;

    AuthManager.signup({
      email: getValue('email'),
      password: getValue('password'),
      captcha: getValue('captcha')
    }).then(
      (userInfo) => actions.flashSuccess('注册成功'),
      (jqXHR) => actions.flashError(getErrorText(jqXHR))
    );

  }
  render() {
    const { actions } = this.props;
    return (
      <form>
        <div className="form-content">
          <div className="form-field">
            <label htmlFor="email">邮箱：</label>
            <input id="email" autoFocus type="text" ref="email" />
          </div>
          <div className="form-field">
            <label htmlFor="password">密码：</label>
            <input id="password" type="password" ref="password" />
          </div>
          <div className="form-field captcha">
            <label htmlFor="captcha">验证码：</label>
            <input id="captcha" type="text" maxLength="4" ref="captcha" />
            <img src={CONFIG.CAPTCHA_URL} className="captcha-img" alt="验证码"
               width="80" height="27" onClick={e => e.target.src = CONFIG.CAPTCHA_URL}/>
          </div>
        </div>
        <button className="btn" onClick={(e) => this.onLogin(e)}>注册</button>
      </form>
    );
  }
}

export default LoginForm;

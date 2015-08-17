import React, { Component } from 'react';
import { getInputValue, getErrorText } from '../utils/ReactHelper';
import AuthManager from '../utils/AuthManager';

class LoginForm extends Component {
  onLogin(e) {
    const { actions } = this.props;

    // getInputValue need read local this
    let getValue = getInputValue.bind(this);

    AuthManager.login({
      email: getValue('email'),
      password: getValue('password'),
      remember_me: getValue('remember_me')
    }).then(
      (userInfo) => actions.flashSuccess('登录成功'),
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
          <div className="form-field">
            <label htmlFor="password_repeat">密码重复：</label>
            <input id="password_repeat" type="password" ref="password_repeat" />
          </div>
        </div>
        <button className="btn" onClick={(e) => this.onLogin(e)}>注册</button>
      </form>
    );
  }
}

export default LoginForm;

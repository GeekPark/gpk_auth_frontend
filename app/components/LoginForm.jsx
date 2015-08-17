import React, { Component } from 'react';
import { getInputValue, handleError } from '../utils/ReactHelper';
import { flashSuccess, flashError } from '../actions/MessageAction';
import AuthManager from '../utils/AuthManager';

class LoginForm extends Component {
  onLogin(e) {
    e.preventDefault();
    e.stopPropagation();

    const { dispatch } = this.props;

    // getInputValue need read local this
    let getValue = getInputValue.bind(this);

    AuthManager.login({
      email: getValue('email'),
      password: getValue('password'),
      remember_me: getValue('remember_me')
    }).then(
      (userInfo) => dispatch(flashSuccess('登录成功')),
      handleError(dispatch)
    );

  }
  render() {
    const { dispatch } = this.props;
    return (
      <form>
        <div className="form-field">
          <label htmlFor="email">邮箱：</label>
          <input id="email" autoFocus type="text" ref="email" />
        </div>
        <div className="form-field">
          <label htmlFor="password">密码：</label>
          <input id="password" type="password" ref="password" />
        </div>
        <div className="form-field">
          <label htmlFor="remember_me">记住我：</label>
          <input id="remember_me" type="checkbox" ref="remember_me" />
        </div>
        <button className="btn" onClick={(e) => this.onLogin(e)}>登录</button>
      </form>
    );
  }
}

export default LoginForm;
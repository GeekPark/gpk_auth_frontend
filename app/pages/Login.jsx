import React, { findDOMNode, Component, PropTypes, bindActionCreators } from 'react';

import { connect } from 'react-redux';
import Flash from '../components/Flash';
import { flashSuccess, flashError } from '../actions/MessageAction';

import AuthManager from '../utils/AuthManager';
import { getInputValue, handleError } from '../utils/ReactHelper';

class Login extends Component {
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
    const { flash, dispatch } = this.props;
    return (
      <section className="login">
        <Flash type={flash.type} text={flash.text} isShow={flash.isShow} />
        <h2>登录</h2>
        <form>
          <div className="form_field">
            <label htmlFor="email">邮箱：</label>
            <input id="email" autoFocus type="text" ref="email" />
          </div>
          <div className="form_field">
            <label htmlFor="password">密码：</label>
            <input id="password" type="password" ref="password" />
          </div>
          <div className="form_field">
            <label htmlFor="remember_me">记住我：</label>
            <input id="remember_me" type="checkbox" ref="remember_me" />
          </div>
          <button className="btn" onClick={(e) => this.onLogin(e)}>登录</button>
        </form>
      </section>
    );
  }
}

// bind some state to component props
function select(state) {
  return {
    flash: state.flash
  };
}

export default connect(select)(Login);

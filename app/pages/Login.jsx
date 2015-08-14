import $ from 'jquery';
import React, { findDOMNode, Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/LoginActions';

class Login extends Component {
  onLogin(e) {
    e.preventDefault();
    const password = findDOMNode(this.refs.password).value;
    const email = findDOMNode(this.refs.email).value;
    const remember_me = findDOMNode(this.refs.remember_me).value;
    this.props.dispatch(loginUser({ password, email, remember_me }));
  }

  render() {
    return (
      <section className="login">
        <h2>登录</h2>
        <form>
          <div className="form_field">
            <label htmlFor="email">邮箱：</label>
            <input id="email" type="text" ref="email" />
          </div>
          <div className="form_field">
            <label htmlFor="password">密码：</label>
            <input id="password" type="text" ref="password" />
          </div>
          <div className="form_field">
            <label htmlFor="remember_me">记住我：</label>
            <input id="remember_me" type="checkbox" ref="remember_me" />
          </div>
          <a href="javascript:;" className="btn" onClick={(e) => this.onLogin(e)}>登录</a>
        </form>
      </section>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  console.log(state);
  return {
    loginStatus: state.login
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Login);

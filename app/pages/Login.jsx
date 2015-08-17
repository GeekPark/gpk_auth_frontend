import React, { findDOMNode, Component, PropTypes, bindActionCreators } from 'react';
import { flashSuccess, flashError } from '../actions/MessageAction';

import { connect } from 'react-redux';

import Flash from '../components/Flash';
import LoginForm from '../components/LoginForm';

class Login extends Component {
  render() {
    const { flash, dispatch } = this.props;
    return (
      <div>
        <Flash type={flash.type} text={flash.text} isShow={flash.isShow} />
        <section className="login-wrap a-center">
          <div className="login-switch">
            <h4 className="switch-item on">登录</h4>
            <h4 className="switch-item">注册</h4>
          </div>
          <div className="login-content">
            <LoginForm dispatch={dispatch} actions={ flashSuccess } />
          </div>
        </section>
      </div>
    );
  }
}

// bind some state to component props
function mapStateToProps(state) {
  return {
    flash: state.flash
  };
}

export default connect(mapStateToProps)(Login);

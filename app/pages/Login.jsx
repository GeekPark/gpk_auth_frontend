import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as MessageActions from '../actions/MessageAction';

import { connect } from 'react-redux';

import Flash from '../components/Flash';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Switch from '../components/Switch';

class Login extends Component {
  render() {
    const switchs = [
      { title: '登录',
        panelKey: 'signin',
        component: Signin },
      { title: '注册',
        panelKey: 'signup',
        component: Signup }
    ];

    const { flash, dispatch, panel } = this.props;
    const actions = bindActionCreators(MessageActions, dispatch);

    return (
      <div>
        <Flash type={flash.type} text={flash.text} isShow={flash.isShow} />
        <section className="login-wrap a-center">
          <Switch actions={actions} switchs={switchs} panel={panel} />
        </section>
      </div>
    );
  }
}

// bind some state to component props
function mapStateToProps(state) {
  return {
    flash: state.flash,
    panel: state.panel.nowPanel
  };
}

export default connect(mapStateToProps)(Login);

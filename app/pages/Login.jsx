import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addons } from 'react/addons';
import { connect } from 'react-redux';

import * as AuthActions from '../actions/ActionCreators';

import Flash from '../components/Flash';
import Modal from '../components/Modal';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Switch from '../components/Switch';

const { CSSTransitionGroup } = addons;

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
    const { flash, dispatch, panel, modal } = this.props;
    const actions = bindActionCreators(AuthActions, dispatch);
    const showFlash = flash.isShow ? <Flash type={flash.type} text={flash.text} /> : null;
    const showModal = modal.type === 'open' ? <Modal type={modal.type} title={modal.title} contentPath={modal.contentPath} actions={actions}/> : null
    return (
      <div>
        <CSSTransitionGroup transitionName="flash">
          {showFlash}
        </CSSTransitionGroup>
        <CSSTransitionGroup transitionName="modal">
          {showModal}
        </CSSTransitionGroup>
        <button className="open-modal" onClick={()=> actions.openModal('Title', "./ModalContent")} >Open Modal</button>
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
    panel: state.panel.nowPanel,
    modal: state.modal
  };
}

export default connect(mapStateToProps)(Login);

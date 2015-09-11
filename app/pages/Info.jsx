import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addons } from 'react/addons';
import { connect } from 'react-redux';

import * as AuthActions from '../actions/ActionCreators';

import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Personal from '../components/Personal';
import Setting from '../components/Setting';

import  { SwitchContent } from '../components/SwitchTwo';
const { CSSTransitionGroup } = addons;

class Info extends Component {
  render() {
    const switchs = [
      { title: '个人信息',
        icon: 'ic-personal',
        panelKey: 'personal',
        component: Personal },
      { title: '帐号设置',
        icon: 'ic-setting',
        panelKey: 'setting',
        component: Setting }
    ];
    const { flash, dispatch, panel, modal, info } = this.props;
    const actions = bindActionCreators(AuthActions, dispatch);

    return (
      <div>
          <Sidebar  actions={actions} switchs = {switchs} panel={info.nowContent}/>
          <section className="info-main">
            <Topbar/>
            <SwitchContent switchs = {switchs} panel={info.nowContent}/>
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
    modal: state.modal,
    info: state.info
  };
}

export default connect(mapStateToProps)(Info);

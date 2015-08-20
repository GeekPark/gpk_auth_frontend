import React, { Component } from 'react';
import { addons } from 'react/addons';
import { changeHash } from '../utils/ReactHelper';

const { CSSTransitionGroup } = addons;

class Switch extends Component {
  switchHash(key) {
    let nowHash = window.location.hash;
    let newHash;
    if(nowHash.length) {
      // panel key define in Login.jsx
      if (/signin|signup/.test(nowHash)) {
        newHash = nowHash.replace(/signin|signup/, key);
      } else {
        newHash = nowHash + '&' + key;
      }
    } else {
      newHash = '#' + key;
    }
    changeHash(newHash);
  }

  componentWillMount() {
    // 页面载入时根据 URL HASH 切换对应的面板
    let nowPanel = window.location.hash.match(/signup|signin/);
    if(nowPanel) this.props.actions.switchPanel(nowPanel[0]);
  }

  render() {
    let switchCont = [], switchTitle = [];
    const { panel, switchs, actions  } = this.props;

    switchs.forEach((info, index) => {
      let isShow = info.panelKey === panel;
      let className = 'switch-item';
      let Component;
      if(isShow) {
        className += ' on';
        Component = info.component;
        switchCont.push(
          <div className="switch-cont-item" key={index} >
            <Component actions={actions}/>
          </div>
        );
      }
      switchTitle.push(
        <h4 className={className} key={index}
          onClick={(e) => {
            actions.switchPanel(info.panelKey);
            this.switchHash(info.panelKey);
          }}
        >{info.title}</h4>);
    });

    return (
      <div className="switch-wrap">
          <div className="login-switch">
            {switchTitle}
          </div>
          <div className="login-content">
            <CSSTransitionGroup transitionName="switch-anim">
              {switchCont}
            </CSSTransitionGroup>
          </div>
      </div>
    );
  }
}

export default Switch;

import React, { Component } from 'react';
import { addons } from 'react/addons';

const { CSSTransitionGroup } = addons;

class Switch extends Component {
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
          onClick={() => actions.switchPanel(info.panelKey)}
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

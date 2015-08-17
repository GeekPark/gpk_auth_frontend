import React, { Component } from 'react';

class Switch extends Component {
  render() {
    let switchCont = [], switchTitle = [];
    const { panel, switchs, actions  } = this.props;

    switchs.forEach((info, index) => {
      let isShow = info.panelKey === panel;
      let className = 'switch-item';
      let Component = null;
      if(isShow) {
        className += ' on';
        Component = info.component;
        switchCont.push(<Component actions={actions} key={index} />);
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
            {switchCont}
          </div>
      </div>
    );
  }
}

export default Switch;

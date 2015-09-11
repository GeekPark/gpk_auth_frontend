import React, { Component } from 'react';
import { addons } from 'react/addons';
import { changeHash } from '../utils/ReactHelper';


export class SwitchNav extends Component {
  switchHash(key) {
    let nowHash = window.location.hash;
    let newHash;
    newHash = '#' + key;
    changeHash(newHash);
  };
  componentWillMount() {
    // 页面载入时根据 URL HASH 切换对应的面板
    let nowHash = window.location.hash;
    if(nowHash) this.props.actions.switchInfo(nowHash.substr(1));
  };
  render() {
    const { actions, switchs, panel } = this.props;
    var navList = switchs.map((item, index) => {
      let className = 'switch-item';
      let icon = {};
      if(item.panelKey === panel){
        className += ' active';
      }
      if(item.icon){
        icon = <span className={ 'ic ' + item.icon }></span>;
      }
      return (
        <a href="javascript:;" className={className} key={index}
            onClick={ () =>{
              actions.switchInfo(item.panelKey);
              this.switchHash(item.panelKey);
            }}
        >{icon}{item.title}</a>
      );
    });

    return (
      <nav className="nav">
        {navList}
        <a href="javascript:;">活动通知</a>
        <a href="javascript:;">应用授权</a>
      </nav>
    );
  }
}



export class SwitchContent extends Component {
  render(){
    const { switchs, panel } = this.props;
    let Component;
    switchs.forEach((item, index) => {
      if(item.panelKey === panel){
        Component = item.component
      }
    });
    return (
      <Component />
    )
  }
}

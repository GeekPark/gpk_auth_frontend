import React, { Component } from 'react';

var Topbar = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState:function() {
    return {
      nameType: false,
      introType: false,
      userName: '晓风东东',
      userCompany: '极客公园',
      userJob: '交互设计'
    };
  },
  openNameType:function() {
    this.setState({nameType: true});
  },
  closeNameType:function() {
    this.setState({nameType: false});
  },
  openIntroType:function() {
    this.setState({introType: true});
  },
  closeIntroType:function() {
    this.setState({introType: false});
  },
  triggerFile:function(e){
    var event = new Event('click', { bubbles: true });
    event.stopPropagation();
    this.refs.updateFile.getDOMNode().dispatchEvent(event);
    console.log(this.refs.updateFile.getDOMNode());
  },
  render:function() {
    let userName,
        userIntro;
    if(this.state.nameType) {
      userName = (
        <div className="user-name">
          <input type="text" valueLink={this.linkState('userName')}/>
          <a className="save-btn" href="javascript:;" onClick={this.closeNameType}>确认</a>
        </div>
      );
    }else {
      userName = (
        <div className="user-name">
          <span className="name" onDoubleClick={this.openNameType}>{this.state.userName}</span>
          <a  className="ic ic-editor" href="javascript:;" onClick={this.openNameType}></a>
        </div>
      );
    }
    if(this.state.introType) {
      userIntro = (
        <div className="user-intro">
          <label>公司:</label>
          <input type="text" valueLink={this.linkState('userCompany')}/>
          <label>职位:</label>
          <input type="text" valueLink={this.linkState('userJob')}/>
          <a  className="save-btn" href="javascript:;" onClick={this.closeIntroType}>确认</a>
        </div>
      )
    }else {
      userIntro = (
        <div className="user-intro">
          <span onDoubleClick={this.openIntroType}>{this.state.userCompany}</span>
          <span onDoubleClick={this.openIntroType}>{this.state.userJob}</span>
          <a className="ic ic-editor" href="javascript:;" onClick={this.openIntroType}></a>
        </div>
      );
    }

    return (
      <div className="topbar">
        <div className="user">
          <a href="javascript:;" className="user-fav" onClick={this.triggerFile}>
            <img src="http://7mnpep.com2.z0.glb.clouddn.com/uploads/user/avatar/000/222/139/medium_9981d446ca061e5743f7911e449f81a3.jpeg" />
            <div className="fav-editor ic ic-user"></div>
            <div className="fav-bg"></div>
            <input className="hidden" type="file" name="updateFile" ref="updateFile"/>
          </a>
          <div className="user-box">
            {userName}
            {userIntro}
          </div>
        </div>
        <div className="user-blog">
          <a href="#" className="ic ic-wechat on"></a>
          <a href="#" className="ic ic-weibo"></a>
          <a href="#" className="ic ic-facebook on"></a>
          <a href="#" className="ic ic-twitter on"></a>
          <a href="#" className="ic ic-zhihu"></a>
        </div>
      </div>
    );
  }

});


export default Topbar;

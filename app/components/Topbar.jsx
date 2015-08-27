import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    return (
      <div className="topbar">
        <div className="user">
          <div className="user-fav">
            <img src="http://7mnpep.com2.z0.glb.clouddn.com/uploads/user/avatar/000/222/139/medium_9981d446ca061e5743f7911e449f81a3.jpeg" />
          </div>
          <div className="user-box">
            <div className="user-name">
              小风东东
            </div>
            <div className="user-intro">
              <span>极客公园</span>
              <span>交互设计</span>
            </div>
          </div>
        </div>
        <div className="user-blog">
          <a href="#">博客设置</a>
        </div>
      </div>
    );
  }

}


export default Topbar;

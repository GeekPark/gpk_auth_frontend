import React, { Component } from 'react';

class Setting extends Component {
  render() {
    return (
      <div className="setting">
        <h4>开启两部验证，帐号更安全！</h4>
        <div className="form-email">
          <form method="post">
            <div className="label">更换邮箱:</div>
            <div className="form-item">
              <input type="text"/>
              <button className="button blue change" type="submit">更换</button>
            </div>
          </form>
        </div>
        <div className="form-password">
          <form method="post">
            <div className="label">更改密码:</div>
            <div className="form-item">
              <div className="input-text">
                <input id="current_password" name="current_password" type="text" placeholder="原密码"/>
              </div>
              <div className="input-text">
                <input id="password" name="password" type="text" placeholder="新密码"/>
              </div>
              <div className="input-text">
                <input id="password_confirmation" name="password_confirmation" type="text" placeholder="重复密码"/>
              </div>
              <button className="button blue submit" type="submit">更改</button>
            </div>
          </form>
        </div>
        <h4>第三方帐号绑定</h4>
        <p>绑定后即可通过第三方网站登录极客公园，同时也可以将第三网站的头像同步过来，方便快捷。</p>
        <div className="bind">
          <a href="javascript:;" className="item bind-wechat">
            <span className="ic ic-wechat small"></span>
            <span>绑定微信帐号</span>
          </a>
          <a href="javascript:;" className="item bind-qq">
            <span className="ic ic-qq small"></span>
            <span>绑定微信帐号</span>
          </a>
          <a href="javascript:;" className="item bind-weibo on">
            <span className="ic ic-weibo small"></span>
            <span>绑定微博帐号</span>
          </a>
        </div>
      </div>
    );
  }

}


export default Setting;

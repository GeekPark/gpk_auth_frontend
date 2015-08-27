import React, { Component } from 'react';

class Personal extends Component {
  render() {
    return (
      <div className="personal">
        <h4>亲，来填写下个人信息吧，活动报名可能会需要喔！（ 公园会誓死捍卫您的隐私 ）</h4>
        <form action="#" method="post">
          <div className="form-content">
            <div className="form-field">
              <label htmlFor="realname">真实姓名:</label>
              <input id="realname" type="text" name="realname"/>
            </div>
            <div className="form-field">
              <label htmlFor="mobile">手机号码:</label>
              <input id="mobile" type="text" name="mobile"/>
            </div>
            <div className="form-field">
              <label htmlFor="homepage">个人主页:</label>
              <input id="homepage" type="text" name="homepage"/>
            </div>
            <div className="form-field">
              <label htmlFor="bio">自我介绍:</label>
              <textarea id="bio" name="bio" type="text"></textarea>
            </div>
          </div>
          <button type="submit">提交</button>
        </form>
      </div>
    );
  }

}


export default Personal;

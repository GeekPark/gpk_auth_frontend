import React, { Component } from 'react';
import { changeHash } from '../utils/ReactHelper';
import  {SwitchNav} from './SwitchTwo';

class Sidebar extends Component {
  render() {
    const { panel, switchs, actions  } = this.props;
    return (
      <section className="slidebar">
        <a className="geek-logo" href="javascript:;">
          <img src="http://7xiwib.com1.z0.glb.clouddn.com/geekpark-02.png" />
        </a>
        <SwitchNav actions={actions} switchs = {switchs} panel={panel} />
        <div className="copyright">
          © 2015<br/>
          北京中明万长管理咨询有限公司
        </div>
      </section>
    );
  }
}


export default Sidebar;

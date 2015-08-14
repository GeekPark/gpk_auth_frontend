import $ from 'jquery';

import config from '../server_config';

const AuthManager = {
  login(user) {
    return $.ajax({
      url: config.login_url,
      dataType: 'json',
      method: 'post',
      data: { user }
    });
  }

};

export default AuthManager;

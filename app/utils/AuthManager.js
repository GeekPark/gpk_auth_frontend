import $ from 'jquery';

import config from '../server_config';

const AuthManager = {
  login(email, password, remember_me) {
    return $.ajax({
      url: config.login_url,
      dataType: 'json',
      method: 'post',
      data: {
        user: {
          email, password, remember_me
        }
      }
    });
  }

};

export default AuthManager;

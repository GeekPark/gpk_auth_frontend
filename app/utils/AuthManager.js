import $ from 'jquery';

import config from '../server_config';

const AuthManager = {
  signin(user) {
    return $.ajax({
      url: config.signin_url,
      dataType: 'json',
      method: 'post',
      data: { user }
    });
  },

  signup(user) {
    return $.ajax({
      url: config.signup_url,
      dataType: 'json',
      method: 'post',
      data: { user }
    });
  }

};

export default AuthManager;

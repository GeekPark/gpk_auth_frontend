import $ from 'jquery';

import CONFIG from '../server_config';

const AuthManager = {
  signin(user) {
    return $.ajax({
      url: CONFIG.SIGNIN_URL,
      dataType: 'json',
      method: 'post',
      data: user
    });
  },

  signup(user) {
    return $.ajax({
      url: CONFIG.SIGNUP_URL,
      dataType: 'json',
      method: 'post',
      data: user
    });
  }

};

export default AuthManager;

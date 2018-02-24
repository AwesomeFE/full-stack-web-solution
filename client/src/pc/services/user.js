import Service from './basic';

class UserService extends Service {
  preLogin() {
  }

  login(data) {
    const { axios, apiUrls } = this;

    axios(apiUrls.SIGNIN(data));
  }
}

export const User = new UserService();
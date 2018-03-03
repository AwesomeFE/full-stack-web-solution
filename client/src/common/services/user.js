import Service from '../basic/Service';

class UserService extends Service {
  preLogin() {
  }

  async signin(data) {
    const { axios, apiUrls } = this;

    await axios(apiUrls.SIGNIN(data));
  }

  async signup(data) {
    const { axios, apiUrls } = this;

    await axios(apiUrls.SIGNUP(data));
  }
}

export const User = new UserService();
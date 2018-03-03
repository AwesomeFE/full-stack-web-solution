import { User } from '../../services';

export const actions = {
  preLogin({ commit, state }) {
    console.log('preLogin');
  },
  async signin({ commit, state }, formData) {
    await User.signin(formData);
  },
  async signup({ commit, state }, formData) {
    await User.signup(formData);
  }
};

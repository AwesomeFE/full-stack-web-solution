import * as Service from '../../services';

export const actions = {
  preLogin({ commit, state }) {
    console.log('preLogin');
  },
  async signin({ commit, state }) {
    console.log(Service.User)
  }
};

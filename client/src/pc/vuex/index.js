import Vuex from 'vuex';
import { state, actions, getters, mutations } from './root';
import * as user from './user';

export default () => new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    user
  }
})

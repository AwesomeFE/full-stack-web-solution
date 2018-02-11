import Vuex from 'vuex';
import { state, actions, getters, mutations } from './root';

export default () => new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== 'production',

  modules: {
  }
})

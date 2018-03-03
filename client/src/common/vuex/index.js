import { state, actions, getters, mutations } from './root';
import * as user from './user';

class CommonStore {
  state = state;
  getters = getters;
  actions = actions;
  mutations = mutations;
  strict = process.env.NODE_ENV !== 'production';

  modules = {
    user
  };

  constructor(options = {}) {
    const { disableModules = [] } = options;
    
    for(const moduleName of disableModules) {
      delete this.modules[moduleName];
    }
  }
};

export default CommonStore;
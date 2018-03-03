import Vuex from 'vuex';
import { CommonStore } from '../../common';

class Store extends CommonStore {
  constructor(options) {
    super(options);
  }
}

export default () => new Vuex.Store(new Store());

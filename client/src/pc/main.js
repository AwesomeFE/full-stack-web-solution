import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueValidate from 'vee-validate';

import './assets/scss/main.scss';

import i18n from './i18n';
import store from './vuex';
import router from './router';
import initService from './services';
import initDirectives from './directives';
import initComponents from './components';

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueValidate);

initService();
initDirectives();
initComponents();

new Vue({
  i18n: i18n(),
  store: store(),
  router: router()
}).$mount('#app');
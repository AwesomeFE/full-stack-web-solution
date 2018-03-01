import VueRouter from 'vue-router';

export default () => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/App'),
      children: [
        {
          name: 'home',
          path: '/',
          component: () => import('./views/Home')
        },
        {
          path: 'entry',
          component: () => import('./views/Entry')
        },
        {
          path: '*',
          component: () => import('./views/NotFound')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
});

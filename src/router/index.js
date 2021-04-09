import Vue from 'vue';
import Router from 'vue-router';
import Landing from '../views/landing/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
  ],
});

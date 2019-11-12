import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ListUsers from './views/ListUsers.vue';
import User from './views/User.vue';

Vue.use(Router);

export default new Router({
  base: 'app',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/ListUsers',
      component: ListUsers
    },
    {
      path: '/:id',
      component: User
    },

  ]
})
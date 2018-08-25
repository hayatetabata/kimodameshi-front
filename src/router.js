import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home.vue'
import NotFoundComponent from './page/NotFoundComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lounge/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './page/CreateLounge.vue')
    },
    { path: '*', component: NotFoundComponent }
  ]
})

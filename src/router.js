import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./page/Home.vue'),
    },
    {
      path: '/lounge/',
      name: 'CreateLounge',
      component: () => import('./page/CreateLounge.vue'),
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/create/',
      name: 'CreateMember',
      component: () => import('./page/CreateMember.vue'),
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/:member_id/pref',
      name: 'RegisterPref',
      component: () => import('./page/RegisterPref.vue'),
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/:member_id/result',
      name: 'Result',
      component: () => import('./page/Result.vue'),
      props: true
    },
    { 
      path: '*',
      component: () => import('./page/NotFoundComponent.vue'),
    },
  ]
})

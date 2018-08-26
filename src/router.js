import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home.vue'
import CreateLounge from './page/CreateLounge.vue'
import ShareLounge from './page/ShareLounge.vue'
import CreateMember from './page/CreateMember.vue'
import WaitingMember from './page/WaitingMember.vue'
import RegisterPref from './page/RegisterPref.vue'
import WaitingResult from './page/WaitingResult.vue'
import Result from './page/Result.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/lounge/',
      name: 'CreateLounge',
      component: CreateLounge,
      props: true
    },
    {
      path: '/lounge/:lounge_id',
      name: 'ShareLounge',
      component: ShareLounge,
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/create/',
      name: 'CreateMember',
      component: CreateMember,
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/waiting',
      name: 'WaitingMember',
      component: WaitingMember,
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/:member_id/pref',
      name: 'RegisterPref',
      component: RegisterPref,
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/:member_id/result/waiting',
      name: 'WaitingResult',
      component: WaitingResult,
      props: true
    },
    {
      path: '/lounge/:lounge_id/members/:member_id/result',
      name: 'Result',
      component: Result,
      props: true
    },
    { 
      path: '*',
      component: () => import('./page/NotFoundComponent.vue'),
    },
  ]
})

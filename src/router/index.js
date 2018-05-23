import Vue from 'vue'
import Router from 'vue-router'
import Julia from '@/components/Julia'
import Reddit from '@/components/Reddit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/kt',
      name: 'App',
      component: Reddit
    },
    {
      path: '/julia',
      component: Julia
    },
  ],
  mode: 'history'
})

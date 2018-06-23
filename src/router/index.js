import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import chat from '@/components/chat'
import selection from '@/components/selection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'selection',
          component: selection
        },
        {
          path: 'chat',
          name: 'chat',
          component: chat
        }
      ]
    },
   
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/views/Home')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('@/views/Login')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: ()=>import('@/views/404')
    },

  ]
})

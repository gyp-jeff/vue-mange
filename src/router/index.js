import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'mainPart',
    component: () => import('../views/main.vue'),
    children: [{
      path: '',
      name: 'home',
      component: () => import('../views/home/home.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/User.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/goods/goods.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/other/page1')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/other/page2')
    }]
  },

]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router

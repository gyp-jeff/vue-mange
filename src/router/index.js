import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
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

router.beforeEach((to, from, next) => {

  if (!localStorage.getItem('token') && to.name !== 'login') {
    localStorage.removeItem('token')
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router

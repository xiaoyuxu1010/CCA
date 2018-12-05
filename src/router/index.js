import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Layout from '@/views/layout/index'
// import { isLoggedIn } from '@/utils/oauth'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/oauth2-login',
    name: 'OAuth',
    component: () => import('@/views/oauth/index'),
    hidden: true,
    meta: { requiresAuth: false }
  }, {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  }, {
    path: '',
    component: Layout,
    redirect: { name: 'Configuration' },
    children: [
      {
        path: 'configuration',
        component: () => import('@/views/configuration/index'),
        name: 'Configuration',
        meta: { requiresAuth: true, title: 'configuration', icon: 'configuration' }
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: 'ccaportal',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  store.dispatch('GenerateRoutes')
  next()
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.requiresAuth) && !isLoggedIn()) {
//     next({ name: 'OAuth' })
//   }

//   next()
// })

export default router

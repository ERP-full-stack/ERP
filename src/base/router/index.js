import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'vue-router'
// import { getRoutes } from './../utils/router'
import Layout from './../layout/index'
import Error from './error'

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const getModuleRoutes = (context) => {
  const children = []
  context.keys().forEach(key => {
    let route = context(key).default
    if (route && route.name && route.chunks) {
      children.push(route)
    }
  })
  return children
}

const chunkRouters = []
const routerModule = getModuleRoutes(require.context('../../', true, /router\/index\.js$/))
console.log(routerModule)

routerModule.forEach(module => {
  Object.keys(module.chunks).forEach(v => {
    chunkRouters.push(...module.chunks[v])
  })
})

console.log(chunkRouters)

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'selColor',
  linkExactActiveClass: 'selColor',
  routes: [
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login,
    // },
    {
      path: '/',
      component: Layout,
      children: [
        ...chunkRouters,
        ...Error
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router

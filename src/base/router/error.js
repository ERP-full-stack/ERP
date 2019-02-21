const Error404 = () => import(/* webpackChunkName: "error" */ './../pages/error/404')
const Error403 = () => import(/* webpackChunkName: "error" */ './../pages/error/403')
const Error500 = () => import(/* webpackChunkName: "error" */ './../pages/error/500')

export default [
  {
    path: '/error403',
    name: 'error403',
    component: Error403
  },
  {
    path: '/error404',
    name: 'error404',
    component: Error404
  },
  {
    path: '/error500',
    name: 'error500',
    component: Error500
  },
  {
    path: '*',
    redirect: '/error404'
  }
]

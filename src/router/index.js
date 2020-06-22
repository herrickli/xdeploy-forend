import Vue from 'vue'
import VueRouter from 'vue-router'
//import MainPage from '../views/detectPage'

Vue.use(VueRouter)

const MainPage = () => import('../views/detectPage')
const Test = () => import('../views/test')
const ClassifyPage = () => import('../views/classifyPage')

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/detect'
  },
  {
    path: '/detect',
    name: 'detect',
    component: MainPage
  },
  {
    path: '/classify',
    name: 'classify',
    component: ClassifyPage
  },
  {
    path: '/test',
    component: Test
  }
]

const router = new VueRouter({
  //mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

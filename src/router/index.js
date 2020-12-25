import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', //root routing
    name: 'Home',
    component: Home
  },
  {
    path: '/tentang',
    name: 'Tentang',
    component: () => import(/* webpackChunkName: "tentang" */ '../views/About.vue'),
    children: [
      {
        path: 'future',
        component: () => import(/* webpackChunkName: "tentang" */ '../views/Tentang/Future.vue')
      },
      {
        path: 'now',
        component: () => import(/* webpackChunkName: "tentang" */ '../views/Tentang/Now.vue')
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/contact/:nohp',
    name: 'ContactNohp',
    component: () => import(/* webpackChunkName: "contactnohp" */ '../views/Contact.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

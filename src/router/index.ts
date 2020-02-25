import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import NowPlaying from '@/views/NowPlaying.vue'
import ComingSoon from '@/views/ComingSoon.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'Films',
    redirect: '/films/nowplaying',
    component: () => import('@/views/Film.vue'),
    children: [
      {
        path: '/films/nowPlaying',
        name: 'nowPlaying',
        component: () => import('@/views/NowPlaying.vue')
      },
      {
        path: '/films/comingSoon',
        name: 'comingSoon',
        component: () => import('@/views/ComingSoon.vue')
      }
    ]
  },
  {
    path: '/cinemas',
    name: 'cinemas',
    component: () => import('@/views/Cinema.vue')
  },
  {
    path: '/detail/:filmId',
    component: () => import('@/views/Films.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: () => import('@/views/Center.vue')
  },
  {
    path: '/cinemas/search',
    name: 'search',
    component: () => import('@/views/Search.vue')
  },
  {
    path: '/',
    redirect: '/films/nowplaying'
  }

]

const router = new VueRouter({
  routes
})

export default router

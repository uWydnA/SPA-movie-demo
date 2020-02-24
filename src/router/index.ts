import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import Cinema from '@/views/Cinema.vue'
import Center from '@/views/Center.vue'
import NowPlaying from '@/views/NowPlaying.vue'
import ComingSoon from '@/views/ComingSoon.vue'
import Search from '@/views/Search.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/films',
    name: 'Films',
    redirect : '/films/nowplaying',
    component: Film,
    children: [
      {
        path: '/films/nowPlaying',
        name: 'nowPlaying',
        component: NowPlaying
      },
      {
        path: '/films/comingSoon',
        name: 'comingSoon',
        component: ComingSoon
      }
    ]
  },
  {
    path: '/cinemas',
    name: 'cinemas',
    component: Cinema
  },
  {
    path : '/detail/:filmId',
    component : ()=>import('@/views/Films.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/cinemas/search',
    name: 'search',
    component: Search
  },
  {
    path : '/',
    redirect : '/films/nowplaying'
  }

]

const router = new VueRouter({
  routes
})

export default router

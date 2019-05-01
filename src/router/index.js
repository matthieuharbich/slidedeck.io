import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Slides from '@/components/Slides'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/presentation/:name',
      name: 'Slides',
      component: Slides
    }
  ]
})

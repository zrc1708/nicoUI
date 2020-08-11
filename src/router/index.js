import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import test1 from '../examples/test1.vue'
import test2 from '../examples/test2.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Home,
      children:[{
          path: '/test1',
          component: test1
      },{
          path: '/test2',
          component: test2
      }]
    }
]

const router = new VueRouter({
  routes
})

export default router

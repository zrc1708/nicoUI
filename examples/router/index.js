import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import index from '../views/index.vue'

import test1 from '../examples/test1.vue'
import test2 from '../examples/test2.vue'
import test3 from '../examples/test3.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: index,
      children:[{
          path: '/test1',
          component: test1
      },{
          path: '/test2',
          component: test2,
          children:[{
            path:'/test3',
            component:test3
          }]
      }]
    }
]

const router = new VueRouter({
  routes
})

export default router

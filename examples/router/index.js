import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import index from '../views/index.vue'
import component from '../views/component.vue'

import downlod from '../views/download.vue'
import link from '../views/link.vue'
import button from '../views/button.vue'

import test1 from '../examples/test1.vue'
import test2 from '../examples/test2.vue'
import test3 from '../examples/test3.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: index,
    },{
      path: '/component',
      component: component,
      children:[
          {path:'/download',component:downlod},
          {path:'/link',component:link},
          {path:'/button',component:button}
      ]
    },{
      path:'/home',
      component:Home
    }
]

const router = new VueRouter({
  routes
})

export default router

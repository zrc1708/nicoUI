import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import index from '../views/index.vue'
import component from '../views/component.vue'

import downlod from '../views/download.vue'
import link from '../views/link.vue'
import button from '../views/button.vue'
import radio from '../views/radio.vue'
import checkbox from '../views/checkbox.vue'
import input from '../views/input.vue'
import numberinput from '../views/numberinput.vue'
import select from '../views/select.vue'
import myswitch from '../views/switch.vue'
import badage from '../views/badage.vue'
import tag from '../views/tag.vue'
import upload from '../views/upload.vue'
import breadcrumb from '../views/breadcrumbs.vue'
import prompt from '../views/prompt.vue'
import swiper from '../views/swiper.vue'
import nav from '../views/nav.vue'
import tabs from '../views/tabs.vue'
import drawer from '../views/drawer.vue'
import message from '../views/message.vue'
import messagebox from '../views/messagebox.vue'
import dialog from '../views/dialog.vue'

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
      redirect:'/component/download',
      children:[
          {path:'download',component:downlod},
          {path:'link',component:link},
          {path:'button',component:button},
          {path:'radio',component:radio},
          {path:'checkbox',component:checkbox},
          {path:'input',component:input},
          {path:'numberinput',component:numberinput},
          {path:'select',component:select},
          {path:'switch',component:myswitch},
          {path:'badage',component:badage},
          {path:'tag',component:tag},
          {path:'upload',component:upload},
          {path:'breadcrumb',component:breadcrumb},
          {path:'prompt',component:prompt},
          {path:'swiper',component:swiper},
          {path:'nav',component:nav},
          {path:'tabs',component:tabs},
          {path:'drawer',component:drawer},
          {path:'message',component:message},
          {path:'messagebox',component:messagebox},
          {path:'dialog',component:dialog},
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

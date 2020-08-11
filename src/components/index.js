import Vue from 'vue'

// 导入单个组件
import button from './button/button.vue'
import input from './input/input.vue'
import swiper from './swiper/swiper.vue'
import swiperitem from './swiper/swiper-item.vue'
import niswitch from './switch/switch.vue'
import badage from './badage/badage.vue'
import dialog from './dialog/dialog.vue'
import prompt from './prompt/prompt.vue'
import link from './link/link.vue'
import upload from './upload/upload.vue'
import select from './select/select.vue'
import selectoption from './select/selectoption.vue'
import tag from './tag/tag.vue'
import breadcrumb from './breadcrumbs/breadcrumb.vue'
import breadcrumbitem from './breadcrumbs/breadcrumbitem.vue'

import Message from './message/message.js'
import MessageBox from './messagebox/messagebox.js'


if (!window.install) {
    Vue.prototype.$message = Message
}
Vue.use(MessageBox)

// 以数组的结构保存组件，便于遍历
const components = [
    button,
    input,
    swiper,
    swiperitem,
    niswitch,
    badage,
    dialog,
    prompt,
    link,
    upload,
    select,
    tag,
    selectoption,
    breadcrumb,
    breadcrumbitem
]

// 定义 install 方法
const install = function (Vue) {
    if (install.installed) return
    install.installed = true
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components,
    
}
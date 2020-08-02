import Vue from 'vue'

// 导入单个组件
import button from './button/button.vue'
import input from './input/input.vue'
import swiper from './swiper/swiper.vue'
import swiperitem from './swiper/swiper-item.vue'

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
    swiperitem
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
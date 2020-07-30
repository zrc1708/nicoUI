import Vue from 'vue'
import Test from './test.vue'

const testComponent = Vue.extend(Test)

let instance = null

export default (options) => {
    instance || (instance = new Constructor({
        el: document.createElement('div')
    }))
    instance.options = options
    document.body.appendChild(instance.$el)
}
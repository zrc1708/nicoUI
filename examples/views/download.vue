<template>
    <div class="page-container" v-highlight>
        <h2>安装</h2>
        <h3>通过npm安装</h3>
        <pre><code>>   npm i nico-ui</code></pre>
        <h3>引入</h3>
        <pre><code>{{code}}</code></pre>
        <h3>使用</h3>
        <pre><code>Vue.use(nicoui)</code></pre>
        <p>本组件库推荐与webpack配合使用</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            code:
`import nicoui from 'nico-ui'
//引入css
import 'nico-ui/lib/nico-ui.css'`,
        }
    }
}
</script>

<style lang="less" scoped>

</style>
<template>
    <div class="page-container" v-highlight>
        <h2>Link  文字链接</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div>
                <ni-link class="link" @click="test1" underline>默认链接</ni-link>
                <ni-link class="link" type='primary' @click="test1" underline>主要链接</ni-link>
                <ni-link class="link" type='success' @click="test1" underline>成功链接</ni-link>
                <ni-link class="link" type='info' @click="test1" underline>信息链接</ni-link>
                <ni-link class="link" type='warn' @click="test1" underline>警告链接</ni-link>
                <ni-link class="link" type='danger' @click="test1" underline>危险链接</ni-link>
            </div>
        </component-box>
        <h3>禁用状态</h3>
        
    </div>
</template>

<script>
import componentbox from '../components/componentbox/conponemtbox'

export default {
    components:{
        'component-box':componentbox
    },
    data(){
        return{
            code1:
`<div>
    <ni-link class="link" @click="test1" underline>默认链接</ni-link>
    <ni-link class="link" type='primary' @click="test1" underline>主要链接</ni-link>
    <ni-link class="link" type='success' @click="test1" underline>成功链接</ni-link>
    <ni-link class="link" type='info' @click="test1" underline>信息链接</ni-link>
    <ni-link class="link" type='warn' @click="test1" underline>警告链接</ni-link>
    <ni-link class="link" type='danger' @click="test1" underline>危险链接</ni-link>
</div>`
        }
    },
    methods:{
        test1(){

        }
    }
}
</script>

<style lang="less" scoped>
.link{
    margin-right: 10px;
}
</style>
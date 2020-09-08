<template>
    <div class="page-container" v-highlight>
        <h2>Link  文字链接</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div>
                <ni-link class="link">默认链接</ni-link>
                <ni-link class="link" type='primary'>主要链接</ni-link>
                <ni-link class="link" type='success'>成功链接</ni-link>
                <ni-link class="link" type='info' >信息链接</ni-link>
                <ni-link class="link" type='warn' >警告链接</ni-link>
                <ni-link class="link" type='danger' >危险链接</ni-link>
            </div>
        </component-box>

        <h3>下划线样式</h3>
        <p>通过添加underline即可启用悬浮下划线</p>
        <component-box :code='code2'>
            <div>
                <ni-link class="link" underline>默认链接</ni-link>
                <ni-link class="link" type='primary' underline>主要链接</ni-link>
                <ni-link class="link" type='success'  underline>成功链接</ni-link>
                <ni-link class="link" type='info'  underline>信息链接</ni-link>
                <ni-link class="link" type='warn'  underline>警告链接</ni-link>
                <ni-link class="link" type='danger'  underline>危险链接</ni-link>
            </div>
        </component-box>

        <h3>禁用状态</h3>
        <p>通过添加disabled即可禁用</p>
        <component-box :code='code3'>
            <div>
                <ni-link class="link" disabled>默认链接</ni-link>
                <ni-link class="link" type='primary' disabled>主要链接</ni-link>
                <ni-link class="link" type='success' disabled>成功链接</ni-link>
                <ni-link class="link" type='info' disabled>信息链接</ni-link>
                <ni-link class="link" type='warn' disabled>警告链接</ni-link>
                <ni-link class="link" type='danger' disabled>危险链接</ni-link>
            </div>
        </component-box>

        <h3>Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
    </div>
</template>

<script>
import componentbox from '../components/componentbox/conponemtbox'
import table from '../components/table/table'

export default {
    components:{
        'component-box':componentbox,
        'my-table':table
    },
    data(){
        return{
            code1:
`<div>
    <ni-link>默认链接</ni-link>
    <ni-link type='primary'>主要链接</ni-link>
    <ni-link type='success'>成功链接</ni-link>
    <ni-link type='info' >信息链接</ni-link>
    <ni-link type='warn' >警告链接</ni-link>
    <ni-link type='danger' >危险链接</ni-link>
</div>`,
        code2:
`<div>
    <ni-link underline>默认链接</ni-link>
    <ni-link type='primary' underline>主要链接</ni-link>
    <ni-link type='success'  underline>成功链接</ni-link>
    <ni-link type='info'  underline>信息链接</ni-link>
    <ni-link type='warn'  underline>警告链接</ni-link>
    <ni-link type='danger'  underline>危险链接</ni-link>
</div>`,
        code3:
`<div>
    <ni-link disabled>默认链接</ni-link>
    <ni-link type='primary' disabled>主要链接</ni-link>
    <ni-link type='success' disabled>成功链接</ni-link>
    <ni-link type='info' disabled>信息链接</ni-link>
    <ni-link type='warn' disabled>警告链接</ni-link>
    <ni-link type='danger' disabled>危险链接</ni-link>
</div>`,
        th:[{name:'属性',key:'name'},
            {name:'说明',key:'description'},
            {name:'类型',key:'type'},
            {name:'默认值',key:'default'}],
        content:[{
            name:'type',
            description:'链接类型,可选值有default,primary,success,info,warn,danger',
            type:'string',
            default:'default'
        },{
            name:'underline',
            description:'是否下划线',
            type:'boolean',
            default:'false'
        },{
            name:'disabled',
            description:'是否禁用',
            type:'boolean',
            default:'false'
        }]
        }
    },
}
</script>

<style lang="less" scoped>
.link{
    margin-right: 10px;
}
</style>
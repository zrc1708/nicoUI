<template>
    <div class="page-container" v-highlight>
        <h2>Breadcrumbs 面包屑</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <ni-breadcrumb>
                <ni-breadcrumb-item>首页</ni-breadcrumb-item>
                <ni-breadcrumb-item>个人中心</ni-breadcrumb-item>
                <ni-breadcrumb-item>登录记录</ni-breadcrumb-item>
            </ni-breadcrumb>
        </component-box>
        <h3>改变分隔符</h3>
        <component-box :code='code2'>
            <ni-breadcrumb delimiter=">">
                <ni-breadcrumb-item>首页</ni-breadcrumb-item>
                <ni-breadcrumb-item>个人中心</ni-breadcrumb-item>
                <ni-breadcrumb-item>登录记录</ni-breadcrumb-item>
            </ni-breadcrumb>
        </component-box>

        <h3>Ni-breadcrumb Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
        <h3>Ni-breadcrumb-item Attributes</h3>
        <my-table :th='th' :content='content2'></my-table>
        <h3>Ni-breadcrumb-item Events</h3>
        <my-table :th='th2' :content='content3'></my-table>
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
`<ni-breadcrumb>
    <ni-breadcrumb-item>首页</ni-breadcrumb-item>
    <ni-breadcrumb-item>个人中心</ni-breadcrumb-item>
    <ni-breadcrumb-item>登录记录</ni-breadcrumb-item>
</ni-breadcrumb>`,
            code2:
`<ni-breadcrumb delimiter=">">
    <ni-breadcrumb-item>首页</ni-breadcrumb-item>
    <ni-breadcrumb-item>个人中心</ni-breadcrumb-item>
    <ni-breadcrumb-item>登录记录</ni-breadcrumb-item>
</ni-breadcrumb>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'delimiter',
                description:'分隔符',
                type:'string,number',
                default:'/'
            }],
            content2:[{
                name:'to',
                description:'路由跳转地址',
                type:'string',
                default:'-'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content3:[{
                name:'click',
                description:'点击事件',
                parameters:'-'
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
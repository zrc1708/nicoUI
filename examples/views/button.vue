<template>
    <div class="page-container" v-highlight>
        <h2>Button  按钮</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div>
                <ni-button class="button">默认按钮</ni-button>
                <ni-button class="button" type='primary'>主要按钮</ni-button>
                <ni-button class="button" type='success'>成功按钮</ni-button>
                <ni-button class="button" type='info'>信息按钮</ni-button>
                <ni-button class="button" type='warn'>警告按钮</ni-button>
                <ni-button class="button" type='error'>危险按钮</ni-button>
            </div>
        </component-box>
        <h3>禁用状态</h3>
        <p>通过添加disabled即可禁用</p>
        <component-box :code='code2'>
            <div>
                <ni-button class="button" disabled>默认按钮</ni-button>
                <ni-button class="button" type='primary' disabled>主要按钮</ni-button>
                <ni-button class="button" type='success' disabled>成功按钮</ni-button>
                <ni-button class="button" type='info' disabled>信息按钮</ni-button>
                <ni-button class="button" type='warn' disabled>警告按钮</ni-button>
                <ni-button class="button" type='error' disabled>危险按钮</ni-button>
            </div>
        </component-box>
        <h3>不同尺寸</h3>
        <p>nicoUI提供了四种不同尺寸的按钮，通过size即可使用</p>
        <component-box :code='code3'>
            <div>
                <ni-button>默认尺寸</ni-button>
                <ni-button size='medium'>中等尺寸</ni-button>
                <ni-button size='small'>小型尺寸</ni-button>
                <ni-button size='mini'>超小尺寸</ni-button>
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
    <ni-button>默认按钮</ni-button>
    <ni-button type='primary'>主要按钮</ni-button>
    <ni-button type='success'>成功按钮</ni-button>
    <ni-button type='info'>信息按钮</ni-button>
    <ni-button type='warn'>警告按钮</ni-button>
    <ni-button type='error'>危险按钮</ni-button>
</div>`,
            code2:
`<div>
    <ni-button disabled>默认按钮</ni-button>
    <ni-button type='primary' disabled>主要按钮</ni-button>
    <ni-button type='success' disabled>成功按钮</ni-button>
    <ni-button type='info' disabled>信息按钮</ni-button>
    <ni-button type='warn' disabled>警告按钮</ni-button>
    <ni-button type='error' disabled>危险按钮</ni-button>
</div>`,
            code3:
`<div>
    <ni-button>默认尺寸</ni-button>
    <ni-button size='medium'>中等尺寸</ni-button>
    <ni-button size='small'>小型尺寸</ni-button>
    <ni-button size='mini'>超小尺寸</ni-button>
</div>`,
        th:[{name:'属性',key:'name'},
            {name:'说明',key:'description'},
            {name:'类型',key:'type'},
            {name:'默认值',key:'default'}],
        content:[{
            name:'type',
            description:'按钮类型，可选值有default,primary,success,info,warn,error',
            type:'string',
            default:'default'
        },{
            name:'disabled',
            description:'是否禁用',
            type:'boolean',
            default:'false'
        },{
            name:'disabled',
            description:'尺寸选择，可选值有medium,small,mini，不填即为默认尺寸',
            type:'boolean',
            default:'false'
        }]
        }
    }
}
</script>

<style lang="less" scoped>
.button{
    margin-right: 10px;
}
</style>
<template>
    <div class="page-container" v-highlight>
        <h2>Radio 单选框</h2>
        <h3>基础用法</h3>
        <p>通过数据绑定即可简单实现互斥</p>
        <component-box :code='code1'>
            <div>
                <ni-radio class="radio" label="1" v-model="radio1">选项一</ni-radio>
                <ni-radio class="radio" label="2" v-model="radio1">选项二</ni-radio>
                <ni-radio class="radio" label="3" v-model="radio1">选项三</ni-radio>
            </div>
        </component-box>
        <h3>禁用状态</h3>
        <p>通过添加disabled即可禁用</p>
        <component-box :code='code2'>
            <div>
                <ni-radio class="radio" label="1" v-model="radio2">选项一</ni-radio>
                <ni-radio class="radio" label="2" v-model="radio2">选项二</ni-radio>
                <ni-radio class="radio" label="3" v-model="radio2" disabled>选项三</ni-radio>
            </div>
        </component-box>

        <h3>Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
        <h3>Events</h3>
        <my-table :th='th2' :content='content2'></my-table>
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
`<template>
    <div>
        <ni-radio label="1" v-model="radio">选项一</ni-radio>
        <ni-radio label="2" v-model="radio">选项二</ni-radio>
        <ni-radio label="3" v-model="radio">选项三</ni-radio>
    </div>
</template>
<script>
export default {
    data(){
        return{
            radio:'1'
        }
    }
}
<\/script>`,
            radio1:'1',
            radio2:'1',
            code2:
`<template>
    <div>
        <ni-radio label="1" v-model="radio">选项一</ni-radio>
        <ni-radio label="2" v-model="radio">选项二</ni-radio>
        <ni-radio label="3" v-model="radio" disabled>选项三</ni-radio>
    </div>
</template>
<script>
export default {
    data(){
        return{
            radio:'1'
        }
    }
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'label',
                description:'radio的值',
                type:'string/number/boolean',
                default:'-'
            },{
                name:'disabled',
                description:'是否禁用',
                type:'boolean',
                default:'false'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'change',
                description:'当绑定值变化时触发的事件',
                parameters:'更新后的值'
            }],
        }
    }
}
</script>
<style lang="less" scoped>
.radio{
    margin-right: 10px;
}
</style>
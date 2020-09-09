<template>
    <div  class="page-container" v-highlight>
        <h2>Numberinput 计数器</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <ni-numberinput v-model="numberinput1"></ni-numberinput>
        </component-box>
        <h3>禁用状态</h3>
        <p>添加disable属性实现禁用</p>
        <component-box :code='code2'>
            <ni-numberinput v-model="numberinput2" disable></ni-numberinput>
        </component-box>
        <h3>尺寸</h3>
        <p>通过min/max属性设置最小/最大值</p>
        <component-box :code='code3'>
            <ni-numberinput v-model="numberinput3" :min=1 :max=10></ni-numberinput>
        </component-box>
        <h3>步数</h3>
        <component-box :code='code4'>
            <ni-numberinput v-model="numberinput4" :step="2"></ni-numberinput>
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
            numberinput1:0,
            numberinput2:0,
            numberinput3:1,
            numberinput4:0,
            code1:
`<template>
    <ni-numberinput v-model="numberinput"></ni-numberinput>
</template>
<script>
export default {
    data(){
        return{
            numberinput:''
        }
    }
}
<\/script>`,
        code2:
`<template>
    <ni-numberinput v-model="numberinput" disable></ni-numberinput>
</template>
<script>
export default {
    data(){
        return{
            numberinput:''
        }
    }
}
<\/script>`,
        code3:
`<template>
    <ni-numberinput v-model="numberinput" :min=1 :max=10></ni-numberinput>
</template>
<script>
export default {
    data(){
        return{
            numberinput:''
        }
    }
}
<\/script>`,
        code4:
`<template>
    <ni-numberinput v-model="numberinput" :step="2"></ni-numberinput>
</template>
<script>
export default {
    data(){
        return{
            numberinput:''
        }
    }
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'min',
                description:'最小值',
                type:'number',
                default:'-'
            },{
                name:'max',
                description:'最大值',
                type:'number',
                default:'-'
            },{
                name:'step',
                description:'步长',
                type:'number',
                default:'1'
            },{
                name:'disable',
                description:'是否禁用',
                type:'boolean',
                default:'false'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'change',
                description:'在值改变时触发',
                parameters:'新的值'
            }],
        }
    }
}
</script>
<style lang="less" scoped>

</style>
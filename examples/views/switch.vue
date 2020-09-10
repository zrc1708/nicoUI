<template>
    <div class="page-container" v-highlight>
        <h2>Switch 开关</h2>
        <h3>基础用法</h3>
        <component-box :code="code1">
            <p>swidtchVal：{{switchVal}}</p>
            <ni-switch v-model="switchVal"></ni-switch>
        </component-box>
        <h3>文字描述</h3>
        <p>通过inactiveText/activeText属性为switch添加两侧的文字描述</p>
        <component-box :code="code2">
            <p>swidtchVal：{{switchVal2}}</p>
            <ni-switch 
                v-model="switchVal2"
                inactiveText='关闭自动续费'
                activeText='开启自动续费'></ni-switch>
        </component-box>
        <h3>自定义颜色</h3>
        <p>开关以及文字的颜色均可自定义</p>
        <component-box :code="code3">
            <p>swidtchVal：{{switchVal3}}</p>
            <ni-switch 
                v-model="switchVal3"
                activeColor='rgb(19, 206, 102)'
                inactiveColor='pink'
                checkedTextColor='rgb(19, 206, 102)'
                inactiveText='关闭自动续费'
                activeText='开启自动续费'></ni-switch>
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
            switchVal:false,
            switchVal2:false,
            switchVal3:false,
            code1:
`<template>
    <div>
        <p>swidtchVal：{{switchVal}}</p>
            <ni-switch v-model="switchVal"></ni-switch>
    </div>
</template>
<script>
export default {
    data(){
        return{
            switchVal:false,
        }
    },
}
<\/script>`,
            code2:
`<template>
    <div>
        <p>swidtchVal：{{switchVal}}</p>
        <ni-switch 
            v-model="switchVal"
            inactiveText='关闭自动续费'
            activeText='开启自动续费'></ni-switch>
    </div>
</template>
<script>
export default {
    data(){
        return{
            switchVal:false,
        }
    },
}
<\/script>`,
            code3:
`<template>
    <div>
        <p>swidtchVal：{{switchVal}}</p>
        <ni-switch 
            v-model="switchVal"
            activeColor='rgb(19, 206, 102)'
            inactiveColor='pink'
            checkedTextColor='rgb(19, 206, 102)'
            inactiveText='关闭自动续费'
            activeText='开启自动续费'></ni-switch>
    </div>
</template>
<script>
export default {
    data(){
        return{
            switchVal:false,
        }
    },
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'activeText',
                description:'开启时的文字描述',
                type:'string',
                default:'-'
            },{
                name:'inactiveText',
                description:'关闭时的文字描述',
                type:'string',
                default:'-'
            },{
                name:'checkedTextColor',
                description:'激活的文字颜色',
                type:'string',
                default:'#409eff'
            },{
                name:'activeColor',
                description:'激活时的开关颜色',
                type:'string',
                default:'#409eff'
            },{
                name:'inactiveColor',
                description:'未激活时的开关颜色',
                type:'string',
                default:'#dcdfe6'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'click',
                description:'switch被点击触发',
                parameters:'被点击后的值'
            }],
        }
    }
}
</script>
<style lang="less" scoped>

</style>
<template>
    <div class="page-container" v-highlight>
        <h2>Message 消息</h2>
        <component-box :code='code1'>
            <ni-button class="btn" @click="showMessage('default')">消息</ni-button>
            <ni-button class="btn" @click="showMessage('success')">成功</ni-button>
            <ni-button class="btn" @click="showMessage('warn')">警告</ni-button>
            <ni-button class="btn" @click="showMessage('error')">错误</ni-button>
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
    methods:{
        showMessage(type){
            this.$message({
                type,
                text:'自定义的message组件',
                time:1200,
                textColor:'#1f2f3d'
            })
        }
    },
    data(){
        return {
            code1:
`<template>
    <div>
        <ni-button class="btn" @click="showMessage('default')">消息</ni-button>
        <ni-button class="btn" @click="showMessage('success')">成功</ni-button>
        <ni-button class="btn" @click="showMessage('warn')">警告</ni-button>
        <ni-button class="btn" @click="showMessage('error')">错误</ni-button>
    </div>
<\/template>
<script>
export default {
    methods:{
        showMessage(type){
            this.$message({
                type,
                text:'自定义的message组件',
                time:1200,
                textColor:'#1f2f3d'
            })
        }
    }
}
<\/script>
<style lang="less" scoped>
.btn{
    margin-right: 10px;
}
<\/style>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'type',
                description:'消息的种类，可选值有success,error,warn,default',
                type:'string',
                default:'请输入'
            },{
                name:'text',
                description:'消息内容',
                type:'string,number,boolean',
                default:'消息提示'
            },{
                name:'time',
                description:'消息显示的时间（毫秒）',
                type:'number',
                default:'1600'
            },{
                name:'textColor',
                description:'消息文字的颜色',
                type:'string',
                default:'black'
            }],
        }
    }
}
</script>

<style lang="less" scoped>
.btn{
    margin-right: 10px;
}
</style>
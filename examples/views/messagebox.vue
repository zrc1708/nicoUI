<template>
    <div class="page-container" v-highlight>
        <h2>Messagebox 消息弹框</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <ni-button @click="showMessagebox">显示</ni-button>
        </component-box>
        <h3>带有输入及校验的Messagebox</h3>
        <p>Messagebox可以满足简单的信息采集，复杂的交互建议使用dialog</p>
        <component-box :code='code2'>
            <ni-button @click="showMessagebox2">输入邮箱</ni-button>
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
        showMessagebox(){
            this.$msgBox({
                title: '确定删除',
                content: '你确定要删除吗？删除后无法恢复',
            }).then(async (val) => {
                console.log(val)
            }).catch(() => {
                console.log('fail')
            });  
        },
        showMessagebox2(){
            this.$msgBox({
                title: '输入邮箱',
                content: '请输入你的邮箱',
                isShowInput: true,
                inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage:'请检查输入的邮箱'
            }).then(async (val) => {
                console.log(val)
            }).catch(() => {
                console.log('fail')
            });  
        }
    },
    data(){
        return {
            code1:
`<template>
    <div>
        <ni-button @click="showMessagebox">显示</ni-button>
    </div>
</template>
<script>
export default {
    methods:{
        showMessagebox(){
            this.$msgBox({
                title: '确定删除',
                content: '你确定要删除吗？删除后无法恢复',
            }).then(async (val) => {
                console.log(val)
            }).catch(() => {
                console.log('fail')
            });  
        }
    }
}
<\/script>`,
            code2:
`<template>
    <div>
        <ni-button @click="showMessagebox">输入邮箱</ni-button>
    </div>
</template>
<script>
export default {
    methods:{
        showMessagebox(){
            this.$msgBox({
                title: '输入邮箱',
                content: '请输入你的邮箱',
                isShowInput: true,
                inputPattern:${(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)+''},
                inputErrorMessage:'输入有误'
            }).then(async (val) => {
                console.log(val)
            }).catch(() => {
                console.log('fail')
            }); 
        }
    }
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'title',
                description:'标题',
                type:'string',
                default:'标题'
            },{
                name:'content',
                description:'弹框内容',
                type:'string',
                default:'这是弹框内容'
            },{
                name:'contentCenter',
                description:'内容是否居中',
                type:'boolean',
                default:'false'
            },{
                name:'isShowInput',
                description:'是否显示输入框',
                type:'boolean',
                default:'false'
            },{
                name:'inputValue',
                description:'输入框的默认值',
                type:'string,number,boolean',
                default:'-'
            },{
                name:'inputPattern',
                description:'输入校验规则（正则)',
                type:'string',
                default:'-'
            },{
                name:'inputErrorMessage',
                description:'输入错误后的消息提示',
                type:'string',
                default:'-'
            },{
                name:'isShowCancelBtn',
                description:'是否显示取消按钮',
                type:'boolean',
                default:'true'
            },{
                name:'isShowConfimrBtn',
                description:'是否显示确认按钮',
                type:'boolean',
                default:'true'
            },{
                name:'cancelBtnText',
                description:'取消按钮的文字',
                type:'string',
                default:'取消'
            },{
                name:'confirmBtnText',
                description:'确认按钮的文字',
                type:'string',
                default:'确定'
            }]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
<template>
    <div class="page-container" v-highlight>
        <h2>Dialog 对话框</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <ni-button @click="showdialog">注册</ni-button>
            <ni-dialog 
                    :visible= 'visible' 
                    title="注册" 
                    @close="closedialog">
                <ni-input style="marginBottom:10px" placeholder='用户名'></ni-input>
                <ni-input style="marginBottom:10px" placeholder='密码'></ni-input>
                <ni-input placeholder='确认密码'></ni-input>
                <span slot="footer">
                    <ni-button style="marginRight:10px" @click="closedialog">取消</ni-button>
                    <ni-button @click="closedialog">确定</ni-button>
                </span>
            </ni-dialog>
        </component-box>

        <h3>Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
        <h3>Events</h3>
        <my-table :th='th2' :content='content2'></my-table>
        <h3>Slots</h3>
        <my-table :th='th3' :content='content3'></my-table>
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
        showdialog(){
            this.visible = true
        },
        closedialog(){
            console.log('false')
            this.visible = false
        }
    },
    data(){
        return {
            visible:false,
            code1:
`<template>
    <div>
        <ni-button @click="showdialog">注册</ni-button>
        <ni-dialog 
                :visible= 'visible' 
                title="注册" 
                @close="closedialog">
            <ni-input style="marginBottom:10px" placeholder='用户名'></ni-input>
            <ni-input style="marginBottom:10px" placeholder='密码'></ni-input>
            <ni-input placeholder='确认密码'></ni-input>
            <span slot="footer">
                <ni-button style="marginRight:10px" @click="closedialog">取消</ni-button>
                <ni-button @click="closedialog">确定</ni-button>
            </span>
        </ni-dialog>
    </div>
<\/template>
<script>
export default {
    data(){
        return {
            visible:false
        }
    },
    methods:{
        showdialog(){
            this.visible = true
        },
        closedialog(){
            this.visible = false
        }
    }
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'visible',
                description:'控制对话框的显隐',
                type:'boolean',
                default:'-'
            },{
                name:'title',
                description:'对话框标题',
                type:'string,number,boolean',
                default:'标题'
            },{
                name:'havemask',
                description:'是否显示遮罩',
                type:'boolean',
                default:'true'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'close',
                description:'右上关闭按钮点击事件',
                parameters:'-'
            }],
            th3:[{name:'属性',key:'name'},
                {name:'说明',key:'description'}],
            content3:[{
                name:'footer',
                description:'对话框底部'
            }],
        }
    }
}
</script>

<style lang="less" scoped>

</style>
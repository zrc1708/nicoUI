<template>
    <div class="page-container" v-highlight>
        <h2>Input 输入框</h2>
        <h3>基础用法</h3>
        <p>Input 为受控组件，它总会显示 Vue 绑定值。</p>
        <component-box :code='code1'>
            <div>
                <ni-input 
                    style="width:300px" 
                    v-model="inputval">
                </ni-input>
                <p>输入值：{{inputval}}</p>
            </div>
        </component-box>
        <h3>一键清除</h3>
        <p>添加clearable属性实现一键清除</p>
        <component-box :code='code2'>
            <div>
                <ni-input 
                    style="width:300px" 
                    clearable
                    v-model="inputval2">
                </ni-input>
                <p>输入值：{{inputval2}}</p>
            </div>
        </component-box>
        <h3>错误样式</h3>
        <p>使用error属性控制错误样式，配合input或change事件使用简单实现数据校验</p>
        <component-box :code='code3'>
            <div>
                <ni-input 
                    style="width:300px" 
                    placeholder="请输入邮箱" 
                    :error="inputerror"
                    @input="input"
                    v-model="inputval3">
                </ni-input>
            </div>
        </component-box>
        <h3>左右标签</h3>
        <component-box :code='code4'>
            <div>
                <ni-input 
                    style="width:300px;margin-bottom:10px" 
                    v-model="inputval4">
                    <span slot="before">用户名：</span>
                </ni-input>
                <ni-input 
                    style="width:300px" 
                    v-model="inputval5">
                    <span slot="before">www.</span>
                    <span slot="after">.com</span>
                </ni-input>
            </div>
        </component-box>

        <h3>Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
        <h3>Events</h3>
        <my-table :th='th2' :content='content2'></my-table>
        <h3>Input Slots</h3>
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
    data(){
        return{
            inputval:'',
            inputval2:'',
            inputval3:'',
            inputval4:'',
            inputval5:'',
            inputerror:false,
            code1:
`<template>
    <div>
        <ni-input 
            style="width:300px" 
            v-model="inputval">
        </ni-input>
        <p>输入值：{{inputval}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputval:'',
        }
    }
}
<\/script>`,
            code2:
`<template>
    <div>
        <ni-input 
        style="width:300px" 
        clearable
        v-model="inputval">
        </ni-input>
        <p>输入值：{{inputval}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputval:'',
        }
    }
}
<\/script>`,
            code3:
`<template>
    <ni-input 
        style="width:300px" 
        placeholder="请输入邮箱" 
        :error="inputerror"
        @input="input"
        v-model="inputval">
    </ni-input>
</template>
<script>
export default {
    data(){
        return{
            inputval:'',
            inputerror:false,
        }
    },
    methods:{
        input(val){
            let email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
            if (email.test(this.inputval)) {
                this.inputerror = false
            }else {
                this.inputerror = true
            }
        }
    }
}
<\/script>`,
            code4:
`<template>
    <div>
        <ni-input 
            style="width:300px;margin-bottom:10px" 
            v-model="inputval1">
            <span slot="before">用户名：</span>
        </ni-input>
        <ni-input 
            style="width:300px" 
            v-model="inputval2">
            <span slot="before">www.</span>
            <span slot="after">.com</span>
        </ni-input>
    </div>
</template>
<script>
export default {
    data(){
        return{
            inputval1:'',
            inputval2:''
        }
    }
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'placeholder',
                description:'输入框占位文本',
                type:'string',
                default:'请输入'
            },{
                name:'clearable',
                description:'是否一键清除',
                type:'boolean',
                default:'false'
            },{
                name:'error',
                description:'是否错误',
                type:'boolean',
                default:'false'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'input',
                description:'当input值变化时触发',
                parameters:'input值'
            },{
                name:'change',
                description:'在输入框失去焦点时触发',
                parameters:'input值'
            }],
            th3:[{name:'属性',key:'name'},
                {name:'说明',key:'description'}],
            content3:[{
                name:'before',
                description:'输入框前置内容'
            },{
                name:'after',
                description:'输入框后置内容'
            }]
        }
    },
    methods:{
        input(val){
            let email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
            if (email.test(this.inputval3)) {
                this.inputerror = false
            }else {
                this.inputerror = true
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>
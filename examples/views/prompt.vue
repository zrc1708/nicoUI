<template>
    <div class="page-container" v-highlight>
        <h2>Prompt 提示</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div class="prompt-example-box">
                <div class="top">
                    <ni-prompt position='topleft'>
                        <ni-button>上左</ni-button>
                    </ni-prompt>
                    <ni-prompt position='top'>
                        <ni-button>上边</ni-button>
                    </ni-prompt>
                    <ni-prompt position='topright'>
                        <ni-button>上右</ni-button>
                    </ni-prompt>
                </div>
                <div class="left">
                    <ni-prompt position='lefttop'>
                        <ni-button>左上</ni-button>
                    </ni-prompt>
                    <ni-prompt position='left'>
                        <ni-button>左边</ni-button>
                    </ni-prompt>
                    <ni-prompt position='leftbottom'>
                        <ni-button>左下</ni-button>
                    </ni-prompt>
                </div>
                <div class="right">
                    <ni-prompt position='righttop'>
                        <ni-button>右上</ni-button>
                    </ni-prompt>
                    <ni-prompt position='right'>
                        <ni-button>右边</ni-button>
                    </ni-prompt>
                    <ni-prompt position='rightbottom'>
                        <ni-button>右下</ni-button>
                    </ni-prompt>
                </div>
                <div class="bottom">
                    <ni-prompt position='bottomleft'>
                        <ni-button>下左</ni-button>
                    </ni-prompt>
                    <ni-prompt position='bottom'>
                        <ni-button>下边</ni-button>
                    </ni-prompt>
                    <ni-prompt position='bottomright'>
                        <ni-button>下右</ni-button>
                    </ni-prompt>
                </div>
            </div>
        </component-box>
        <h3>两种主题</h3>
        <component-box :code='code2'>
            <ni-prompt position='top' theme='black' text='black'>
                <ni-button>black</ni-button>
            </ni-prompt>
            <ni-prompt position='top' theme='light' text='light'>
                <ni-button>light</ni-button>
            </ni-prompt>
        </component-box>
        <h3>允许划入</h3>
        <p>使用enterable设置让鼠标可以进入到prompt中</p>
        <component-box :code='code3'>
            <ni-prompt position='top' text='允许划入' enterable>
                <ni-button>允许划入</ni-button>
            </ni-prompt>
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
`<template>
    <div class="prompt-example-box">
        <div class="top">
            <ni-prompt position='topleft'>
                <ni-button>上左</ni-button>
            </ni-prompt>
            <ni-prompt position='top'>
                <ni-button>上边</ni-button>
            </ni-prompt>
            <ni-prompt position='topright'>
                <ni-button>上右</ni-button>
            </ni-prompt>
        </div>
        <div class="left">
            <ni-prompt position='lefttop'>
                <ni-button>左上</ni-button>
            </ni-prompt>
            <ni-prompt position='left'>
                <ni-button>左边</ni-button>
            </ni-prompt>
            <ni-prompt position='leftbottom'>
                <ni-button>左下</ni-button>
            </ni-prompt>
        </div>
        <div class="right">
            <ni-prompt position='righttop'>
                <ni-button>右上</ni-button>
            </ni-prompt>
            <ni-prompt position='right'>
                <ni-button>右边</ni-button>
            </ni-prompt>
            <ni-prompt position='rightbottom'>
                <ni-button>右下</ni-button>
            </ni-prompt>
        </div>
        <div class="bottom">
            <ni-prompt position='bottomleft'>
                <ni-button>下左</ni-button>
            </ni-prompt>
            <ni-prompt position='bottom'>
                <ni-button>下边</ni-button>
            </ni-prompt>
            <ni-prompt position='bottomright'>
                <ni-button>下右</ni-button>
            </ni-prompt>
        </div>
    </div>
</template>
<style lang="less" scoped>
.prompt-example-box{
    width: 400px;
}
.top{
    text-align: center;
}
.left {
    float: left;
    width: 70px;
}
.right {
    float: right;
    width: 70px;
}
.bottom {
    clear: both;
    text-align: center;
}
.prompt-box{
    margin: 5px;
}
</style>`,
            code2:
`<ni-prompt position='top' theme='black' text='black'>
    <ni-button>black</ni-button>
</ni-prompt>
<ni-prompt position='top' theme='light' text='light'>
    <ni-button>light</ni-button>
</ni-prompt>`,
            code3:
`<ni-prompt position='top' text='允许划入' enterable>
    <ni-button>允许划入</ni-button>
</ni-prompt>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'text',
                description:'显示的文本',
                type:'string,number',
                default:'nicoUI文字提示'
            },{
                name:'theme',
                description:'主题，可选值有black,light',
                type:'string',
                default:'black'
            },{
                name:'position',
                description:`显示的位置，可选值有topleft,top,topright,righttop,right,rightbottom,
                bottomleft,bottom,bottomright,lefttop,left,leftbottom`,
                type:'boolean',
                default:'false'
            },{
                name:'enterable',
                description:'是否允许鼠标进入',
                type:'boolean',
                default:'false'
            },{
                name:'hidetime',
                description:'自动隐藏的时间',
                type:'number',
                default:'-'
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.prompt-example-box{
    width: 400px;
}
.top{
    text-align: center;
}
.left {
    float: left;
    width: 70px;
}
.right {
    float: right;
    width: 70px;
}
.bottom {
    clear: both;
    text-align: center;
}
.prompt-box{
    margin: 5px;
}
</style>
<template>
    <div class="page-container" v-highlight>
        <h2>Nav 导航</h2>
        <h3>横向导航基础用法</h3>
        <component-box :code='code1'>
            <div style="width:100%;background-color:#545c64">
                <ni-nav 
                    type="head" 
                    headBackgroundColor="#545c64"
                    backgroundHoverColor="#434a50"
                    fontColor="white">
                    <ni-nav-item index="1">首页</ni-nav-item>

                    <ni-nav-drop>
                        <span slot="droptitle">资金管理</span>
                        <ni-nav-item index="2">我的余额</ni-nav-item>

                        <ni-nav-drop>
                            <span slot="droptitle">资金操作</span>
                            <ni-nav-item index="3">存款</ni-nav-item>
                            <ni-nav-item index="4">取款</ni-nav-item>
                        </ni-nav-drop>
                    </ni-nav-drop>
                    
                    <ni-nav-drop>
                        <span slot="droptitle">个人中心</span>
                        <ni-nav-item index="5">我的信息</ni-nav-item>
                    </ni-nav-drop>
                </ni-nav>
            </div>
        </component-box>
        <h3>纵向导航基础用法</h3>
        <component-box :code='code2'>
            <div style="width:200px;background-color:#545c64">
                <ni-nav 
                    type="side" 
                    backgroundHoverColor="#434a50"
                    fontColor="white">
                    <ni-nav-item index="1">首页</ni-nav-item>

                    <ni-nav-drop>
                        <span slot="droptitle">资金管理</span>
                        <ni-nav-item index="2">我的余额</ni-nav-item>

                        <ni-nav-drop>
                            <span slot="droptitle">资金操作</span>
                            <ni-nav-item index="3">存款</ni-nav-item>
                            <ni-nav-item index="4">取款</ni-nav-item>
                        </ni-nav-drop>
                    </ni-nav-drop>
                    
                    <ni-nav-drop>
                        <span slot="droptitle">个人中心</span>
                        <ni-nav-item index="5">我的信息</ni-nav-item>
                    </ni-nav-drop>
                </ni-nav>
            </div>
        </component-box>
        <h3>横向导航的多重嵌套</h3>
        <p>导航组件支持复杂的嵌套，可以无限嵌套下去</p>
        <component-box :code='code3'>
            <div style="width:100%;background-color:#545c64">
                <ni-nav 
                    type="head" 
                    headBackgroundColor="#545c64"
                    backgroundHoverColor="#434a50"
                    fontColor="white">
                    <ni-nav-drop>
                        <span slot="droptitle">资金管理</span>
                        <ni-nav-item index="1">我的余额</ni-nav-item>
                        <ni-nav-drop>
                            <span slot="droptitle">资金操作</span>
                            <ni-nav-item index="2">存款</ni-nav-item>
                            <ni-nav-item index="3">取款</ni-nav-item>
                            <ni-nav-drop>
                                <span slot="droptitle">资金操作</span>
                                <ni-nav-item index="4">存款</ni-nav-item>
                                <ni-nav-item index="5">取款</ni-nav-item>
                                <ni-nav-drop>
                                    <span slot="droptitle">资金操作</span>
                                    <ni-nav-item index="6">存款</ni-nav-item>
                                    <ni-nav-item index="7">取款</ni-nav-item>
                                    <ni-nav-drop>
                                        <span slot="droptitle">资金操作</span>
                                        <ni-nav-item index="8">存款</ni-nav-item>
                                        <ni-nav-item index="9">取款</ni-nav-item>
                                    </ni-nav-drop>
                                </ni-nav-drop>
                            </ni-nav-drop>
                        </ni-nav-drop>
                    </ni-nav-drop>
                </ni-nav>
            </div>
        </component-box>
        <h3>纵向导航的多重嵌套</h3>
        <p>纵向导航也支持多重嵌套</p>
        <component-box :code='code4'>
            <div style="width:200px;background-color:#545c64">
                <ni-nav 
                    type="side" 
                    backgroundHoverColor="#434a50"
                    fontColor="white">
                    <ni-nav-drop>
                        <span slot="droptitle">嵌套</span>
                        <ni-nav-item index="1">嵌套</ni-nav-item>
                        <ni-nav-drop showchildren>
                            <span slot="droptitle">嵌套</span>
                            <ni-nav-item index="2">嵌套</ni-nav-item>
                            <ni-nav-item index="3">嵌套</ni-nav-item>
                            <ni-nav-drop>
                                <span slot="droptitle">嵌套</span>
                                <ni-nav-item index="4">嵌套</ni-nav-item>
                                <ni-nav-item index="5">嵌套</ni-nav-item>
                                <ni-nav-drop>
                                    <span slot="droptitle">嵌套</span>
                                    <ni-nav-item index="6">嵌套</ni-nav-item>
                                    <ni-nav-item index="7">嵌套</ni-nav-item>
                                    <ni-nav-drop>
                                        <span slot="droptitle">嵌套</span>
                                        <ni-nav-item index="8">嵌套</ni-nav-item>
                                        <ni-nav-item index="9">嵌套</ni-nav-item>
                                    </ni-nav-drop>
                                </ni-nav-drop>
                            </ni-nav-drop>
                        </ni-nav-drop>
                    </ni-nav-drop>
                </ni-nav>
            </div>
        </component-box>

        <h3>Nav Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
        <h3>Nav-drop Attributes</h3>
        <my-table :th='th' :content='content4'></my-table>
        <h3>Nav-item Attributes</h3>
        <my-table :th='th' :content='content5'></my-table>
        <h3>Nav-item Events</h3>
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
        return {
            code1:
`<div style="width:100%;background-color:#545c64">
    <ni-nav 
        type="head" 
        headBackgroundColor="#545c64"
        backgroundHoverColor="#434a50"
        fontColor="white">
        <ni-nav-item index="1">首页</ni-nav-item>

        <ni-nav-drop>
            <span slot="droptitle">资金管理</span>
            <ni-nav-item index="2">我的余额</ni-nav-item>

            <ni-nav-drop>
                <span slot="droptitle">资金操作</span>
                <ni-nav-item index="3">存款</ni-nav-item>
                <ni-nav-item index="4">取款</ni-nav-item>
            </ni-nav-drop>
        </ni-nav-drop>
        
        <ni-nav-drop>
            <span slot="droptitle">个人中心</span>
            <ni-nav-item index="5">我的信息</ni-nav-item>
        </ni-nav-drop>
    </ni-nav>
</div>`,
            code2:
`<div style="width:200px;background-color:#545c64">
    <ni-nav 
        type="side" 
        backgroundHoverColor="#434a50"
        fontColor="white">
        <ni-nav-item index="1">首页</ni-nav-item>

        <ni-nav-drop>
            <span slot="droptitle">资金管理</span>
            <ni-nav-item index="2">我的余额</ni-nav-item>

            <ni-nav-drop>
                <span slot="droptitle">资金操作</span>
                <ni-nav-item index="3">存款</ni-nav-item>
                <ni-nav-item index="4">取款</ni-nav-item>
            </ni-nav-drop>
        </ni-nav-drop>
        
        <ni-nav-drop>
            <span slot="droptitle">个人中心</span>
            <ni-nav-item index="5">我的信息</ni-nav-item>
        </ni-nav-drop>
    </ni-nav>
</div>`,
            code3:
`<div style="width:100%;background-color:#545c64">
    <ni-nav 
        type="head" 
        headBackgroundColor="#545c64"
        backgroundHoverColor="#434a50"
        fontColor="white">
        <ni-nav-drop>
            <span slot="droptitle">资金管理</span>
            <ni-nav-item index="1">我的余额</ni-nav-item>
            <ni-nav-drop>
                <span slot="droptitle">资金操作</span>
                <ni-nav-item index="2">存款</ni-nav-item>
                <ni-nav-item index="3">取款</ni-nav-item>
                <ni-nav-drop>
                    <span slot="droptitle">资金操作</span>
                    <ni-nav-item index="4">存款</ni-nav-item>
                    <ni-nav-item index="5">取款</ni-nav-item>
                    <ni-nav-drop>
                        <span slot="droptitle">资金操作</span>
                        <ni-nav-item index="6">存款</ni-nav-item>
                        <ni-nav-item index="7">取款</ni-nav-item>
                        <ni-nav-drop>
                            <span slot="droptitle">资金操作</span>
                            <ni-nav-item index="8">存款</ni-nav-item>
                            <ni-nav-item index="9">取款</ni-nav-item>
                        </ni-nav-drop>
                    </ni-nav-drop>
                </ni-nav-drop>
            </ni-nav-drop>
        </ni-nav-drop>
    </ni-nav>
</div>`,
            code4:
`<div style="width:200px;background-color:#545c64">
    <ni-nav 
        type="side" 
        backgroundHoverColor="#434a50"
        fontColor="white">
        <ni-nav-drop>
            <span slot="droptitle">嵌套</span>
            <ni-nav-item index="1">嵌套</ni-nav-item>
            <ni-nav-drop showchildren>
                <span slot="droptitle">嵌套</span>
                <ni-nav-item index="2">嵌套</ni-nav-item>
                <ni-nav-item index="3">嵌套</ni-nav-item>
                <ni-nav-drop>
                    <span slot="droptitle">嵌套</span>
                    <ni-nav-item index="4">嵌套</ni-nav-item>
                    <ni-nav-item index="5">嵌套</ni-nav-item>
                    <ni-nav-drop>
                        <span slot="droptitle">嵌套</span>
                        <ni-nav-item index="6">嵌套</ni-nav-item>
                        <ni-nav-item index="7">嵌套</ni-nav-item>
                        <ni-nav-drop>
                            <span slot="droptitle">嵌套</span>
                            <ni-nav-item index="8">嵌套</ni-nav-item>
                            <ni-nav-item index="9">嵌套</ni-nav-item>
                        </ni-nav-drop>
                    </ni-nav-drop>
                </ni-nav-drop>
            </ni-nav-drop>
        </ni-nav-drop>
    </ni-nav>
</div>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'type',
                description:'导航的种类，可选值有side,head',
                type:'string',
                default:'side'
            },{
                name:'router',
                description:'是否开启路由，开启后会根据index进行路由跳转',
                type:'boolean',
                default:'false'
            },{
                name:'activeItemIndex',
                description:'当前激活菜单的index',
                type:'string,boolean',
                default:'-'
            },{
                name:'backgroundHoverColor',
                description:'菜单激活/悬浮的背景色',
                type:'string',
                default:'#ecf5ff'
            },{
                name:'fontColor',
                description:'菜单文字颜色',
                type:'string',
                default:'#409eff'
            },{
                name:'headBottomColor',
                description:'激活菜单的下划线颜色（head模式）',
                type:'string',
                default:'#409eff'
            },{
                name:'headBackgroundColor',
                description:'下拉列表背景色（head模式）',
                type:'string',
                default:'#EEEEEE'
            }],
            content4:[{
                name:'showchildren',
                description:'是否默认展开（side模式）',
                type:'string',
                default:'side'
            }],
            content5:[{
                name:'index',
                description:'配合router属性使用的路由跳转地址',
                type:'string',
                default:'-'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
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
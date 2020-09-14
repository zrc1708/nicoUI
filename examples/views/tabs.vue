<template>
    <div class="page-container" v-highlight>
        <h2>Tabs 标签页</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <ni-tabs>
                <ni-tab-item label="用户管理">
                    <div style="margin:10px">用户管理</div>
                </ni-tab-item>
                <ni-tab-item label="配置管理">
                    <div style="margin:10px">配置管理</div>
                </ni-tab-item>
                <ni-tab-item label="我的订单">
                    <div style="margin:10px">我的订单</div>
                </ni-tab-item>
                <ni-tab-item label="我的库存">
                    <div style="margin:10px">我的库存</div>
                </ni-tab-item>
            </ni-tabs>
        </component-box>
        <h3>卡片风格</h3>
        <component-box :code='code2'>
            <ni-tabs type="card">
                <ni-tab-item label="用户管理">
                    <div style="margin:10px">用户管理</div>
                </ni-tab-item>
                <ni-tab-item label="配置管理">
                    <div style="margin:10px">配置管理</div>
                </ni-tab-item>
                <ni-tab-item label="我的订单">
                    <div style="margin:10px">我的订单</div>
                </ni-tab-item>
                <ni-tab-item label="我的库存">
                    <div style="margin:10px">我的库存</div>
                </ni-tab-item>
            </ni-tabs>
        </component-box>
        <h3>动态增减</h3>
        <component-box :code='code3'>
            <div>
                <ni-button style="marginBottom:10px" @click="addtabs">增加标签</ni-button>
                <ni-tabs closeable @tabRemove="tabremove">
                    <ni-tab-item :label="item" v-for="item in tabArr" :key="item">
                        <div style="margin:10px">{{item}}</div>
                    </ni-tab-item>
                </ni-tabs>
            </div>
        </component-box>

        <h3>Tab Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
        <h3>Tab-item Attributes</h3>
        <my-table :th='th' :content='content3'></my-table>
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
    methods:{
        tabremove(label,index){
            this.tabArr.splice(index,1)
        },
        addtabs(){
            this.tabArr.push(`增加${this.num}`)
            this.num++
        }
    },
    data(){
        return {
            num:1,
            code1:
`<ni-tabs>
    <ni-tab-item label="用户管理">
        <div style="margin:10px">用户管理</div>
    </ni-tab-item>
    <ni-tab-item label="配置管理">
        <div style="margin:10px">配置管理</div>
    </ni-tab-item>
    <ni-tab-item label="我的订单">
        <div style="margin:10px">我的订单</div>
    </ni-tab-item>
    <ni-tab-item label="我的库存">
        <div style="margin:10px">我的库存</div>
    </ni-tab-item>
</ni-tabs>`,
            code2:
`<ni-tabs type="card">
    <ni-tab-item label="用户管理">
        <div style="margin:10px">用户管理</div>
    </ni-tab-item>
    <ni-tab-item label="配置管理">
        <div style="margin:10px">配置管理</div>
    </ni-tab-item>
    <ni-tab-item label="我的订单">
        <div style="margin:10px">我的订单</div>
    </ni-tab-item>
    <ni-tab-item label="我的库存">
        <div style="margin:10px">我的库存</div>
    </ni-tab-item>
</ni-tabs>`,
            code3:
`<template>
    <div>
        <ni-button style="marginBottom:10px" @click="addtabs">增加标签</ni-button>
        <ni-tabs closeable @tabRemove="tabremove">
            <ni-tab-item :label="item" v-for="item in tabArr" :key="item">
                <div style="margin:10px">{{item}}</div>
            </ni-tab-item>
        </ni-tabs>
    </div>
<\/template>
<script>
export default {
    data(){
        return{
            num:1,
            tabArr:['标签1','标签2','标签3','标签4','标签5','标签6'],
        }
    },
    methods:{
        tabremove(label,index){
            this.tabArr.splice(index,1)
        },
        addtabs(){
            this.tabArr.push('增加'+ this.num)
            this.num++
        }
    }
}
<\/script>`,
            tabArr:['标签1','标签2','标签3','标签4','标签5','标签6'],
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'type',
                description:'标签页的种类，可选值有default,card',
                type:'string',
                default:'default'
            },{
                name:'closeable',
                description:'是否允许关闭',
                type:'boolean',
                default:'false'
            }],
            content3:[{
                name:'label',
                description:'标签页文字',
                type:'string,number',
                default:'请输入'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'tabRemove',
                description:'点击关闭按钮触发',
                parameters:'label,index'
            }],
        }
    }
}
</script>

<style lang="less" scoped>

</style>
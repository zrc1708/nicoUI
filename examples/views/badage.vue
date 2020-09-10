<template>
    <div class="page-container" v-highlight>
        <h2>Badage 标记</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <ni-badage :val= 12>
                <ni-button>个人中心</ni-button>
            </ni-badage>
        </component-box>
        <h3>更改颜色</h3>
        <component-box :code='code2'>
            <ni-badage :val= 19 color="blue">
                <ni-button>个人中心</ni-button>
            </ni-badage>
        </component-box>
        <h3>自定义内容</h3>
        <p>可以显示数字以外的文本内容</p>
        <component-box :code='code2'>
            <ni-badage val='new'>
                <ni-button>个人中心</ni-button>
            </ni-badage>
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
`<ni-badage :val= 12>
    <ni-button>个人中心</ni-button>
</ni-badage>`,
            code2:
`<ni-badage :val= 19 color="blue">
    <ni-button>个人中心</ni-button>
</ni-badage>`,
            code3:
`<ni-badage val='new'>
    <ni-button>个人中心</ni-button>
</ni-badage>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'val',
                description:'显示值',
                type:'string,number',
                default:'-'
            },{
                name:'color',
                description:'背景颜色',
                type:'string',
                default:'red'
            }],
        }
    }
}
</script>
<style lang="less" scoped>

</style>
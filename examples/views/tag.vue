<template>
    <div class="page-container" v-highlight>
        <h2>Tag 标签</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div>
                <ni-tag class="tag">标签一</ni-tag>
                <ni-tag class="tag" type="primary">标签二</ni-tag>
                <ni-tag class="tag" type="success">标签三</ni-tag>
                <ni-tag class="tag" type="info">标签四</ni-tag>
                <ni-tag class="tag" type="warn">标签五</ni-tag>
                <ni-tag class="tag" type="danger">标签六</ni-tag>
            </div>
        </component-box>
        <h3>不同尺寸</h3>
        <p>使用size为标签配置尺寸</p>
        <component-box :code='code2'>
            <div>
                <ni-tag class="tag">默认尺寸</ni-tag>
                <ni-tag class="tag" size="medium">中等尺寸</ni-tag>
                <ni-tag class="tag" size="small">小尺寸</ni-tag>
                <ni-tag class="tag" size="mini">超小尺寸</ni-tag>
            </div>
        </component-box>
        <h3>允许关闭</h3>
        <p>tag组件拥有关闭按钮，配合close事件实现动态关闭</p>
        <component-box :code='code3'>
            <ni-tag 
                class="tag"
                closeable 
                v-for="(tag,index) in tags" 
                :key="index" 
                @close="closetag(index)">{{tag}}</ni-tag>
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
    methods:{
        closetag(index){
            this.tags.splice(index, 1);
        },
    },
    data(){
        return{
            tags: ['标签一', '标签二', '标签三', '标签四'],
            code1:
`<div>
    <ni-tag>标签一</ni-tag>
    <ni-tag type="primary">标签二</ni-tag>
    <ni-tag type="success">标签三</ni-tag>
    <ni-tag type="info">标签四</ni-tag>
    <ni-tag type="warn">标签五</ni-tag>
    <ni-tag type="danger">标签六</ni-tag>
</div>`,
            code2:
`<div>
    <ni-tag>默认尺寸</ni-tag>
    <ni-tag size="medium">中等尺寸</ni-tag>
    <ni-tag size="small">小尺寸</ni-tag>
    <ni-tag size="mini">超小尺寸</ni-tag>
</div>`,
            code3:
`<template>
    <div>
        <ni-tag 
            class="tag"
            closeable 
            v-for="(tag,index) in tags" 
            :key="index" 
            @close="closeTag(index)">{{tag}}</ni-tag>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tags: ['标签一', '标签二', '标签三', '标签四'],
        }
    },
    methods:{
        closeTag(index){
            this.tags.splice(index, 1);
        },
    },
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'type',
                description:'tag的种类，可选值有default,primary,success,info,warn,danger',
                type:'string',
                default:'default'
            },{
                name:'size',
                description:'tag的尺寸，可选值有medium,small,mini，不填为默认尺寸',
                type:'string',
                default:'-'
            },{
                name:'closeable',
                description:'是否开启关闭按钮',
                type:'boolean',
                default:'false'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'close',
                description:'关闭按钮被点击触发',
                parameters:'event'
            },{
                name:'click',
                description:'tag被点击触发',
                parameters:'event'
            }],
        }
    }
}
</script>
<style lang="less" scoped>
.tag{
    margin-right: 10px;
}
</style>
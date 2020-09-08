<template>
    <div class="page-container" v-highlight>
        <h2>Checkbox 多选框</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div>
                <ni-checkbox-group v-model="checkbox1">
                    <ni-checkbox label="北京"></ni-checkbox>
                    <ni-checkbox label="上海"></ni-checkbox>
                    <ni-checkbox label="广州"></ni-checkbox>
                    <ni-checkbox label="深圳"></ni-checkbox>
                </ni-checkbox-group>
                <p>{{checkbox1}}</p>
            </div>
        </component-box>
        <h3>禁用</h3>
        <p>给选项设置disabled即可实现禁用</p>
        <component-box :code='code4'>
            <div>
                <ni-checkbox-group v-model="checkbox4">
                    <ni-checkbox label="北京"></ni-checkbox>
                    <ni-checkbox label="上海"></ni-checkbox>
                    <ni-checkbox label="广州" disabled></ni-checkbox>
                    <ni-checkbox label="深圳"></ni-checkbox>
                </ni-checkbox-group>
                <p>{{checkbox4}}</p>
            </div>
        </component-box>
        <h3>一键全选</h3>
        <p>给一个选项添加chooseAll属性即可实现全选</p>
        <component-box :code='code2'>
            <div>
                <ni-checkbox-group v-model="checkbox2">
                    <ni-checkbox label="北京"></ni-checkbox>
                    <ni-checkbox label="上海"></ni-checkbox>
                    <ni-checkbox label="广州"></ni-checkbox>
                    <ni-checkbox label="深圳"></ni-checkbox>
                    <ni-checkbox chooseAll>选择全部</ni-checkbox>
                </ni-checkbox-group>
                <p>{{checkbox2}}</p>
            </div>
        </component-box>
        <h3>数量限制</h3>
        <p>通过设置max/min即可对选择数量进行限制</p>
        <component-box :code='code3'>
            <div>
                <ni-checkbox-group v-model="checkbox3" :max="3" :min="1">
                    <ni-checkbox label="北京"></ni-checkbox>
                    <ni-checkbox label="上海"></ni-checkbox>
                    <ni-checkbox label="广州"></ni-checkbox>
                    <ni-checkbox label="深圳"></ni-checkbox>
                </ni-checkbox-group>
                <p>{{checkbox3}}</p>
            </div>
        </component-box>
        
        <h3>Checkbox-group Attributes</h3>
        <my-table :th='th' :content='content1'></my-table>
        <h3>Checkbox-group Events</h3>
        <my-table :th='th2' :content='content3'></my-table>
        <h3>Checkbox Attributes</h3>
        <my-table :th='th' :content='content2'></my-table>
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
            checkbox1:['北京','上海'],
            checkbox2:['北京','上海'],
            checkbox3:['北京','上海'],
            checkbox4:['北京','上海'],
            code1:
`<template>
    <div>
        <ni-checkbox-group v-model="checkbox">
            <ni-checkbox label="北京"></ni-checkbox>
            <ni-checkbox label="上海"></ni-checkbox>
            <ni-checkbox label="广州"></ni-checkbox>
            <ni-checkbox label="深圳"></ni-checkbox>
        </ni-checkbox-group>
        <p>{{checkbox}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkbox:['北京','上海'],
        }
    }
}
<\/script>`,
            code2:
`<template>
    <div>
        <ni-checkbox-group v-model="checkbox">
        <ni-checkbox label="北京"></ni-checkbox>
        <ni-checkbox label="上海"></ni-checkbox>
        <ni-checkbox label="广州"></ni-checkbox>
        <ni-checkbox label="深圳"></ni-checkbox>
        <ni-checkbox chooseAll>选择全部</ni-checkbox>
    </ni-checkbox-group>
    <p>{{checkbox}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkbox:['北京','上海'],
        }
    }
}
<\/script>`,
            code3:
`<template>
    <div>
        <ni-checkbox-group v-model="checkbox" :max="3" :min="1">
            <ni-checkbox label="北京"></ni-checkbox>
            <ni-checkbox label="上海"></ni-checkbox>
            <ni-checkbox label="广州"></ni-checkbox>
            <ni-checkbox label="深圳"></ni-checkbox>
        </ni-checkbox-group>
        <p>{{checkbox}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkbox:['北京','上海'],
        }
    }
}
<\/script>`,
            code4:
`<template>
    <div>
        <ni-checkbox-group v-model="checkbox">
            <ni-checkbox label="北京"></ni-checkbox>
            <ni-checkbox label="上海"></ni-checkbox>
            <ni-checkbox label="广州" disabled></ni-checkbox>
            <ni-checkbox label="深圳"></ni-checkbox>
        </ni-checkbox-group>
        <p>{{checkbox}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkbox:['北京','上海'],
        }
    }
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content1:[{
                name:'max',
                description:'可勾选checkBox最大数量',
                type:'number',
                default:'-'
            },{
                name:'min',
                description:'可勾选checkBox最小数量',
                type:'number',
                default:'-'
            }],
            content2:[{
                name:'chooseAll',
                description:'使checkbox具有全选功能',
                type:'boolean',
                default:'false'
            },{
                name:'disabled',
                description:'是否禁用',
                type:'boolean',
                default:'false'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content3:[{
                name:'change',
                description:'当绑定值变化时触发的事件',
                parameters:'更新后的值'
            }],
        }
    }
}
</script>
<style lang="less" scoped>

</style>
<template>
    <div class="page-container" v-highlight>
        <h2>Select 选择器</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div>
                <p>选择的是：{{selectvalue}}</p>
                <ni-select v-model="selectvalue">
                    <ni-option 
                        v-for="item in selectoptions" 
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value"></ni-option>
                </ni-select>
            </div>
        </component-box>
        <h3>可清空</h3>
        <p>为ni-select添加clearable属性实现清空按钮</p>
        <component-box :code='code2'>
            <div>
                <p>选择的是：{{selectvalue2}}</p>
                <ni-select v-model="selectvalue2" clearable>
                    <ni-option 
                        v-for="item in selectoptions" 
                        :key="item.value" 
                        :label="item.label" 
                        :value="item.value"></ni-option>
                </ni-select>
            </div>
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
            selectvalue:'',
            selectvalue2:'',
            selectoptions:[{
                value: '1',
                label: '黄金糕'
              }, {
                value: '2',
                label: '双皮奶'
              }, {
                value: '3',
                label: '蚵仔煎'
              }, {
                value: '4',
                label: '龙须面'
              }, {
                value: '5',
                label: '北京烤鸭'
              }],
            code1:
`<template>
    <div>
        <p>选择的是：{{selectvalue}}</p>
        <ni-select v-model="selectvalue">
            <ni-option 
                v-for="item in selectoptions" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"></ni-option>
        </ni-select>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selectvalue:'',
            selectoptions:[{
                value: '1',
                label: '黄金糕'
              }, {
                value: '2',
                label: '双皮奶'
              }, {
                value: '3',
                label: '蚵仔煎'
              }, {
                value: '4',
                label: '龙须面'
              }, {
                value: '5',
                label: '北京烤鸭'
              }],
        }
    },
}
<\/script>`,
        code2:
`<template>
    <div>
        <p>选择的是：{{selectvalue}}</p>
        <ni-select v-model="selectvalue" clearable>
            <ni-option 
                v-for="item in selectoptions" 
                :key="item.value" 
                :label="item.label" 
                :value="item.value"></ni-option>
        </ni-select>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selectvalue:'',
            selectoptions:[{
                value: '1',
                label: '黄金糕'
              }, {
                value: '2',
                label: '双皮奶'
              }, {
                value: '3',
                label: '蚵仔煎'
              }, {
                value: '4',
                label: '龙须面'
              }, {
                value: '5',
                label: '北京烤鸭'
              }],
        }
    },
}
<\/script>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'clearable',
                description:'是否有清空按钮',
                type:'boolean',
                default:'false'
            }]
        }
    }
}
</script>
<style lang="less" scoped>

</style>
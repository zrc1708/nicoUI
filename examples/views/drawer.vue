<template>
    <div class="page-container" v-highlight>
        <h2>Drawer 抽屉</h2>
        <h3>抽屉</h3>
        <component-box :code='code1'>
            <div>
                <ni-button @click="showdrawer" style="marginRight:10px">右展开抽屉</ni-button>
                <ni-drawer :visible="drawervisible"
                            @maskclick ='drawermackclick'>
                    这是右抽屉组件
                </ni-drawer>
                <ni-button @click="showdrawer2" style="marginRight:10px">下展开抽屉</ni-button>
                <ni-drawer :visible="drawervisible2"
                            position='bottom'
                            @maskclick ='drawer2mackclick'>
                    这是下抽屉组件
                </ni-drawer>
                <ni-button @click="showdrawer3" style="marginRight:10px">左展开抽屉</ni-button>
                <ni-drawer :visible="drawervisible3"
                            position='left'
                            @maskclick ='drawer3mackclick'>
                    这是左抽屉组件
                </ni-drawer>
                <ni-button @click="showdrawer4">上展开抽屉</ni-button>
                <ni-drawer :visible="drawervisible4"
                            position='top'
                            @maskclick ='drawer4mackclick'>
                    这是上抽屉组件
                </ni-drawer>
            </div>
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
        showdrawer(){
          this.drawervisible = true
        },
        drawermackclick(){
          this.drawervisible = false
        },
        showdrawer2(){
          this.drawervisible2 = true
        },
        drawer2mackclick(){
          this.drawervisible2 = false
        },
        showdrawer3(){
          this.drawervisible3 = true
        },
        drawer3mackclick(){
          this.drawervisible3 = false
        },
        showdrawer4(){
          this.drawervisible4 = true
        },
        drawer4mackclick(){
          this.drawervisible4 = false
        },
    },
    data(){
        return {
            drawervisible:false,
            drawervisible2:false,
            drawervisible3:false,
            drawervisible4:false,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'position',
                description:'抽屉展开的位置，可选值有left,right,top,bottom',
                type:'string',
                default:'right'
            },{
                name:'visible',
                description:'控制抽屉的显隐',
                type:'boolean',
                default:'false'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'maskclick',
                description:'遮罩点击事件',
                parameters:'-'
            }],
            code1:
`<template>
    <div>
        <ni-button @click="showdrawer" style="marginRight:10px">右展开抽屉</ni-button>
        <ni-drawer :visible="drawervisible"
                    @maskclick ='drawermackclick'>
            这是右抽屉组件
        </ni-drawer>
        <ni-button @click="showdrawer2" style="marginRight:10px">下展开抽屉</ni-button>
        <ni-drawer :visible="drawervisible2"
                    position='bottom'
                    @maskclick ='drawer2mackclick'>
            这是下抽屉组件
        </ni-drawer>
        <ni-button @click="showdrawer3" style="marginRight:10px">左展开抽屉</ni-button>
        <ni-drawer :visible="drawervisible3"
                    position='left'
                    @maskclick ='drawer3mackclick'>
            这是左抽屉组件
        </ni-drawer>
        <ni-button @click="showdrawer4">上展开抽屉</ni-button>
        <ni-drawer :visible="drawervisible4"
                    position='top'
                    @maskclick ='drawer4mackclick'>
            这是上抽屉组件
        </ni-drawer>
    </div>
<\/template>
<script>
export default {
    data(){
        return{
            drawervisible:false,
            drawervisible2:false,
            drawervisible3:false,
            drawervisible4:false,
        }
    },
    methods:{
        showdrawer(){
          this.drawervisible = true
        },
        drawermackclick(){
          this.drawervisible = false
        },
        showdrawer2(){
          this.drawervisible2 = true
        },
        drawer2mackclick(){
          this.drawervisible2 = false
        },
        showdrawer3(){
          this.drawervisible3 = true
        },
        drawer3mackclick(){
          this.drawervisible3 = false
        },
        showdrawer4(){
          this.drawervisible4 = true
        },
        drawer4mackclick(){
          this.drawervisible4 = false
        },
    },
}
<\/script>`,
        }
    }
}
</script>

<style lang="less" scoped>

</style>
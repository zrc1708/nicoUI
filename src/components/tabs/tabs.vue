<template>
    <div :class="[{'tab-box-card':type=='card'}]">
        <div class="tab-title-box"
             :style="{'background-color':(type=='card')?'#f5f7fa':''}">
            <div class="tab-item-title" 
                 :class="[{'firsttitle':index==0},
                          {'cardtitle':type=='card'},
                          {'defaulttitle':type=='default'}]"
                 :style="{'color':(showItemLabel==item.label)?'#409eff':'',
                          'border-bottom-color':(showItemLabel==item.label)?'white':'',
                          'border-right-color':(type=='card'&&index!==(items.length-1)&&showItemLabel==item.label)?'#e4e7ed':'#f5f7fa',
                          'border-left-color':(type=='card'&&index!==0&&showItemLabel==item.label)?'#e4e7ed':'#f5f7fa',
                          'background-color':(type=='card'&&showItemLabel==item.label)?'white':''}"
                 v-for="(item,index) in items" 
                 :key="item.label"
                 @click="titleClick(item.label,index)">
                <span class="tab-title-span">{{item.label}}</span>
                <i v-if="closeable" class="closeicon" @click.stop="remove(item.label,index)"></i>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ni-tabs',
    props:{
        // tag的种类
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['default','card'].indexOf(value) !== -1
            }
        },
        // 是否允许关闭
        closeable: {
            type: Boolean,
            default: false
        },
        
    },
    data(){
        return{
            items:[],
            showItemLabel:'',    //当前显示的item
        }
    },
    created(){

    },
    mounted(){
        this.showItemLabel = this.items[0].label
    },
    methods:{
        titleClick(label,index){
            this.showItemLabel = label
        },
        remove(label,index){
            this.$emit('tabRemove',label,index)
        }
    }
}
</script>
<style lang="less" scoped>
.tab-box-card{
    border: 1px solid #e4e7ed;
    box-sizing: border-box;
}
.tab-title-box{
    position: relative;
    &::after{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #e4e7ed;
        bottom: 0;
        left: 0;
    }
}
.tab-item-title{
    display: inline-block;
    box-sizing: border-box;
    padding: 0 20px;
    border: 1px solid #e4e7ed;
    line-height: 40px;
    position: relative;
    margin-left: -1px;
    cursor: pointer;
    z-index: 2;
    transition: color .3s cubic-bezier(.645,.045,.355,1);
}
.defaulttitle{
    border-top-color: #e4e7ed!important;
    border-right-color: #e4e7ed!important;
    border-left-color: #e4e7ed!important;
}
.cardtitle{
    margin-left: 0;
    border-top: 0;
}
.firsttitle{
    margin-left: 0;
}
.tab-title-span{
    vertical-align: middle;
}
.closeicon{
    position: relative;
    display: inline-block;
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-left: 10px;
    margin-right: -10px;
    border: 1px solid #dcdfe6;
    border-radius: 50%;

    &::before{
        content:"";
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        height: 1px;
        width: 9px;
        margin-left: 3px;
        background-color: #c0c4cc;
        transform: rotate(45deg);
    }
    &::after{
        content:"";
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        height: 1px;
        width: 9px;
        margin-right: 3px;
        background-color: #c0c4cc;
        transform: rotate(-45deg);
    }
    &:hover{
        border-color: #c0c4cc;
    }
    &:active::after,&:active::before{
        background-color: #409eff;
    }
}
</style>
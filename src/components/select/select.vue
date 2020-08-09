<template>
    <div class="select-box">
        <span class="select-input">{{value||'请选择'}}</span>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'ni-select',
    props:{
        // 外部传入的值
        value:{},
    },
    data(){
        return{
            options:[],
            optionsCount:0,
        }
    },
    provide: function () {
        return {
            'select': this
        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
.select-box{
    width: 240px;
}
.select-input{
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:hover {
        border-color: #c0c4cc;
    }
    &:focus {
        border-color: #409eff;
    }
}
</style>
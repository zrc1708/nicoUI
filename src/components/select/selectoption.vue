<template>
    <li class="option-box" @click="handleOptionSelect" :class="[{'choosed':select.value==value}]">
        <span >{{label}}</span>
    </li>
</template>
<script>
export default {
    name:'ni-option',
    props:{
        value:{},
        label:{},
    },
    inject: ['select'],
    data(){
        return{

        }
    },
    created(){
        //将 ni-option实例push进父组件select的options
        this.select.options.push(this);
    },
    mounted(){

    },
    methods:{
        handleOptionSelect(){
            this.select.choosedlabel = this.label
            this.select.$emit('input', this.value)
            this.select.showul = false
        }
    }
}
</script>
<style lang="less" scoped>
.option-box{
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover{
        background-color: #f5f7fa;
    }
}
.choosed{
    background-color: #f5f7fa;
    color: #409eff;
}
</style>
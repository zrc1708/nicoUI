<template>
    <span class="ni-badage">
        <span class="ni-badage-num" :style="{'background-color':color}">{{num}}</span>
        <slot></slot>
    </span>
</template>
<script>
export default {
    name:'ni-badage',
    props:{
        // 显示的数字
        num: {
            type: [String,Number]
        },
        // 显示的颜色
        color: {
            type: String,
            default:'red'
        },
    },
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
.ni-badage{
    position: relative;
    display: inline-block;
    .ni-badage-num{
        position: absolute;
        display: block;
        right: 0;
        top: 0;
        z-index: 12;
        transform: translateY(-50%) translateX(50%);

        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #fff;
    }
}
</style>
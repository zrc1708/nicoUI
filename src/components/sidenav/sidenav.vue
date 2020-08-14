<template>
    <ul class="sidenav-box">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name:'ni-sidenav',
    props:{
        // 是否开启路由
        router:{
            type:Boolean,
            default:false
        },
        // 当前激活的菜单的index
        activeItemIndex:{},
        // 菜单鼠标悬浮的背景颜色
        backgroundHoverColor:{
            type:String,
            default:'#ecf5ff'
        },
        // 菜单文字颜色
        fontColor:{
            type:String,
            default:'#303133'
        },
        // 激活的菜单文字颜色
        activeFontColor:{
            type:String,
            default:'#409eff'
        }
    },
    data(){
        return{
            items:[],
            activeItemIndexObj:this.activeItemIndex
        }
    },
    provide: function () {
        return {
            'sidenav': this
        }
    },
    watch:{
        activeItemIndex(newval,oldval){
            this.activeItemIndexObj = this.activeItemIndex
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
.sidenav-box{
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
<template>
    <ul class="sidenav-box" :class="[{'head':type=='head'}]">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name:'ni-nav',
    props:{
        // 导航的种类
        type:{
            type:String,
            default:'side',
            validator(value) {
                return ['side','head'].indexOf(value) !== -1
            }
        },
        // 是否开启路由
        router:{
            type:Boolean,
            default:false
        },
        // 当前激活的菜单的index
        activeItemIndex:{},
        // 菜单鼠标悬浮/激活的背景颜色
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
        },
        // 激活菜单的下划线的颜色（head模式）
        headBottomColor:{
            type:String,
            default:'#409eff'
        },
        // 下拉列表背景色（head模式）
        headBackgroundColor:{
            type:String,
            default:'rgb(238, 238, 238)'
        },
    },
    data(){
        return{
            items:[],
            activeItemIndexObj:this.activeItemIndex
        }
    },
    provide: function () {
        return {
            'nav': this
        }
    },
    watch:{
        activeItemIndex(newval,oldval){
            this.activeItemIndexObj = this.activeItemIndex
            if(this.type=='head'){
                let item = this.items.find(item => item.index==newval)
                if(item.$parent.$options.name=='ni-nav'){
                    return 0
                }
                while(item.$parent.$options.name=='ni-nav-drop'){
                    item = item.$parent
                }
                item.indexhead = newval
                item.showHeadChildren = false
                item.showulicon = false
            }
        }
    }
}
</script>
<style lang="less" scoped>
.sidenav-box{
    width: 100%;
    margin: 0;
    padding: 0;
}
.head{
    display: flex;
}
</style>
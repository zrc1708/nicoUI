<template>
    <li class="item-box" 
        :class="[{'headbox':nav.type=='head'}]"
        ref="itemBox"
        @click="click"
        @mouseenter="enter"
        @mouseleave="leave"
        :style="{'padding-left':nav.type=='side'?this.paddingleft+'px':'',
                'color':(nav.activeItemIndexObj==index)?nav.activeFontColor:nav.fontColor,
                'background-color':(headstyle&&(nav.activeItemIndexObj==index))?nav.backgroundHoverColor:'',
                'border-bottom': (nav.type=='head'&&headstyle&&nav.activeItemIndexObj==index)?`2px solid ${this.nav.headBottomColor}`:''}">
        <slot></slot>
    </li>
</template>
<script>
export default {
    name:'ni-nav-item',
    inject: ['nav'],
    props:{
        index:{},
    },
    data(){
        return{
            paddingleft:(this.$parent.paddingleft||0)+20,
            headstyle:true,  
        }
    },
    created(){
        this.nav.items.push(this)
        if(this.nav.type=='head'&&this.$parent.$options.name=='ni-nav-drop'){
            this.headstyle = false
        }
    },
    methods:{
        click(){
            if(!this.nav.router){
                // 非路由模式，正常传递点击事件
                let item = this
                while(item.$parent.$options.name=='ni-nav-drop'){
                    item = item.$parent
                }
                item.showHeadChildren = false
                item.showulicon = false
                this.$emit('click')
            }else{
                if(this.$router.history.current.path==='/'+this.index){
                    return 0
                }
                this.$router.push(this.index)
                this.nav.activeItemIndexObj = this.index
            }
        },
        enter(){
            this.$refs.itemBox.style.backgroundColor = this.nav.backgroundHoverColor
        },
        leave(){
            this.$refs.itemBox.style.backgroundColor = ''
        }
    }
}
</script>
<style lang="less" scoped>
.item-box{
    list-style: none;
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    // padding: 0 20px 0 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: 400;
    transition: color .3s,background-color .3s;
}
.headbox{
    padding: 0 20px;
}
</style>
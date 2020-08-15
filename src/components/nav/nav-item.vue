<template>
    <li class="item-box" 
        :class="[{'headbox':nav.type=='head'}]"
        ref="itemBox"
        @click="click"
        @mouseenter="enter"
        @mouseleave="leave"
        :style="{'padding-left':nav.type=='side'?this.paddingleft+'px':'',
                'color':(nav.activeItemIndexObj==index)?nav.activeFontColor:nav.fontColor,
                'background-color':(nav.activeItemIndexObj==index)?nav.backgroundHoverColor:'',
                'border-bottom': (nav.type=='head'&&nav.activeItemIndexObj==index)?`2px solid ${this.nav.headBottomColor}`:''}">
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
        }
    },
    created(){
        this.nav.items.push(this)
    },
    methods:{
        click(){
            if(!this.nav.router){
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
            if(this.nav.activeItemIndexObj==this.index) return 0
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
    padding: 0 20px 0 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: 400;
    transition: all .3s;
}
.headbox{
    padding: 0 30px;
}
</style>
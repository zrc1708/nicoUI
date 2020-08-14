<template>
    <li class="sideitem-box" 
        ref="sideitemBox"

        @click="click"
        @mouseenter="enter"
        @mouseleave="leave"
        :style="{'padding-left':this.paddingleft+'px',
                'color':(sidenav.activeItemIndexObj==index)?sidenav.activeFontColor:sidenav.fontColor,
                'background-color':(sidenav.activeItemIndexObj==index)?sidenav.backgroundHoverColor:''}">
        <slot></slot>
    </li>
</template>
<script>
export default {
    name:'ni-sidenav-item',
    inject: ['sidenav'],
    props:{
        index:{},
    },
    data(){
        return{
            paddingleft:(this.$parent.paddingleft||0)+20,
        }
    },
    created(){
        this.sidenav.items.push(this)
        this.itemFontColor = this.sidenav.fontColor
    },
    methods:{
        click(){
            if(!this.sidenav.router){
                this.$emit('click')
            }else{
                if(this.$router.history.current.path==='/'+this.index){
                    return 0
                }
                this.$router.push(this.index)
                this.sidenav.activeItemIndexObj = this.index
            }
        },
        enter(){
            this.$refs.sideitemBox.style.backgroundColor = this.sidenav.backgroundHoverColor
        },
        leave(){
            if(this.sidenav.activeItemIndexObj==this.index) return 0
            this.$refs.sideitemBox.style.backgroundColor = ''
        }
    }
}
</script>
<style lang="less" scoped>
.sideitem-box{
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
    transition: color .3s,background-color .3s;
}
</style>
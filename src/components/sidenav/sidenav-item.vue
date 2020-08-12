<template>
    <li class="sideitem-box" 
        :class="[{'active':sidenav.activeItemIndex===index}]" 
        @click="click"
        :style="{'padding-left':this.paddingleft+'px'}">
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
            paddingleft:(this.$parent.paddingleft||0)+20
        }
    },
    created(){
        this.sidenav.items.push(this)
    },
    mounted(){
        
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
                this.sidenav.activeItemIndex = this.index
            }
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
    color: #303133;
    padding: 0 20px 0 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    white-space: nowrap;
    font-weight: 400;
    transition: color .3s,background-color .3s;

    .nav-icon{
        color: #909399;
        vertical-align: middle;
        margin-right: 5px;
        padding-bottom: 1px;
    }
    &:hover{
        background-color: #ecf5ff;
    }
}
.active{
    color: #409eff;
    background-color: #ecf5ff;
    .nav-icon{
        color: inherit;
    }
}
</style>
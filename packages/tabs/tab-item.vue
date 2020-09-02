<template>
    <div class="tab-item-box" v-show="this.$parent.showItemLabel==this.label">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ni-tab-item',
    props:{
        label:{
            type:[Boolean,String,Number]
        }
    },
    created(){
        this.$parent.items.push(this)
    },
    beforeDestroy(){
        let num = this.$parent.items.indexOf(this)
        if(this.$parent.items.length==1){
            this.$parent.showItemLabel = ''
        }else if(num==this.$parent.items.length-1){
            this.$parent.showItemLabel = this.$parent.items[num-1].label
        }else{
            this.$parent.showItemLabel = this.$parent.items[num+1].label
        }
        this.$parent.items.splice(num,1)
    }
}
</script>
<style lang="less" scoped>

</style>
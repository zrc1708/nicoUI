<template>
    <span class="breaditem-box" @click="click">
        <slot></slot>
        <span class="delimiter" v-if="showdelimiter">{{$parent.delimiter}}</span>
    </span>
</template>
<script>
export default {
    name:'ni-breadcrumb-item',
    props:{
        to:{}
    },
    data(){
        return{
            showdelimiter:true
        }
    },
    created(){
        this.$parent.options.push(this)
    },
    mounted(){
        if(this.$parent.options.indexOf(this)==this.$parent.options.length-1){
            this.showdelimiter = false
        }
    },
    methods:{
        click(){
            if(!this.to){
                this.$emit('click')
            }else if(this.$router){
                if(this.$router.history.current.path===this.to.path){
                    return 0
                }
                this.$router.push(this.to)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.breaditem-box{
    color: #606266;
    cursor: pointer;
}
.delimiter{
    color: #c0c4cc;
    margin: 0 10px;
    cursor: pointer;
}
</style>
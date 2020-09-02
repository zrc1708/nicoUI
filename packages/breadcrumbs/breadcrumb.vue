<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ni-breadcrumb',
    props:{
        delimiter:{
            type:[String,Number],
            default:'/'
        }
    },
    data(){
        return{
            options:[]
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>

</style>
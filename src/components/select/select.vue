<template>
    <div class="select-box">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ni-select',
    props:{
        // 外部传入的值
        value:{},
    },
    data(){
        return{
            options:[],
            optionsCount:0,
        }
    },
    provide: function () {
        return {
            'select': this
        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>

</style>
<template>
    <div class="option-box" @click="handleOptionSelect">
        <span >{{label}}</span>
    </div>
</template>
<script>
export default {
    name:'ni-option',
    props:{
        value:{},
        label:{},
    },
    inject: ['select'],
    data(){
        return{

        }
    },
    created(){
        //将 ni-option实例push进父组件select的options
        this.select.options.push(this);
        // this.select.cachedOptions.push(this);
        this.select.optionsCount++;
        // this.select.filteredOptionsCount++;
        // 监听自定义的事件
        // this.$on('queryChange', this.queryChange);
        // this.$on('handleGroupDisabled', this.handleGroupDisabled);
    },
    mounted(){
        
    },
    methods:{
        handleOptionSelect(){
            this.select.$emit('input', this.value)
            // this.select.onOptionDestroy(this.select.options.indexOf(this));
        }
    }
}
</script>
<style lang="less" scoped>

</style>
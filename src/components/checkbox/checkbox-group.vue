<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ni-checkbox-group',
    props:{
        label:{},
        value:{},
        min:{
            type:Number
        },
        max:{
            type:Number
        }
    },
    data(){
        return{
            items:[],
            allItemsArr:[],
            isChoosedAll:false,
        }
    },
    created(){
        if(this.min&&this.value.length<this.min){
            console.error('请让CheckBox的默认选中数量大于min')
        }
        if(this.max&&this.value.length>this.max){
            console.error('请让CheckBox的默认选中数量小于max')
        }
    },
    mounted(){
        this.items.forEach(item=>{
            if(item.chooseAll==false){
                this.allItemsArr.push(item.label)
            }
        })
    },
    watch:{
        radiovalue(newval,oldval){
            if(newval.length === this.allItemsArr.length){
                this.isChoosedAll = true
            }else{
                this.isChoosedAll = false
            }
            this.$emit('change', newval);
        }
    },
    computed:{
        radiovalue:{
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val);
            },
        }
    }
}
</script>
<style lang="less" scoped>

</style>
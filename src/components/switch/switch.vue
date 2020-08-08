<template>
    <div>
        <span v-if="inactiveText" 
            class="text text1"
            :style="{'color':(!value)?checkedTextColor:'black'}"
            >{{inactiveText}}</span>
        <span 
            class="switch-span"
            @click="switchClick"
            :style="{'background-color':(!value)?inactiveColor:activeColor}"
            :class="[value?'switch-checked':'']"
        ></span>
        <span v-if="activeText" 
            class="text text2"
            :style="{'color':(value)?checkedTextColor:'black'}">{{activeText}}</span>
    </div>
</template>
    
<script>
    export default {
        name:'ni-switch',
        props: {
            value: {
                type: Boolean
            },
            activeText:{
                type:String,
                default:''
            },
            inactiveText:{
                type:String,
                default:''
            },
            checkedTextColor:{
                type:String,
                default:'#409eff'
            },
            activeColor:{
                type:String,
                default:'#409eff'
            },
            inactiveColor:{
                type:String,
                default:'#dcdfe6'
            },
        },
        data () {
            return {
            };
        },
        mounted(){
           
        },
        computed: {
            
        },
        methods: {
            switchClick(){
                this.$emit('input',!this.value)
                this.$emit('click')
            }
        },
        
    };
</script>
<style lang="less" scoped>
.text{
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    transition: all .2s;
}
.text1{
    margin-right: 10px;
}
.text2{
    margin-left: 10px;
}
.switch-span{
    position: relative;
    display: inline-block;
    margin: 0;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    background: #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    &::after{
        transition: all .3s;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 100%;
        border-radius: 50%;
        display: block;
        background-color: white;
    }
}
.switch-checked{
    &::after{
        left: 100%;
        transform: translateX(-100%);
    }
}
</style>
    
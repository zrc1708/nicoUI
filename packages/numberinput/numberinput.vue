<template>
    <div class="ni-numberinput-box">
        <span class="ni-numberinput-de" 
              :class="{'ni-numberinput-disable':deDisable||disable}"
              @click="decrease"></span>
        <input type="text" 
               class="ni-numberinput-input" 
               :class="{'ni-numberinput-inputdisable':disable}"
               v-model="number" 
               :disabled="disable"
               @change="inputchange">
        <span class="ni-numberinput-in" 
              :class="{'ni-numberinput-disable':inDisable||disable}"
              @click="increase"></span>
    </div>
</template>
<script>
export default {
    name:'ni-numberinput',
    props:{
        value:{},
        min:{
            type:Number,
        },
        max:{
            type:Number
        },
        step:{
            type:Number,
            default:1
        },
        disable:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            number:0,
        }
    },
    computed:{
        deDisable(){
            if(this.min&&this.number<=this.min) return true
            return false
        },
        inDisable(){
            if(this.max&&this.number>=this.max) return true
            return false
        }
    },
    created(){
        if(this.min){
            this.number = this.value
        }
    },
    methods:{
        decrease(){
            if(this.disable) return 0
            if(this.min&&this.number<=this.min) return 0
            this.number-=this.step
            this.inputchange()
        },
        increase(){
            if(this.disable) return 0
            if(this.max&&this.number>=this.max) return 0
            this.number+=this.step
            this.inputchange()
        },
        inputchange(){
            this.number = parseInt(this.number)
            if(this.min&&this.number<this.min){
                this.number = this.min
            }else if(this.max&&this.number>this.max){
                this.number = this.max
            }
            this.$emit('change', this.number);
        }
    }
}
</script>
<style lang="less" scoped>
.ni-numberinput-box{
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 180px;
    span{
        box-sizing: border-box;
        position: absolute;
        z-index: 1;
        top: 1px;
        width: 40px;
        height: calc(100% - 2px);
        line-height: 38px;
        text-align: center;
        background: #f5f7fa;
        color: #606266;
        cursor: pointer;
        font-size: 13px;
        user-select: none;
        &:hover{
            color: #409eff;
        }
        &::after{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%) translateY(-1px);  
            line-height: 20px;
        }
    }
    .ni-numberinput-disable{
        color: #c0c4cc;
        cursor: not-allowed;     
        &:hover{
            color: #c0c4cc;
        }
    }
}
.ni-numberinput-input{
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 50px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    text-align: center;
}
.ni-numberinput-inputdisable{
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
}
.ni-numberinput-de{
    left: 1px;
    border-radius: 4px 0 0 4px;
    border-right: 1px solid #dcdfe6;
    &::after{
        content: "-";
    }
}
.ni-numberinput-in{
    right: 1px;
    border-radius: 0 4px 4px 0;
    border-left: 1px solid #dcdfe6;
    &::after{
        content: "+";
    }
}
</style>
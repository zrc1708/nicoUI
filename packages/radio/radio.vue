<template>
    <label ref="niRadioLabel" class="ni-radio-box" >
        <span class="inputicon"
              :class="[{'radio-selected':label==model},
                       {'radio-selected-disabled':(label==model)&&disabled}]"></span>
        <input type="radio"
               ref="radio" 
               class="ni-radio-input" 
               @change="handleChange"
               :value="label"
               v-model="model">
        <span class="ni-radio-label"
              :class="[{'label-selected':label==model},
                       {'label-disabled':disabled}]">
            <slot></slot>
        </span>
    </label>
</template>
<script>
export default {
    name:'ni-radio',
    props:{
        value:{},
        label:{},
        disabled:{
            type:Boolean,
            default:false
        }
    },
    watch:{
        disabled(newval,oldval){
            this.$refs.radio.disabled = newval
        }
    },
    computed:{
        model:{
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val);
            },
        }
    },
    methods:{
        handleChange(){
            this.$nextTick(() => {
                this.$emit('change', this.model);
            });
        },
    }
}
</script>
<style lang="less" scoped>
.inputicon{
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 0;
        height: 0;
        background-color: white;
        border-radius: 50%;
        transition: all .2s;
    }
}
.radio-selected{
    border-color: #409eff;
    background: #409eff;
    &::before{
        width: 50%;
        height: 50%;
    }
}
.ni-radio-box{
    position: relative;
    user-select: none;
}
.ni-radio-input{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
}
.ni-radio-label{
    padding: 0 5px 0 10px;
    color: #606266;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    vertical-align: middle;
}
.label-selected{
    color: #409eff;
}
.label-disabled{
    color: #c0c4cc;
    cursor: not-allowed;
}
.radio-selected-disabled{
    background-color: #fff;
    border-color: #dcdfe6;
    &::before{
        background-color: #c0c4cc;
    }
}
</style>
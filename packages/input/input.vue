<template>
    <div class="ni-input-box" :class="{'inputerror':error}">
        <div class="before" v-if="$slots.before">
            <slot name="before"></slot>
        </div>
        <span class="content">
            <input
                v-bind="$attrs"
                ref='niinput'
                type="text" 
                :placeholder="placeholder" 
                class="ni-input" 
                @input="input($event)"
                @change="$emit('change',$event.target.value)"
            >
            <i class="clear" @click="clear" v-if="clearShow&&clearable" ></i>
        </span>
        <div class="after" v-if="$slots.after">
            <slot name="after"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'ni-input',
    props:{
        placeholder: {
            type: String,
            default: '请输入',
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        },
    },
    data(){
        return{
            value:'',
            clearShow:false
        }
    },
    methods:{
        input(event){
            if(event.target.value){
                this.clearShow = true
            }
            this.$emit('input',event.target.value)
        },
        clear(){
            this.$emit('input','')
            this.clearShow = false
        },
    }
}
</script>
<style lang="less" scoped>
input::-webkit-input-placeholder{
    color:#dcdfe6;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#dcdfe6;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#dcdfe6;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#dcdfe6;
}
.ni-input-box{
    position: relative;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: flex;
}
.before{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    background-color: #f5f7fa;
    color: #909399;
    border-radius: 4px 0 0 4px;
    padding: 0 20px;
    box-sizing: border-box;
    border-right: 1px solid #dcdfe6;
}
.after{
    display: inline-block;
    height: 40px;
    line-height: 40px;
    background-color: #f5f7fa;
    color: #909399;
    border-radius: 0 4px 4px 0;
    padding: 0 20px;
    box-sizing: border-box;
    border-left: 1px solid #dcdfe6;
}
.content{
    flex: 1;
    position: relative;
}
.ni-input{
    background-color: #fff;
    background-image: none;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    outline: none;
    padding: 3px 35px 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    &:focus{
        outline: none;
        border-color: #409eff;
    }
    &:hover{
        border-color: #c0c4cc;
    }
}
.inputerror{
    border-color: #f56c6c;
    &:focus{
        border-color: #f56c6c;
    }
    &:hover{
        border-color: #f56c6c;
    }
}
.clear{
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: block;
    width: 13px;
    height: 13px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid #dde0e7;
    transition: border-color .1s;

    &:hover{
        border: 1px solid #909399;
    }
    &:hover::before,&:hover::after{
        background-color: #909399;
    }
    &::before{
        content: '';
        display: block;
        width: 70%;
        margin-left: 15%;
        height: 1px;
        background-color: #dde0e7;
        transform: rotate(45deg);
        position: absolute;
        top: 49%;
    }
    &::after{
        content: '';
        display: block;
        width: 70%;
        margin-left: 15%;
        height: 1px;
        background-color: #dde0e7;
        transform: rotate(-45deg);
        position: absolute;
        top: 49%;
    }
}
</style>
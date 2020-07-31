<template>
    <div class="button" :class="[type,{'is-disabled':disabled},disabledClass]" @click="handleClick">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'ni-button',
    props:{
        type: {
            type: String,
            default: 'primary',
            validator(value) {
                return ['default','primary', 'success', 'info','warn','error'].indexOf(value) !== -1
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        
    },
    data(){
        return{

        }
    },
    computed:{
        disabledClass(){
            if(this.disabled){
                let name = this.type+(this.disabled?'-disable':'')
                return name
            }else
                return ''
        }
    },
    methods:{
        handleClick(evt) {
            if(this.disabled) return
            this.$emit('click', evt);
        }
    }
}
</script>
<style lang="less" scoped>
    .button{
        display: inline-block;
        position: relative;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        -moz-user-select:none; /*火狐*/
        -webkit-user-select:none; /*webkit浏览器*/
        -ms-user-select:none; /*IE10*/
        -khtml-user-select:none; /*早期浏览器*/
        user-select:none;
    }

    .default{
        &:hover,&:focus {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
        &:active {
            color: #3a8ee6;
            border-color: #3a8ee6;
            outline: none;
        }
    }
    .primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,&:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
        &:active{
            background: #3a8ee6;
            border-color: #3a8ee6;
            color: #fff;
        }
    }
    .success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,&:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
        &:active{
            background: #5daf34;
            border-color: #5daf34;
            color: #fff;
        }
    }
    .info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,&:focus {
            background: #82848a;
            border-color: #82848a;
            color: #fff;
        }
        &:active{
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
    .warn{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover,&:focus {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }
        &:active{
            background: #cf9236;
            border-color: #cf9236;
            color: #fff;
        }
    }
    .error{
            color: #fff;
            background-color: #f56c6c;
            border-color: #f56c6c;
        &:hover,&:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
        &:active{
            background: #dd6161;
            border-color: #dd6161;
            color: #fff;
        }
    }
    .is-disabled{
        // pointer-events: none;
        cursor: not-allowed;
        background-image: none;
    }
    .default-disable,.default-disable:focus,.default-disable:hover{
        color: #c0c4cc;
        background-color: #fff;
        border-color: #ebeef5;
    }
   .primary-disable,.primary-disable:focus,.primary-disable:hover{
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
    }
    .success-disable,.success-disable:focus,.success-disable:hover{
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
    }
    .info-disable,.info-disable:focus,.info-disable:hover{
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
    }
    .warn-disable,.warn-disable:focus,.warn-disable:hover{
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
    }
    .error-disable,.error-disable:focus,.error-disable:hover{
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
    }
</style>
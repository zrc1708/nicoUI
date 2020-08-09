<template>
    <div class="tag-box" :class="[type,size]" @click="click">
        <slot></slot>
        <i v-if="closeable" class="closebtn" @click="close"></i>
    </div>
</template>
<script>
export default {
    name:'ni-tag',
    props:{
        // tag的种类
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return ['default','primary', 'success', 'info','warn','danger'].indexOf(value) !== -1
            }
        },
        // 大小
        size: {
            type: String,
            validator(value) {
                return ['medium','small', 'mini'].indexOf(value) !== -1
            }
        },
        // 是否允许关闭
        closeable: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return{
            
        }
    },
    mounted(){
        
    },
    methods:{
        close(event) {
            event.stopPropagation();
            this.$emit('close', event);
        },
        click(){
            this.$emit('click', event);
        }
    }
}
</script>
<style lang="less" scoped>
.tag-box{
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;

    .closebtn{
        display: inline-block;
        position: relative;
        margin-left: 5px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        vertical-align: middle;
        transform: translateY(-1px);
        cursor: pointer;

        &:hover{
            background-color: #6db6ff;
        }
        &:hover::before,&:hover::after{
            background-color: white;
        }
        &::before{
            content: '';
            display: block;
            width: 70%;
            margin-left: 15%;
            height: 1px;
            background-color: #606266;
            transform: rotate(45deg);
            position: absolute;
            top: 47%;
        }
        &::after{
            content: '';
            display: block;
            width: 70%;
            margin-left: 15%;
            height: 1px;
            background-color: #606266;
            transform: rotate(-45deg);
            position: absolute;
            top: 47%;
        }
    }
}
.medium{
    height: 28px;
    line-height: 26px;
}
.small{
    height: 24px;
    padding: 0 8px;
    line-height: 22px;
}
.mini{
    height: 20px;
    padding: 0 5px;
    line-height: 19px;
}
.primary{
    color: #409eff;
    background-color: #ecf5ff;
    border: 1px solid #d9ecff;
    .closebtn{
        &:hover{
            background-color: #409eff;
        }
        &::before,&::after{
            background-color: #409eff;
        }
    }
}
.success{
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
    .closebtn{
        &:hover{
            background-color: #67c23a;
        }
        &::before,&::after{
            background-color: #67c23a;
        }
    }
}
.info{
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
    .closebtn{
        &:hover{
            background-color: #909399;
        }
        &::before,&::after{
            background-color: #909399;
        }
    }
}
.warn{
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
    .closebtn{
        &:hover{
            background-color: #e6a23c;
        }
        &::before,&::after{
            background-color: #e6a23c;
        }
    }
}
.danger{
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
    .closebtn{
        &:hover{
            background-color: #f56c6c;
        }
        &::before,&::after{
            background-color: #f56c6c;
        }
    }
}
</style>
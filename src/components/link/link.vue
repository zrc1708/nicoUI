<template>
    <span class="link" 
        :class="[((!this.disabled)&&this.underline)?(type+'-under'):'',
                disabled?(type+'-disabled'):type,
                {'dis':disabled}]" @click="click">
        <slot></slot>
    </span>
</template>
<script>
export default {
    name:'ni-link',
    props:{
        // 显示的文字
        type:{
            type: String,
            default: 'default',
            validator(value) {
                return ['default','primary', 'success', 'info','warn','danger'].indexOf(value) !== -1
            }
        },
        // 是否显示下划线
        underline:{
            type: Boolean,
            default: false
        },
        // 是否禁用
        disabled:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        click(){
            if(this.disabled) return 0
            this.$emit('click')
        }
    }
}
</script>
<style lang="less" scoped>
.link{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 14px;
    font-weight: 500;

    &:hover::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
    }
}
.default{
    color: #606266;
    &:hover{
        color: #409eff;
    }
}
.default-under:hover::after{
    background-color: #66b1ff;
}
.success-under:hover::after{
    background-color: #85ce61;
}
.primary-under:hover::after{
    background-color: #66b1ff;
}
.info-under:hover::after{
    background-color: #a6a9ad;
}
.warn-under:hover::after{
    background-color: #ebb563;
}
.danger-under:hover::after{
    background-color: #f78989;
}
.dis{
    -moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;
}
.default-disabled{
    color: #c0c4cc;
    cursor: not-allowed;
}
.success-disabled{
    color: #b3e19d;
    cursor: not-allowed;
}
.primary-disabled{
    color: #a0cfff;
    cursor: not-allowed;
}
.info-disabled{
    color: #c8c9cc;
    cursor: not-allowed;
}
.warn-disabled{
    color: #f3d19e;
    cursor: not-allowed;
}
.danger-disabled{
    color: #fab6b6;
    cursor: not-allowed;
}

.primary{
    color: #409eff;
    &:hover{
        color: #66b1ff;
    }
}
.success{
    color: #67c23a;
    &:hover{
        color: #85ce61;
    }
}
.info{
    color: #909399;
    &:hover{
        color: #a6a9ad;
    }
}
.warn{
    color: #e6a23c;
    &:hover{
        color: #ebb563;
    }
}
.danger{
    color: #f56c6c;
    &:hover{
        color: #f78989;
    }
}
</style>
<template>
<transition name="dialog">
    <div class="dialog-box" v-show="visible">
        <!-- 遮罩 -->
        <div class="mask" @click="cancel" v-if="havemask"></div>
        <!-- 对话框主体 -->
        <transition name="dialog-body-animate">
            <div class="dialog-body" v-show="visible">
                <!-- 对话框标题 -->
                <div class="dialog-body-header">
                    <div class="title">{{ title }}</div>
                    <i @click="cancel"></i>
                </div>
                <!-- 对话框主体 -->
                <div class="dialog-body-content">
                    <slot></slot>
                </div>
                <!-- 对话框底部按钮 -->
                <div class="dialog-body-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </transition>
    </div>
</transition>
</template>
<script>
export default {
    name:'ni-dialog',
    props:{
        // 从父组件获取，控制dialog显隐
        visible:{
            type:Boolean
        },
        // 标题
        title:{
            type:[String,Number],
            default:'标题'
        },
        // 是否显示遮罩
        havemask:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        cancel(){
	        // this.$emit('update:visible',!this.visible);
	        this.$emit('close');
        }
    }
}
</script>
<style lang="less" scoped>
.dialog-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
}
.mask{
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
}
.dialog-body{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    width: 420px;
    border-radius: 4px;

    .dialog-body-header{
        position: relative;
        padding: 15px 15px 10px;
        font-size: 18px;
        font-weight: 400;

        i{
            position: absolute;
            top: 18px;
            right: 15px;
            display: block;
            width: 18px;
            height: 18px;
            cursor: pointer;

            &:hover::before,&:hover::after{
                background-color: blue;
            }
            &::before{
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                background-color: #909399;
                transform: rotate(45deg);
                position: absolute;
                top: 50%;
            }
            &::after{
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                background-color: #909399;
                transform: rotate(-45deg);
                position: absolute;
                top: 50%;
            }
        }
    }
    .dialog-body-content{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
    }
    .dialog-body-footer{
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
    }
}
.dialog-enter-active, .dialog-leave-active {
  transition: opacity .4s;
}
.dialog-enter, .dialog-leave-to {
  opacity: 0;
}

.dialog-body-animate-enter,.dialog-body-animate-leave-to{
  top: 45%;
  opacity: 0;
}
.dialog-body-animate-enter-active,.dialog-body-animate-leave-active{
  transition: all .4s;
}
</style>
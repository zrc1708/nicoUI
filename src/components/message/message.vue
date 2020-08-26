<template>
<transition name="message">
    <div class="mymessage" :class="[type+'border']" v-show="state">
        <i :class="['base',type]"></i>
        <span class="ni-message-content">{{text}}</span>
    </div>
</transition>
</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'success',
                validator(value) {
                    return ['success', 'error', 'warn','default'].indexOf(value) !== -1
                }
            },
            text: {
                type: String,
                default: 'ok'
            },
            time: {
                type: Number,
                default: 1600
            }
        },
        data(){
            return{
                state:false,
            }
        },
        mounted(){
            this.state = true
            setTimeout(() => {
                this.state = false
            }, this.time+300);
        }
    }
</script>
<style lang="less" scoped>
.mymessage{
    box-sizing: border-box;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.9);
    height: 40px;
    min-width: 150px;
    border-radius: 5px;
    text-align: center;
    top: 15px;
    z-index: 99;
}
.successborder{
    border: 1px solid #52c41a;
}
.errorborder{
    border: 1px solid #f5222d;
}
.warnborder{
    border: 1px solid #de912f;
}
.defaultborder{
    border: 1px solid #7e8087;
}
.ni-message-content{
    line-height: 40px;
    margin-right: 10px;
    vertical-align: middle;
}
.base{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    border-radius: 50%;
    vertical-align: middle;
    position: relative;
}
.success{
    background-color: #52c41a;
    &::after{
        position: absolute;
        content: '';
        width: 13px;
        height: 7px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-70%) rotate(-45deg);
        box-sizing: border-box;
        border-bottom: 2px solid white;
        border-left: 2px solid white;
    }
}
.error{
    background-color: #f5222d;
    &::before{
        position: absolute;
        content: '';
        width: 13px;
        height: 2px;
        top: 50%;
        left: 50%;
        background-color: white;
        transform: translate(-50%,-50%) rotate(45deg);
    }
    &::after{
        position: absolute;
        content: '';
        width: 13px;
        height: 2px;
        top: 50%;
        left: 50%;
        background-color: white;
        transform: translate(-50%,-50%) rotate(-45deg);
    }
}
.warn{
    background-color: #de912f;
    &::before{
        position: absolute;
        content: '';
        width: 2px;
        height: 9px;
        top: 15%;
        left: 50%;
        background-color: white;
        transform: translateX(-50%);
    }
    &::after{
        position: absolute;
        content: '';
        width: 2px;
        height: 2px;
        bottom: 15%;
        left: 50%;
        background-color: white;
        transform: translateX(-50%);
    }
}
.default{
    background-color: #7e8087;
    &::after{
        position: absolute;
        content: '';
        width: 15px;
        height: 4px;
        top: 50%;
        left: 50%;
        background-image: radial-gradient(circle, white 1.5px, transparent 0);
        background-size: 5px 100%;
        transform: translate(-50%,-50%);
    }
}

.message-enter-active, .message-leave-active {
  transition: all .3s;
}
.message-enter, .message-leave-to {
  opacity: 0;
  top: -40px!important;
}
</style>
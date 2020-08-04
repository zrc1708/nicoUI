<template>
<transition name="message">
     <div class="mymessage" :class="[type+'border']" v-show="state">
        <i :class="['base',type]"></i><span>{{text}}</span>
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
span{
    line-height: 40px;
    margin-right: 10px;
}
.base{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(./message-icon.webp) no-repeat;
    background-size: cover;
    vertical-align: middle;
    transform: translateY(-2px);
    margin: 0 10px;
}
.success{
    background-position: 0 0;
}
.error{
    background-position: -60px 0;
}
.warn{
    background-position: -40px 0;
}
.default{
    background-position: -20px 0;
}

.message-enter-active, .message-leave-active {
  transition: all .3s;
}
.message-enter, .message-leave-to {
  opacity: 0;
  top: -40px!important;
}
</style>
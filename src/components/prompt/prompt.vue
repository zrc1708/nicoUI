<template>
    <span class="prompt-box" @mouseenter="enter" @mouseleave="leave">
        <transition name="promptdec-box-text">
            <span class="text-decoration" :class="[decposition+'-dec',decposition+'-'+theme+'-dec']" v-show="visible"></span>
        </transition>
        <transition name="prompt-box-text">
            <span class="prompt-box-text" 
                :class="[theme,position]"
                v-show="visible" 
                @mouseenter="entertext">
                {{text}}
            </span>
        </transition>
        <slot></slot>
    </span>
</template>
<script>
export default {
    name:'ni-prompt',
    props:{
        // 显示的文字
        text:{
            type:[String,Number],
            default:'nicoUI文字提示'
        },
        // 主题
        theme:{
            type:String,
            default: 'black',
            validator(value) {
                return ['black','light'].indexOf(value) !== -1
            }
        },
        // 显示的位置
        position:{
            type:String,
            default: 'topleft',
            validator(value) {
                return ['topleft','top','topright',
                'righttop','right','rightbottom',
                'bottomleft','bottom','bottomright',
                'lefttop','left','leftbottom'].indexOf(value) !== -1
            }
        },
        // 是否允许鼠标进入
        enterable:{
            type:Boolean,
            default: false
        },
        // 自动隐藏时间
        hidetime:{
            type:Number
        },
    },
    data(){
        return{
            visible:false
        }
    },
    computed:{
        decposition(){
            if(this.position.slice(0,3)=='top'){
                return 'top'
            }else if(this.position.slice(0,5)=='right'){
                return 'right'
            }else if(this.position.slice(0,6)=='bottom'){
                return 'bottom'
            }else if(this.position.slice(0,4)=='left'){
                return 'left'
            }
        }
    },
    methods:{
        enter(){
            this.visible = true
            if(this.hidetime){
                setTimeout(() => {
                    this.visible = false
                }, this.hidetime);
            }
        },
        leave(){
            this.visible = false
        },
        entertext(){
            if(this.enterable) return 0
            this.visible = false
        }
    }
}
</script>
<style lang="less" scoped>
.prompt-box{
    display: inline-block;
    position: relative;

    .prompt-box-text{
        display: inline-block;
        position: absolute;
        z-index: 22;
        border: 1px solid black;
        white-space: nowrap;
        padding: 8px 8px;
        border-radius: 5px;
        font-size: 12px;
        box-sizing: border-box;
    }
    .topleft{
        top: 0;
        left: 0;
        transform: translate(0,calc(-100% - 7px));
    }
    .top{
        top: 0;
        left: 50%;
        transform: translate(-50%,calc(-100% - 7px));
    }
    .topright{
        top: 0;
        right: 0;
        transform: translate(0,calc(-100% - 7px));
    }
    .righttop{
        top: 0;
        left: calc(100% + 7px);
    }
    .right{
        top: 50%;
        left: calc(100% + 7px);
        transform: translateY(-50%);
    }
    .rightbottom{
        bottom: 0;
        left: calc(100% + 7px);
    }
    .bottomleft{
        bottom: 0;
        left: 0;
        transform: translate(0,calc(100% + 7px));
    }
    .bottom{
        bottom: 0;
        left: 50%;
        transform: translate(-50%,calc(100% + 7px));
    }
    .bottomright{
        bottom: 0;
        right: 0;
        transform: translate(0,calc(100% + 7px));
    }
    .lefttop{
        top: 0;
        left: 0;
        transform: translate(calc(-100% - 7px),0);
    }
    .left{
        top: 50%;
        left: 0;
        transform: translate(calc(-100% - 7px),-50%);
    }
    .leftbottom{
        top: 0;
        left: 0;
        transform: translate(calc(-100% - 7px),0);
    }

    .black{
        color: white;
        background-color: black;
    }
    .light{
        color: black;
        background-color: white;
    }
    // 装饰三角
    .text-decoration{
        z-index: 23;
        position: absolute;
        width: 0;
        height: 0;
        border: 7px solid;
    }
    .left-dec{
        border-color: transparent transparent transparent black;
        left: 0;
        top: 0;
        transform: translate(-7px,50%);
    }
    .top-dec{
        border-color: black transparent transparent transparent;
        left: 50%;
        top: 0;
        transform: translate(-50%,-7px);
    }
    .right-dec{
        border-color: transparent black transparent transparent;
        right: 0;
        top: 50%;
        transform: translate(7px,-50%);
    }
    .bottom-dec{
        border-color: transparent transparent black transparent;
        left: 50%;
        bottom: 0;
        transform: translate(-50%,7px);
    }
    .left-light-dec{
        &::before{
            content: '';
            z-index: 24;
            position: absolute;
            width: 0;
            height: 0;
            border: 7px solid;
            left: 0;
            top: 0;
            transform: translate(calc(-50% - 1px),-50%);
            border-color: transparent transparent transparent white;
        }
    }
    .bottom-light-dec{
        &::before{
            content: '';
            z-index: 24;
            position: absolute;
            width: 0;
            height: 0;
            border: 7px solid;
            left: 0;
            bottom: 0;
            transform: translate(calc(-50%),8px);
            border-color: transparent transparent white transparent;
        }
    }
    .right-light-dec{
        &::before{
            content: '';
            z-index: 24;
            position: absolute;
            width: 0;
            height: 0;
            border: 7px solid;
            left: 0;
            bottom: 0;
            transform: translate(calc(-50% + 1px),7px);
            border-color: transparent white transparent transparent;
        }
    }
    .top-light-dec{
        &::before{
            content: '';
            z-index: 24;
            position: absolute;
            width: 0;
            height: 0;
            border: 7px solid;
            left: 0;
            bottom: 0;
            transform: translate(-50%,6px);
            border-color: white transparent transparent transparent;
        }
    }
}
.prompt-box-text-enter-active {
  transition: opacity .4s;
}
 .prompt-box-text-leave-active {
  transition: opacity .3s;
}
.prompt-box-text-enter, .prompt-box-text-leave-to {
  opacity: 0;
}
.promptdec-box-text-enter-active {
  transition: opacity .3s;
}
.promptdec-box-text-leave-active {
  transition: opacity .3s;
}
.promptdec-box-text-enter, .promptdec-box-text-leave-to {
  opacity: 0;
}
</style>
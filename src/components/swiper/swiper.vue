<template>
    <div class="ni-swiper" ref="ni-swiper">
        <div class="ni-swiper-content">
            <div class="ni-swiper-movebox" 
                ref="movebox"
                :style="{'width': `${this.wrapperWidth}px`,
                'transform': translateValue,
                'transition-duration':haveTransition?'.2s':'0s'}">
                <slot></slot>
            </div>
        </div>
        <div class="button btnleft" @click="btnleft"></div>
        <div class="button btnright" @click="btnright"></div>
    </div>
</template>
    
<script>
    export default {
        name:'ni-swiper',
        props: {
            // 标题
            title: {
            type: String,
            default: '标题'
            },
            
        },
        data () {
            return {
                wrapperWidth:0,     //轮播内容的总长度
                sliderLength:0,     //轮播内容数
                translateX: 0,      // x轴的偏移距离
                haveTransition:false,   //是否使用过渡
                index:1,            //当前显示的轮播元素序号
                // translateValue:'',
            };
        },
        mounted(){
            // 获取每一个轮播元素的宽度，以及数量
            this.width = this.$refs['ni-swiper'].offsetWidth;
            this.sliderLength = this.$children.length;
            // 用获取的轮播元素宽度给移动盒子赋上宽度
            this.wrapperWidth = (this.sliderLength + 2) * this.width;
            // 通过dom操作将轮播元素的第一个以及最后一个分别添加至首位以及末尾
            let dom = this.$refs['movebox'];
            dom.insertBefore(this.$children[this.sliderLength - 1].$el.cloneNode(true),dom.children[0])
            dom.insertBefore(this.$children[0].$el.cloneNode(true), dom.children[dom.children.length]);
            // 调整为第一张移动元素,此时不需要过渡
            this.translateX -= this.width
            setTimeout(() => {
                this.haveTransition = true                
            }, 5);
        },
        computed:{
            translateValue(){
                return `translate(${this.translateX}px, 0) translateZ(0)`
            }
        },
        methods: {
            // 左边按钮点击
            btnleft(){
                if(this.index==0){
                    // 移动到了最左边，先在无过渡下，移动到最后的轮播元素，再进行过渡轮播
                    this.haveTransition = false
                    this.translateX -= this.sliderLength*this.width
                    this.index = this.sliderLength
                    setTimeout(() => {
                        this.haveTransition = true
                        this.translateX += this.width
                        this.index--
                    }, 5);
                }else{
                    this.translateX += this.width
                    this.index--
                }
            },
            // 右边按钮点击
            btnright(){
                if(this.index==this.sliderLength+1){
                    // 移动到了最右边，先在无过渡下，移动到初始的轮播元素，再进行过渡轮播
                    this.haveTransition = false
                    this.translateX += this.sliderLength*this.width
                    this.index = 1
                    setTimeout(() => {
                        this.haveTransition = true
                        this.translateX -= this.width
                        this.index++
                    }, 5);
                }else{
                    this.translateX -= this.width
                    this.index++
                }
            }
        }
    };
</script>
<style lang="less" scoped>
.ni-swiper{
    width: 100%;
    height: 100%;
    position: relative;

    &-content{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    &-movebox{
        width: 100%;
        height: 100%;
    }

    .button{
        position: absolute;
        width: 70px;
        height: 70px;
        top: 50%;
        border-radius: 50%;
        transform: translateY(-50%);
        background-color: pink;
    }
    .btnleft{
        left: 0;
        margin-left: 20px;
        &::before{
            position: absolute;
            top: 29px;
            content: '';
            display: block;
            width: 15px;
            margin-left: 26px;
            height: 3px;
            background-color: black;
            transform: rotate(-45deg);
        }
        &::after{
            position: absolute;
            bottom: 29px;
            content: '';
            display: block;
            width: 15px;
            margin-left: 26px;
            height: 3px;
            background-color: black;
            transform: rotate(45deg);
        }
    }
    .btnright{
        right: 0;
        margin-right: 20px;
        &::before{
            position: absolute;
            top: 38px;
            content: '';
            display: block;
            width: 15px;
            margin-left: 30px;
            height: 3px;
            background-color: black;
            transform: rotate(-45deg);
        }
        &::after{
            position: absolute;
            bottom: 38px;
            content: '';
            display: block;
            width: 15px;
            margin-left: 30px;
            height: 3px;
            background-color: black;
            transform: rotate(45deg);
        }
    }
}
</style>
    
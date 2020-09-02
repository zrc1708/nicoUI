<template>
    <div class="ni-swiper" ref="ni-swiper" v-resize="itChange" @mouseenter="enter" @mouseleave="leave">
        <!-- 轮播主体 --> 
        <div class="ni-swiper-content" @click="swiperClick">
            <div class="ni-swiper-movebox" 
                ref="movebox"
                :data-length="sliderLength"
                :style="{'width': `${this.wrapperWidth}%`,
                'margin-left': translateValue,
                'transition-duration':haveTransition?(playTime+'ms'):'0s'}">
                <slot></slot>
            </div>
        </div>
        <!-- 下方标识 -->
        <div class="ni-swiper-markbox" :class="['markbox-'+marktype]">
            <div v-for="item in sliderLength" :key="item" 
            class="ni-swiper-mark"
            ref="ni-swiper-mark"
            :data-index="item"
            @click="moveTo($event)">
                <div class="ni-swiper-mark-colorbox" :data-index="item" 
                :style="{'background-color': (item==1)?markColor:'#cbd3de'}"></div>
            </div>
        </div>
        <!-- 左右按钮 -->
        <transition name="btnl">
            <div class="button btnleft" @click="btnleft()" v-show="showButton||alwaysShowButton"></div>
        </transition>
        <transition name="btnr">
            <div class="button btnright" @click="btnright()" v-show="showButton||alwaysShowButton"></div>
        </transition>
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
            // 是否自动轮播
            autoplay:{
                type: Boolean,
                default: false
            },
            // 自动轮播的间隔
            autoplayTime:{
                type: Number,
                default: 3000
            },
            // 轮播过渡效果的时间
            playTime:{
                type: Number,
                default: 200
            },
            // 是否一直显示按钮
            alwaysShowButton:{
                type: Boolean,
                default: false
            },
            // 标识的位置
            marktype: {
                type: String,
                default: 'center',
                validator(value) {
                    return ['center','left', 'right'].indexOf(value) !== -1
                }
            },
            // 标识的颜色
            markColor: {
                type: String,
                default: 'white'
            },
        },
        data () {
            return {
                wrapperWidth:0,     //轮播内容的总长度
                sliderLength:0,     //轮播内容数
                translateX: 0,      // x轴的偏移距离
                haveTransition:false,   //是否使用过渡
                index:1,            //当前显示的轮播元素序号
                showButton:false,   //控制按钮是否显示
            };
        },
        mounted(){
            // 获取轮播元素数量
            this.sliderLength = this.$children.length;
            // 用获取的轮播元素数量给移动盒子赋上宽度（百分比）
            this.wrapperWidth = (this.sliderLength + 2) * 100;
            // 将轮播元素的第一个以及最后一个分别添加至末尾以及首位
            let dom = this.$refs['movebox'];
            dom.insertBefore(this.$children[this.sliderLength - 1].$el.cloneNode(true),dom.children[0])
            dom.insertBefore(this.$children[0].$el.cloneNode(true), dom.children[dom.children.length]);

            // 无过渡下调整位置到第一张元素
            this.translateX -= 100
            setTimeout(() => {
                this.haveTransition = true                
            }, 5);
            // 为每个轮播元素赋上宽度
            let width = this.$refs['ni-swiper'].offsetWidth
            dom.children.forEach(item=>{
                item.style.width = width+'px'
            })
            // 开启自动轮播
            if(this.autoplay){
                this.timer = setInterval(()=>{
                    this.btnright()
                },this.autoplayTime)
            }
        },
        watch:{
            index(newval){
                this.moveMark()
            }
        },
        computed:{
            translateValue(){
                return `${this.translateX}%`
            },
            trueIndex(){
                if(this.index==this.sliderLength+1){
                    return 1
                }else if(this.index==0){
                    return this.sliderLength
                }else{
                    return this.index
                }
            }
        },
        methods: {
            // 左边按钮点击
            btnleft(step=1){
                if(this.index==0){
                    // 移动到了最左边，先在无过渡下，移动到最后的轮播元素，再进行过渡轮播
                    this.haveTransition = false
                    this.translateX -= this.sliderLength*100
                    this.index = this.sliderLength
                    this.index-=step
                    setTimeout(() => {
                        this.haveTransition = true
                        this.translateX += step*100
                    }, 5);
                }else{
                    this.translateX += step*100
                    this.index-=step
                }
                this.showindex()
            },
            // 右边按钮点击
            btnright(step=1){
                if(this.index==this.sliderLength+1){
                    // 移动到了最右边，先在无过渡下，移动到初始的轮播元素，再进行过渡轮播
                    this.haveTransition = false
                    this.translateX += this.sliderLength*100
                    this.index=1+step
                    setTimeout(() => {
                        this.haveTransition = true
                        this.translateX -= step*100
                    }, 5);
                }else{
                    this.translateX -= step*100
                    this.index+=step
                }
                this.showindex()
            },
            // 标识点移动
            moveMark(){
                let marks = this.$refs['ni-swiper-mark']
                marks.forEach((item,i)=>{
                    if(item.dataset.index==this.trueIndex){
                        item.firstChild.style.backgroundColor = this.markColor
                    }else{
                        item.firstChild.style.backgroundColor = '#cbd3de'
                    }
                })
            },
            // 当宽度变化时就会执行
            itChange() {
                let dom = this.$refs['movebox'];
                let width = this.$refs['ni-swiper'].offsetWidth
                dom.children.forEach(item=>{
                    item.style.width = width+'px'
                })
            },
            // 标识点击标识点
            moveTo(event){
                const clickIndex = event.target.dataset.index
                if(clickIndex==this.trueIndex) return 0
                else if(clickIndex>this.trueIndex){
                    this.btnright(clickIndex-this.trueIndex)
                }else{
                    this.btnleft(this.trueIndex-clickIndex)
                }
            },
            showindex(){
                this.$emit('change', this.trueIndex-1)
            },
            enter(){
                this.showButton = true
                clearInterval(this.timer)
            },
            leave(){
                this.showButton = false
                if(this.autoplay){
                    this.timer = setInterval(()=>{
                        this.btnright()
                    },this.autoplayTime)
                }
            },
            swiperClick(){
                this.$emit('swiperClick', this.trueIndex-1)
            }
        },
        // 局部注册自定义指令
        directives: {
            resize: {
                bind(el, binding) { // el为绑定的元素，binding为绑定给指令的对象
                    let width = '';
                    function isReize() {
                        const style = document.defaultView.getComputedStyle(el);
                        if (width !== style.width ) {
                            binding.value();  // 关键
                        }
                        width = style.width;
                    }
                    el.__vueSetInterval__ = setInterval(isReize, 200);
                },
                unbind(el) {
                    clearInterval(el.__vueSetInterval__);
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
        width: 40px;
        height: 40px;
        top: 50%;
        border-radius: 50%;
        transform: translateY(-50%);
        background-color: pink;
        cursor: pointer;
    }
    .btnleft{
        left: 0;
        margin-left: 20px;
        background-color: rgba(31,45,61,.11);
        transition: .3s;
        &:hover{
            background-color: rgba(31,45,61,.23);
        }
        &::before{
            position: absolute;
            top: 15px;
            content: '';
            display: block;
            width: 12px;
            margin-left: 12px;
            height: 2px;
            background-color: #e4e8ec;
            transform: rotate(-45deg);
        }
        &::after{
            position: absolute;
            bottom: 15px;
            content: '';
            display: block;
            width: 12px;
            margin-left: 12px;
            height: 2px;
            background-color: #e4e8ec;
            transform: rotate(45deg);
        }
    }
    .btnright{
        right: 0;
        margin-right: 20px;
        background-color: rgba(31,45,61,.11);
        transition: .3s;
        &:hover{
            background-color: rgba(31,45,61,.23);
        }
        &::before{
            position: absolute;
            top: 23px;
            content: '';
            display: block;
            width: 12px;
            margin-left: 16px;
            height: 2px;
            background-color: #e4e8ec;
            transform: rotate(-45deg);
        }
        &::after{
            position: absolute;
            bottom: 23px;
            content: '';
            display: block;
            width: 12px;
            margin-left: 16px;
            height: 2px;
            background-color: #e4e8ec;
            transform: rotate(45deg);
        }
    }
}
.ni-swiper-markbox{
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    display: flex;

    .ni-swiper-mark{
        cursor: pointer;
        width: 30px;
        height: 20px;
        padding: 8px 0;
        box-sizing: border-box;
        margin: 0 5px;

        .ni-swiper-mark-colorbox{
            width: 100%;
            height: 100%;
            background-color: #cbd3de;
        }
    }
}
.markbox-center{
    align-items: center;
    justify-content: center;
}
.markbox-left{
    margin-left: 20px;
    align-items: center;
    justify-content: flex-start;
}
.markbox-right{
    transform: translateX(-20px);
    align-items: center;
    justify-content: flex-end;
}
// 按钮过渡
.btnl-enter-active, .btnl-leave-active {
    transition: all .4s!important;
}
.btnl-enter, .btnl-leave-to {
    margin-left: 5px!important;
    opacity: 0;
}
.btnr-enter-active, .btnr-leave-active {
    transition: all .4s!important;
}
.btnr-enter, .btnr-leave-to {
    margin-right: 5px!important;
    opacity: 0;
}
</style>
    
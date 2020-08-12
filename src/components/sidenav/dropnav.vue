<template>
    <ul class="dropnav-box">
        <div class="title" 
             :style="{'padding-left':this.paddingleft+'px'}"
             @click="showul"
             @mouseenter='enter' @mouseleave="leave" >
            <slot name="droptitle"></slot>
        </div>
        <!-- <transition name="fade"> -->
            <!-- <div class="dropul"  
                :class="[{'hide':ishide}]"
                ref="dropnavBoxUl"
                :style="sty">
                <slot></slot>
            </div> -->
            <div class="dropul" ref="dropnavBoxUl">
                <slot></slot>
            </div>
        <!-- </transition> -->
    </ul>
</template>
<script>
export default {
    name:'ni-sidenav-drop',
    inject: ['sidenav'],
    props:{
        
    },
    data(){
        return{
            paddingleft:(this.$parent.paddingleft||0)+20,
            sty:'',
            ishide:false
        }
    },
    watch:{
        
    },
    mounted(){
        // this.height= this.$refs.dropnavBoxUl.offsetHeight;
        // this.height = 'background-color:black'
    },
    methods:{
        showul(){
            // let height= this.$refs.dropnavBoxUl.offsetHeight;
            // this.sty = `height:${height}px`
            // this.ishide = !this.ishide
            let element = this.$refs.dropnavBoxUl

        },
        changeheight1(element, time){
            if (typeof window.getComputedStyle == "undefined") return;
    
            var height = window.getComputedStyle(element).height;

            element.style.transition = "none";    // 本行2015-05-20新增，mac Safari下，貌似auto也会触发transition, 故要none下~
            element.style.height = "auto";

            var targetHeight = window.getComputedStyle(element).height;
            element.style.height = height;
            element.offsetWidth = element.offsetWidth;
            if (time) element.style.transition = "height "+ time +"ms";
            element.style.height = targetHeight;
        },
        animate(){
            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var step = (target - obj.offsetLeft) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                if (obj.offsetLeft == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer);
                    // if (callback) {
                    //     // 调用回调函数
                    //     callback()
                    // }
                    callback && callback()
                }
                // 慢慢变小实现缓动效果 步长公式：（目标值-现在位置）/10
                obj.style.left = obj.offsetLeft + step + 'px';
            }, 15);
        },
        enter(){
            // let height= this.$refs.dropnavBoxUl.offsetHeight;
            // console.log(height)
        },
        leave(){

        }
    }
}
</script>
<style lang="less" scoped>
.dropnav-box{
    width: 0;
    padding: 0;
    width: 100%;
}
.nav-icon{
    color: #909399;
    vertical-align: middle;
    margin-right: 5px;
    padding-bottom: 1px;
}
.title{
    height: 56px;
    line-height: 56px;
    font-size: 14px;
    color: #303133;
    padding: 0 20px 0 0;
    cursor: pointer;

    &:hover{
        background-color: #ecf5ff;
    }
}
.dropul{
    // transition: height .4s;
    overflow: hidden;
}
.hide{
    height: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
  max-height: 10%;
}
</style>
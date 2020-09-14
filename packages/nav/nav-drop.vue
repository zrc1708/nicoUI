<template>
    <li class="dropnav-box" 
            @mouseenter="headenter"
            @mouseleave="headleave">
        <div class="dropnav-box-title" 
             :class="[nav.type=='head'?'headdropbox':'']"
             ref="dropnavBoxTitle"
             :style="{'padding-left':nav.type=='side'?this.paddingleft+'px':'',
                      'background-color':(nav.type=='head'&&nav.activeItemIndexObj==indexhead)?nav.backgroundHoverColor:'',
                      'color':this.itemFontColor,
                      'border-bottom': (nav.type=='head'&&nav.activeItemIndexObj==indexhead)?`2px solid ${this.nav.headBottomColor}`:''}"
             @click="showul"
             @mouseenter="enter"
             @mouseleave="leave">
            <slot name="droptitle"></slot>
            <i class="dropnav-icon" :class="[{'iconrotate':showulicon}]"></i>
        </div>
        <div v-if="nav.type=='side'" class="dropchildren" ref="dropnavChildrenBox" :style="{'height':sty}">
            <slot></slot>
        </div>
        <transition name="dropchildren-head" v-else>
            <div class="dropchildren-head"
                 :class="[{'dropchildren-head-children':this.$parent.$options.name!=='ni-nav'}]"
                 :style="{'background-color':nav.headBackgroundColor}"
                 v-show="showHeadChildren">
                <slot></slot>
            </div>
        </transition>
    </li>
</template>
<script>
export default {
    name:'ni-nav-drop',
    inject: ['nav'],
    props:{
        // 是否默认展开(side模式)
        showchildren:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            paddingleft:(this.$parent.paddingleft||0)+20,
            height:0,
            firstClose:true, // 首次点击效果为收起（配合showchildren）
            sty:'',
            showulicon:true,   //控制箭头朝向
            itemFontColor:'',
            showHeadChildren:false, //控制head模式下下拉列表的显示
            indexhead:'ni-ui-default',   //head模式控制样式
        }
    },
    created(){
        this.itemFontColor = this.nav.fontColor
        if(this.nav.type=='head'){
            this.showulicon = false
        }
    },
    mounted(){
        if(this.nav.type=='side'){
            // 获取初始高度，此时获取到的是子组件均展开的高度（即使子组件可能默认不展开）
            this.height= this.$refs.dropnavChildrenBox.offsetHeight
            // 遍历子组件树，如有默认不展开的下拉框，就减去其收起的高度
            this.setHeight(this.$children)

            // 根据是否默认展开进行调整
            if(!this.showchildren){
                this.sty = '0px'
                this.firstClose = false
                this.showulicon = !this.showulicon
            }
        }
    },
    methods:{
        // 遍历子组件树
        setHeight(datas){ 
            for(let i = 0; i < datas.length; i++){
                if(datas[i].showchildren!==undefined){
                    if(datas[i].showchildren==false){
                        this.height-=datas[i].height
                    }
                    this.setHeight(datas[i].$children)
                }
            }
        },
        showul(){
            if(this.nav.type=='side'){
                let element = this.$refs.dropnavChildrenBox
                let ele = document.querySelector('.dropul')
                if(this.firstClose){
                    // 关闭并保存高度，开启时使用
                    this.height= element.offsetHeight
                    this.showulicon = !this.showulicon
                    this.animate(element,0)
                    
                }else{
                    // 开启
                    this.showulicon = !this.showulicon
                    this.animate(element,this.height,()=>{
                        element.style.height = 'auto'
                    })
                }
                this.firstClose = !this.firstClose
            }else{
                window.clearTimeout(this.timer)
                this.showHeadChildren = !this.showHeadChildren
                this.showulicon = !this.showulicon
            }
        },
        animate(obj, target, callback){
            clearInterval(obj.timer);
            obj.timer = setInterval(()=> {
                let step = (target - obj.offsetHeight) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                if (obj.offsetHeight == target) {
                    clearInterval(obj.timer);
                    callback && callback()
                }
                this.sty = obj.offsetHeight + step + 'px'
            }, 11);
        },
        enter(){
            this.$refs.dropnavBoxTitle.style.backgroundColor = this.nav.backgroundHoverColor
        },
        leave(){
            this.$refs.dropnavBoxTitle.style.backgroundColor = ''
        },
        headenter(){
            this.timer = setTimeout(() => {
                if(this.nav.type=='head'){
                    this.showHeadChildren = true
                    this.showulicon = !this.showulicon
                }
            }, 200);
        },
        headleave(){
            window.clearTimeout(this.timer)
            if(this.nav.type=='head'){
                this.showHeadChildren = false
                this.showulicon = !this.showulicon
            }
        }
    }
}
</script>
<style lang="less" scoped>
.dropnav-box{
    list-style: none;
    position: relative;
}
.dropnav-box-title{
    position: relative;
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    padding: 0 20px 0 0;
    cursor: pointer;
    transition: background-color .3s;
    box-sizing: border-box;
}
.headdropbox{
    padding: 0 40px 0 20px;
}
// 侧栏
.dropchildren{
    overflow: hidden;
}
.dropnav-icon{
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    transition:  transform .5s cubic-bezier(.23,1,.32,1);
    display: block;
    width: 14px;
    height: 14px;
    &::before{
        content:"";
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        height: 1px;
        width: 8px;
        margin-left: .5px;
        background-color: #c0c4cc;
        transform: rotate(45deg);
    }
    &::after{
        content:"";
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        height: 1px;
        width: 8px;
        margin-right: .5px;
        background-color: #c0c4cc;
        transform: rotate(-45deg);
    }
}
.iconrotate{
    transform: translateY(-50%) rotate(180deg);
}
// 顶部
.dropchildren-head{
    position: absolute;
    z-index: 999;
    width: 100%;
}
.dropchildren-head-children{
    top: 0;
    left: 100%;
}
.dropchildren-head-enter-active,.dropchildren-head-leave-active{
    opacity:1;
    transform:scaleY(1);
    transition:transform .3s cubic-bezier(.23,1,.32,1),
                opacity .3s cubic-bezier(.23,1,.32,1);
    transform-origin: top
}
.dropchildren-head-enter,.dropchildren-head-leave-active{
    opacity:0;
    transform:scaleY(0)
}
</style>
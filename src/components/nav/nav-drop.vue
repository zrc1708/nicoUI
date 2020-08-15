<template>
    <li class="dropnav-box">
        <div class="dropnav-box-title" 
             :class="[nav.type=='head'?'headdropbox':'']"
             ref="dropnavBoxTitle"
             :style="{'padding-left':nav.type=='side'?this.paddingleft+'px':'',
                      'color':this.itemFontColor}"
             @click="showul"
             @mouseenter="enter"
             @mouseleave="leave">
            <slot name="droptitle"></slot>
            <i class="dropnav-icon" :class="[{'iconrotate':showulicon}]"></i>
        </div>
        <div v-if="nav.type=='side'" class="dropchildren" ref="dropnavChildrenBox" :style="{'height':sty}">
            <slot></slot>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </li>
</template>
<script>
export default {
    name:'ni-sidenav-drop',
    inject: ['nav'],
    props:{
        // 是否默认展开
        showchildren:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            paddingleft:(this.$parent.paddingleft||0)+20,
            height:0,
            // 首次点击效果为收起（配合showchildren）
            firstClose:true,
            sty:'',
            showulicon:false,
            itemFontColor:''
        }
    },
    created(){
        this.itemFontColor = this.nav.fontColor
    },
    mounted(){
        // 获取初始高度，此时获取到的是子组件均展开的高度（即使子组件可能默认不展开）
        this.height= this.$refs.dropnavChildrenBox.offsetHeight
        // 遍历子组件，如有默认不展开的下拉框，就减去其收起的高度
        for (let index = 0; index < this.$children.length; index++) {
            if(this.$children[index].showchildren==false){
                this.height-=this.$children[index].height
            }
        }
        // 根据是否默认展开进行调整
        if(!this.showchildren){
            this.sty = '0px'
            this.firstClose = false
            this.showulicon = true
        }
    },
    methods:{
        showul(){
            let element = this.$refs.dropnavChildrenBox
            let ele = document.querySelector('.dropul')
            if(this.firstClose){
                // 关闭并保存高度，开启时使用
                this.height= element.offsetHeight
                this.showulicon = true
                this.animate(element,0)
                
            }else{
                // 开启
                this.showulicon = false
                this.animate(element,this.height,()=>{
                    element.style.height = 'auto'
                })
            }
            this.firstClose = !this.firstClose
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
    font-size: 14px;
    color: #303133;
    padding: 0 20px 0 0;
    cursor: pointer;
    transition: background-color .3s;
}
.headdropbox{
    padding: 0 20px;
}
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
</style>
<template>
    <ul class="dropnav-box">
        <div class="title" 
             :style="{'padding-left':this.paddingleft+'px'}"
             @click="showul"
             @mouseenter='enter' @mouseleave="leave" >
            <slot name="droptitle"></slot>
            <i class="dropnav-icon" :class="[{'iconrotate':showulicon}]"></i>
        </div>
        <div class="dropul" ref="dropnavBoxUl"
                :class="[{'hei':test}]"
                :style="{'height':sty}">
            <slot></slot>
        </div>
    </ul>
</template>
<script>
export default {
    name:'ni-sidenav-drop',
    inject: ['sidenav'],
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
            isauto:false,
            sty:'',
            showulicon:false,
        }
    },
    watch:{
        
    },
    mounted(){
        this.height= this.$refs.dropnavBoxUl.offsetHeight
        // console.log(this.$children)
        if(!this.showchildren){
            this.sty = '0px'
            this.firstClose = false
            this.showulicon = true
        }
    },
    methods:{
        showul(){
            let element = this.$refs.dropnavBoxUl
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
            }, 13);
        },
        enter(){

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
    position: relative;
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
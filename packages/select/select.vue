<template>
    <div class="select-box">
        <span class="select-input" @click="showoptions" @mouseenter='enter' @mouseleave="leave">
            {{choosedlabel||'请选择'}}
            <i v-show="clearable&&value&&showclearicon" @click.stop="clear" class="input-clear"></i>
            <i v-show="!(clearable&&value&&showclearicon)||!clearable" class="input-icon" :class="[{'iconrotate':showul}]"></i>
        </span>
        
        <transition name="select-ul">
            <ul class="select-ul" v-show="showul">
                <slot></slot>
            </ul>
        </transition>
    </div>
</template>
<script>
export default {
    name:'ni-select',
    props:{
        // 外部传入的值
        value:{},
        clearable:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{
            choosedlabel:'',
            showul:false,
            showclearicon:false,
            options:[],
        }
    },
    provide: function () {
        return {
            'select': this
        }
    },
    watch:{
        value(newval,oldval){
            if(newval=='') return this.choosedlabel = ''
            for (let index = 0; index < this.options.length; index++) {
                if(this.value===this.options[index].value) {
                    this.choosedlabel = this.options[index].label
                    break
                }
            }
        }
    },
    mounted(){
        // 有默认值，进行配置
        if(this.value){
            for (let index = 0; index < this.options.length; index++) {
                if(this.value===this.options[index].value) {
                    this.choosedlabel = this.options[index].label
                    break
                }
            }
        }
        // 点击组件外，收起列表
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) this.showul = false
        })
    },
    methods:{
        showoptions(){
            this.showul = !this.showul
        },
        // 清除选择
        clear(){
            this.$emit('input', '')
        },
        enter(){
            if(this.clearable)
                this.showclearicon = true
        },
        leave(){
            if(this.clearable)
                this.showclearicon = false
        }
    }
}
</script>
<style lang="less" scoped>
.select-box{
    width: 240px;
    display: inline-block;
}
.select-input{
    position: relative;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 35px 0 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    cursor: pointer;
    &:hover {
        border-color: #c0c4cc;
    }
    &:active {
        border-color: #409eff;
    }
}
.input-clear{
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    transition:  transform .4s cubic-bezier(.23,1,.32,1);
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #dcdfe6;
    &::before{
        content:"";
        display: block;
        position: absolute;
        top: 50%;
        left: 0;
        height: 1px;
        width: 8px;
        margin-left: 3px;
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
        margin-right: 3px;
        background-color: #c0c4cc;
        transform: rotate(-45deg);
    }
    &:hover{
        border-color: #c0c4cc;
    }
}
.input-icon{
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    transition:  transform .4s cubic-bezier(.23,1,.32,1);
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
.select-ul{
    position: absolute;
    width: 240px;
    z-index: 3;
    margin: 0;
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    display: block;
    margin-top: 10px;
    &::after{
        content: '';
        position: absolute;
        left: 30px;
        top: -6px;
        width: 11px;
        height: 11px;
        transform: rotate(-45deg);
        background-color: white;
        box-sizing: border-box;
        border-top: 1px solid #dcdfe6;
        border-right: 1px solid #dcdfe6;
    }
}

.select-ul-enter-active,.select-ul-leave-active{
    opacity:1;
    transform:scaleY(1);
    transition:transform .3s cubic-bezier(.23,1,.32,1),
                opacity .3s cubic-bezier(.23,1,.32,1);
    transform-origin: top
}
.select-ul-enter,.select-ul-leave-active{
    opacity:0;
    transform:scaleY(0)
}

</style>
<template>
    <div>
        <div class="component-content">
            <slot></slot>
        </div>
        <div class="component-code" ref="componentCode">
            <pre><code>{{code}}</code></pre>
        </div>
        <div class="switch" @click="showmeSwitch">
            <span class="showme">
                <i :class="{'point-top':pointflag}"></i>
                <span class="showme-text">{{text}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            height:0,
            flag:false,
            pointflag:false,
            text:'查看代码'
        }
    },
    props:{
        code:{type:String}
    },
    mounted(){
        this.height= this.$refs.componentCode.offsetHeight
        this.$refs.componentCode.style.height = '0px'
    },
    methods:{
        animate(obj, target, callback){
            clearInterval(obj.timer);
            obj.timer = setInterval(()=> {
                let step = (target - obj.offsetHeight) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                if (obj.offsetHeight == target) {
                    clearInterval(obj.timer);
                    callback && callback()
                }
                obj.style.height = obj.offsetHeight + step + 'px'
            }, 11);
        },
        showmeSwitch(){
            let element = this.$refs.componentCode
            if(this.flag){
                this.pointflag = false
                this.text = '查看代码'
                this.animate(element,0,()=>{
                    this.flag = false
                })
            }else{
                this.pointflag = true
                this.text = '收起代码'
                this.animate(element,this.height,()=>{
                    this.flag = true
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.component-content{
    border: 1px solid #ebebeb;
    border-bottom: 0;
    padding: 24px;
}
.component-code{
    overflow: hidden;
}
.switch{
    text-align: center;
    border: 1px solid #ebebeb;
    line-height: 44px;
    color: #d3dce6;

    .showme{
        transition: all .3s;
        display: inline-block;
        transform: translateX(40px);
        cursor: pointer;

        .showme-text{
            transition: all .3s;
            color: white;
            -moz-user-select:none; /*火狐*/
            -webkit-user-select:none; /*webkit浏览器*/
            -ms-user-select:none; /*IE10*/
            -khtml-user-select:none; /*早期浏览器*/
            user-select:none;
        }
    }

    i{
        transform-origin:50% 3px;
        transition: all .3s;
        display: inline-block;
        width: 0;
        height: 0;
        border: 6px solid;
        margin-right: 15px;
        border-color:  #d3dce6 transparent transparent transparent;
        transform: translateY(4px);
    }
    .point-top{
        transform: translateY(4px) rotate(180deg);
    }
}
.switch:hover{
    color: #409eff;
    .showme{
        transform: translateX(0);
        .showme-text{
            color: #409eff;
        }
    }
    i{
        border-color:  #409eff transparent transparent transparent;
    }
}
</style>
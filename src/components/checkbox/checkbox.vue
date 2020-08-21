<template>
    <label v-if="!chooseAll" class="ni-checkbox-box">
        <span class="ni-checkbox-icon"
              :class="{'is-checked':$parent.radiovalue.indexOf(label)!==-1,
                       'is-icon-disabled':
                            ($parent.maxlimit&&$parent.radiovalue.indexOf(label)===-1)||
                            disabled,
                        'is-icon-checked-disabled':($parent.minlimit&&$parent.radiovalue.indexOf(label)!==-1)}">
        </span>
        <input class="ni-checkbox"
               type="checkbox" 
               :disabled="($parent.maxlimit&&$parent.radiovalue.indexOf(label)===-1)||
                          ($parent.minlimit&&$parent.radiovalue.indexOf(label)!==-1)||
                          disabled"
               :value="label"
               v-model="$parent.radiovalue">
        <span class="ni-checkbox-label"
              :class="{'is-label-disabled':
                        ($parent.maxlimit&&$parent.radiovalue.indexOf(label)===-1)||
                        ($parent.minlimit&&$parent.radiovalue.indexOf(label)!==-1)||
                        disabled}">{{label}}</span>
    </label>
    <label v-else class="ni-checkbox-box" @click="chooseAllRadio">
        <span class="ni-checkbox-icon"
              :class="{'is-checked':$parent.isChoosedAll}"></span>
        <span class="ni-checkbox-label"><slot></slot></span>
    </label>
</template>
<script>
export default {
    name:'ni-checkbox',
    props:{
        label:{},
        chooseAll:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            isChoosedAll:false
        }
    },
    created(){
        this.$parent.items.push(this)
    },
    mounted(){
        // console.log(this.$parent)
    },
    methods:{
        chooseAllRadio(){
            if(this.$parent.isChoosedAll){
                this.$parent.radiovalue = []
            }else{
                this.$parent.radiovalue = this.$parent.allItemsArr
            }
            this.$parent.isChoosedAll = !this.$parent.isChoosedAll
        },
    }
}
</script>
<style lang="less" scoped>
.ni-checkbox-box{
    position: relative;
    user-select: none;
    margin-right: 20px;
    cursor: pointer;
}
.ni-checkbox{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 0;
    height: 0;
    z-index: -1;
}
.ni-checkbox-icon{
    position: relative;
    display: inline-block;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    background-color: #fff;
    z-index: 1;
    vertical-align: middle;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),
                background-color .25s cubic-bezier(.71,-.46,.29,1.46);
    &::before{
        box-sizing: border-box;
        content:'';
        display: block;
        width: 9px;
        height: 5px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-45deg);
        border-left: 1px solid transparent;
        border-bottom: 1px solid transparent;
    }
}
.is-checked{
    background-color: #409eff;
    border-color: #409eff;
    &::before{
        border-color: white;
    }
}
.ni-checkbox-label{
    vertical-align: middle;
    margin-left: 10px;
}
.is-icon-disabled{
    background-color: #f2f6fc;
    border-color: #dcdfe6;
}
.is-icon-checked-disabled{
    background-color: #f2f6fc;
    border-color: #dcdfe6;
    &::before{
        border-color: #c0c4cc;
    }
}
.is-label-disabled{
    color: #c0c4cc;
    cursor: not-allowed
}
</style>
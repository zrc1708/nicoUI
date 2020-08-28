<template>
    <transition name="fade">
        <div class="ni-drawer-box" v-show="visible">
            <div class="mask"  @click="maskclick" v-show="visible"></div>
            <transition :name="position">
                <div class="ni-drawer-content" v-show="visible">
                    <slot></slot>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
export default {
    name:'ni-drawer',
    props:{
        position: {
            type: String,
            default: 'right',
            validator(value) {
                return ['left','right', 'top', 'bottom'].indexOf(value) !== -1
            }
        },
        visible:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{
        maskclick(){
            this.$emit('maskclick')
        }
    }
}
</script>
<style lang="less" scoped>
.ni-drawer-box{
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
}
.mask{
    background-color: rgba(0, 0, 0, .4);
    height: 100%;
    width: 100%;
}
.ni-drawer-content{
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
    height: 100%;
    background-color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.right-enter-active, .right-leave-active {
  transition: all .3s;
}
.right-enter, .right-leave-to{
    right: -100%;
}
</style>
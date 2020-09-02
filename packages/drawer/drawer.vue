<template>
    <transition name="fade">
        <div class="ni-drawer-box" v-show="visible">
            <div class="mask"  @click="maskclick" v-show="visible"></div>
            <transition :name="position">
                <div class="ni-drawer-content"
                    :class="[niposition]"
                     v-show="visible">
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
    computed:{
        niposition(){
            return 'ni-drawer-content-position-'+this.position
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
    background-color: white;
}
.ni-drawer-content-position-right{
    right: 0;
    top: 0;
    width: 30%;
    height: 100%;
}
.ni-drawer-content-position-bottom{
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
}
.ni-drawer-content-position-left{
    left: 0;
    top: 0;
    width: 30%;
    height: 100%;
}
.ni-drawer-content-position-top{
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
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
.bottom-enter-active, .bottom-leave-active {
  transition: all .3s;
}
.bottom-enter, .bottom-leave-to{
    bottom: -100%;
}
.left-enter-active, .left-leave-active {
  transition: all .3s;
}
.left-enter, .left-leave-to{
    left: -100%;
}
.top-enter-active, .top-leave-active {
  transition: all .3s;
}
.top-enter, .top-leave-to{
    top: -100%;
}
</style>
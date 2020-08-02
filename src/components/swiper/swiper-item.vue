<template>
    <div class="swiper-item">
        <slot></slot>
    </div>
</template>
    
<script>
    export default {
        name:'ni-swiper-item',
        data () {
            return {
            
            };
        },
        mounted(){
            // console.log(this.$parent.width)
        }
    };
</script>
<style lang="less" scoped>
.swiper-item{
    float: left;
    height: 100%;
}
</style>
    
<template>
    <div class="swiper-item" ref="swiper-item">
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
    };
</script>
<style lang="less" scoped>
.swiper-item{
    float: left;
    // width: 20%;
    height: 100%;
    overflow: hidden;
}
</style>
    
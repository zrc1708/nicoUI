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
        methods:{

        }
    };
</script>
<style lang="less" scoped>
.swiper-item{
    float: left;
    height: 100%;
    overflow: hidden;
}
</style>
    
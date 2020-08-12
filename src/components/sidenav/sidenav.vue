<template>
    <ul class="sidenav-box">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name:'ni-sidenav',
    props:{
        router:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            items:[],
            activeItemIndex:''
        }
    },
    provide: function () {
        return {
            'sidenav': this
        }
    },
    watch:{
        // '$store.state.getarticle':async function(newFlag, oldFlag){
        //     this.getArticleList(this.pageSize,this.curPage)
        //     this.pageflag = true
        // }
        // activeItemIndex(newval,oldval){
        //     console.log(newval)
        // }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
.sidenav-box{
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
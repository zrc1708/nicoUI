<template>
  <div class="home">
    home
    <button @click="button1">点击触发message</button>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            
        }
    },
    methods:{
        button1(){
          this.$message({
            type:'error',
            text:'这是自定义的message组件',
            time:1600
          })
        }
    }
}
</script>

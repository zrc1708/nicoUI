<template>
  <div class="home">
    home <br>
    <button @click="button1">点击触发message</button>
    <button @click="button2">点击触发messagebox</button> <br>
    <ni-button type='default'>主要按钮</ni-button>
    <ni-button type='primary' @click="button3">主要按钮</ni-button>
    <ni-button type='success'>主要按钮</ni-button>
    <ni-button type='info'>主要按钮</ni-button>
    <ni-button type='warn'>主要按钮</ni-button>
    <ni-button type='error'>主要按钮</ni-button>
    <div>禁用</div>
    <ni-button type='default' disabled>主要按钮</ni-button>
    <ni-button type='primary' disabled  @click="button3">主要按钮</ni-button>
    <ni-button type='success' disabled>主要按钮</ni-button>
    <ni-button type='info' disabled>主要按钮</ni-button>
    <ni-button type='warn' disabled>主要按钮</ni-button>
    <ni-button type='error' disabled>主要按钮</ni-button>
    <ni-input></ni-input>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            flag:true
        }
    },
    mounted(){
      
    },
    methods:{
        button1(){
          this.$message({
            type:'success',
            text:'自定义的message组件',
            time:1200
          })
        },
        button2(){
          this.$msgBox({
              title: '自定义消息提示',
              content: '消息提示文本部分',
              isShowInput: true
          }).then(async (val) => {
              console.log(val)
          }).catch(() => {
              console.log('fail')
          });    
        },
        button3(){
          console.log(123)
        }
    }
}
</script>

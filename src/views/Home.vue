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

    <ni-input placeholder="快输入" @input="input" @change="change" clearable v-model="user"></ni-input>

  </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            test:1234,
            user:'',
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
          console.log(this.user)
        },
        input(value){
            console.log(value)
        },
        change(value){
            console.log(value)
        },
    }
}
</script>

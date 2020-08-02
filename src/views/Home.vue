<template>
  <div class="home">
    home <br>
    <button @click="button1">点击触发message</button>
    <button @click="button2">点击触发有输入messagebox</button>
    <button @click="button22">点击触发messagebox</button> <br>

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
    <div>尺寸</div>
    <ni-button type='default'>默认尺寸</ni-button>
    <ni-button type='default' size='medium'>中等尺寸</ni-button>
    <ni-button type='default' size='small'>小型尺寸</ni-button>
    <ni-button type='default' size='mini'>超小尺寸</ni-button>

    <ni-input placeholder="快输入" @input="input" @change="change" clearable v-model="user"></ni-input>

    <div class="swiper-box">
        <ni-swiper>
            <ni-swiper-item>
              <div class="img">第一</div>
            </ni-swiper-item>
            <ni-swiper-item>
              <div class="img">第二</div>
            </ni-swiper-item>
            <ni-swiper-item>
              <div class="img">第三</div>
            </ni-swiper-item>
        </ni-swiper>
    </div>
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
              title: '消息提示',
              content: '请输入你的邮箱',
              inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
              inputErrorMessage:'输入有误',
              isShowInput: true
          }).then(async (val) => {
              console.log(val)
          }).catch(() => {
              console.log('fail')
          });    
        },
        button22(){
          this.$msgBox({
              title: '确定删除',
              content: '你确定要删除吗？删除后无法恢复',
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
<style lang="less" scoped>
.swiper-box{
  width: 500px;
  height: 300px;
}
.img{
  box-sizing: border-box;
  width: 500px;
  height: 100%;
  border: 1px solid red;
}
</style>
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
        <ni-swiper @change="swiperChange" 
          @swiperClick="swiperClick"
          autoplay
          marktype="center"
          markColor="white"
          :autoplayTime= 2000
          :alwaysShowButton= false
          :playTime= 300>
            <ni-swiper-item>
              <div class="img img1">第一</div>
            </ni-swiper-item>
            <ni-swiper-item>
              <div class="img img2">第二</div>
            </ni-swiper-item>
            <ni-swiper-item>
              <div class="img img3">第三</div>
            </ni-swiper-item>
            <ni-swiper-item>
              <div class="img img1">第四</div>
            </ni-swiper-item>
            <ni-swiper-item>
              <div class="img img2">第五</div>
            </ni-swiper-item>
        </ni-swiper>
    </div>

    <ni-switch v-model="switchval" 
        @click="switchClick"
        activeColor='rgb(19, 206, 102)'
        inactiveText='关闭自动续费'
        activeText='开启自动续费'></ni-switch>
    {{switchval}}
    <hr>

    <ni-badage :num= 12>
      <ni-button>消息提示</ni-button>
    </ni-badage>
    <ni-badage :num= 99 color="blue">
      <ni-button>消息提示</ni-button>
    </ni-badage>
    <ni-badage num='hot'>
      <ni-input></ni-input>
    </ni-badage>
    <hr>

    <ni-button @click="showdialog">触发dialog</ni-button>
    <ni-dialog :visible.sync= "visible" 
              title="注册" 
              @close="closedialog"
              :havemask= true>
        <ni-input class="dialoginput"></ni-input>
        <ni-input class="dialoginput"></ni-input>
        <ni-input class="dialoginput"></ni-input>
        <span slot="footer">
            <ni-button>取消</ni-button>
            <ni-button>确定</ni-button>
        </span>
    </ni-dialog>
    <hr>

    <ni-prompt theme='black' position='topleft'>
      <ni-button>上左</ni-button>
    </ni-prompt>
    <ni-prompt theme='light' position='top'>
      <ni-button>上边</ni-button>
    </ni-prompt>
    <ni-prompt theme='black' position='topright'>
      <ni-button>上右</ni-button>
    </ni-prompt>
    <ni-prompt theme='black' position='bottomleft'>
      <ni-button>下左</ni-button>
    </ni-prompt>
    <ni-prompt theme='light' position='bottom'>
      <ni-button>下边</ni-button>
    </ni-prompt>
    <ni-prompt theme='black' position='bottomright'>
      <ni-button>下右</ni-button>
    </ni-prompt>
    <ni-prompt theme='black' position='righttop'>
      <ni-button>右上</ni-button>
    </ni-prompt>
    <ni-prompt theme='light' position='right' enterable>
      <ni-button>右边</ni-button>
    </ni-prompt>
    <ni-prompt theme='black' position='rightbottom'>
      <ni-button>右下</ni-button>
    </ni-prompt>
    <ni-prompt theme='light' position='lefttop'>
      <ni-button>左上</ni-button>
    </ni-prompt>
    <ni-prompt theme='light' position='left'>
      <ni-button>左边</ni-button>
    </ni-prompt>
    <ni-prompt theme='black' position='leftbottom' :hidetime= 500>
      <ni-button @click="test1">左下</ni-button>
    </ni-prompt>
    <hr>

    <ni-link @click="test1" underline>默认链接</ni-link>
    <ni-link type='primary' @click="test1" underline>主要链接</ni-link>
    <ni-link type='success' @click="test1" underline>成功链接</ni-link>
    <ni-link type='info' @click="test1" underline>信息链接</ni-link>
    <ni-link type='warn' @click="test1" underline>警告链接</ni-link>
    <ni-link type='danger' @click="test1" underline>危险链接</ni-link>
    <br>
    <ni-link @click="test1" underline disabled>默认链接</ni-link>
    <ni-link type='primary' underline @click="test1" disabled>主要链接</ni-link>
    <ni-link type='success' underline @click="test1" disabled>成功链接</ni-link>
    <ni-link type='info' underline @click="test1" disabled>信息链接</ni-link>
    <ni-link type='warn' underline @click="test1" disabled>警告链接</ni-link>
    <ni-link type='danger' underline @click="test1" disabled>危险链接</ni-link>
    <hr>

    <ni-upload :chooseSuccess="chooseSuccess" 
               :chooseFail="chooseFail"
               :handupload="handupload"
               type="image"
               drag
               handbuttontext="手动上传"
               buttontext='选择你的文件'
               ref="uploadbox"
               kindlimit='image/*'
               :sizelimit= 1024*1024*20
               :numlimit= 16>
      <span slot='tip'>只能上传图片文件,最多10张，不超过1mb</span>
    </ni-upload>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            test:1234,
            user:'',
            switchval:false,
            visible:false,
        }
    },
    mounted(){
      
    },
    methods:{
        test1(){
          console.log(123)
        },
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
        swiperChange(val){
            // console.log(`目前在第 ${val} 张`)
        },
        swiperClick(index){
          console.log(index)
        },
        switchClick(){
          this.$message({text:'switch改变了',type:'success',time:1200})
        },
        showdialog(){
          this.visible = true
        },
        closedialog(){
          this.visible = false
        },
        chooseSuccess(filesarr){
          console.log('选择文件成功')
          console.log(filesarr)
        },
        chooseFail(obj){
          console.log(obj)
        },
        handupload(arr){
          console.log('手动上传功能')
          console.log(arr)
          this.$refs.uploadbox.clear()
        }
    }
}
</script>
<style lang="less" scoped>
.home{
  height: 2000px;
}
.swiper-box{
  width: 600px;
  height: 300px;
}
.img{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img1{
  background-color: #99a9bf;
}
.img2{
  background-color: #d3dce6;
}
.img3{
  background-color: #d3e6de;
}
.dialoginput{
  width: 100%!important;
  margin-bottom: 10px;
}
</style>
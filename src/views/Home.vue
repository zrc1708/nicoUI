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
    <hr>

    <ni-input style="width:300px" placeholder="快输入" @input="input" @change="change" clearable v-model="user"></ni-input>
    <ni-input style="width:600px" placeholder="快输入" @input="input" @change="change" clearable v-model="user">
      <span slot="before">用户名：</span>
    </ni-input>
    <ni-input style="width:600px" placeholder="快输入" @input="input" @change="change" clearable v-model="user">
      <span slot="before">www.</span>
      <span slot="after">.com</span>
    </ni-input>
    <hr>

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
    <hr>

    <ni-tag @click="clicktag">标签一</ni-tag>
    <ni-tag type="primary">标签二</ni-tag>
    <ni-tag type="success">标签三</ni-tag>
    <ni-tag type="info">标签四</ni-tag>
    <ni-tag type="warn">标签五</ni-tag>
    <ni-tag type="danger">标签六</ni-tag>
    <br>
    <ni-tag closeable type="primary">标签二</ni-tag>
    <ni-tag closeable type="primary" size="medium">标签二</ni-tag>
    <ni-tag closeable type="primary" size="small">标签二</ni-tag>
    <ni-tag closeable type="primary" size="mini">标签二</ni-tag>
    <ni-tag type="primary" size="mini">标签二</ni-tag>
    <br>
    <ni-tag closeable :key="tag" v-for="tag in dynamicTags" @close="closetag" type="primary">{{tag}}</ni-tag>
    <hr>

    <span style="display:block">选择的是：{{selectvalue}}</span>
    <ni-select v-model="selectvalue">
        <ni-option v-for="item in selectoptions" :key="item.value" :label="item.label" :value="item.value"></ni-option>
    </ni-select>
    <br>
    <ni-select v-model="selectvalue2" clearable>
        <ni-option v-for="item in selectoptions" :key="item.value" :label="item.label" :value="item.value"></ni-option>
    </ni-select>
    <hr>

    <ni-breadcrumb delimiter=">">
        <ni-breadcrumb-item :to="{path:'/test1'}">路由1</ni-breadcrumb-item>
        <ni-breadcrumb-item :to="{path:'/test2'}">路由2</ni-breadcrumb-item>
        <ni-breadcrumb-item @click="test1">测试</ni-breadcrumb-item>
    </ni-breadcrumb>
    <div class="routertest">
        <router-view></router-view>
    </div>
    <hr>

    <div class="nav" style="width:200px;border:1px solid black;background-color:rgb(238, 238, 238)">
        <ni-sidenav router :activeItemIndex='activeindex'>

            <ni-sidenav-drop showchildren>
                <div slot="droptitle">
                    <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                       :style="{'color':'#909399'}"></i>个人中心
                </div>
                <ni-sidenav-item index="test5">
                    <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                       :style="{'color':(this.$router.history.current.path=='/test12')?'#409eff':'#909399'}"></i>导航五
                </ni-sidenav-item>

                    <ni-sidenav-drop>
                        <span slot="droptitle">
                            <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                               :style="{'color':'#909399'}"></i>无限套娃
                        </span>
                        <ni-sidenav-item index="test14">
                            <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                               :style="{'color':(this.$router.history.current.path=='/test14')?'inherit':'#909399'}"></i>导航十四
                        </ni-sidenav-item>
                    </ni-sidenav-drop>

                <ni-sidenav-item index="test6">
                    <i class="fa fa-folder nav-icon" aria-hidden="true" style="font-size:18px"
                       :style="{'color':(this.$router.history.current.path=='/test6')?'#409eff':'#909399'}"></i>导航六
                </ni-sidenav-item>
                <ni-sidenav-item index="test7">
                    <i class="fa fa-envelope nav-icon" aria-hidden="true" style="font-size:18px"
                       :style="{'color':(this.$router.history.current.path=='/test7')?'#409eff':'#909399'}"></i>导航七
                </ni-sidenav-item>

                <ni-sidenav-drop>
                    <span slot="droptitle">
                        <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                           :style="{'color':'#909399'}"></i>个人中心2
                    </span>
                    <ni-sidenav-item index="test8">
                        <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                           :style="{'color':(this.$router.history.current.path=='/test8')?'#409eff':'#909399'}"></i>导航八
                    </ni-sidenav-item>
                    <ni-sidenav-item index="test10">
                        <i class="fa fa-envelope nav-icon" aria-hidden="true" style="font-size:18px"
                           :style="{'color':(this.$router.history.current.path=='/test10')?'#409eff':'#909399'}"></i>导航十
                    </ni-sidenav-item>

                    <ni-sidenav-drop showchildren>
                        <span slot="droptitle">
                            <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                               :style="{'color':'#909399'}"></i>个人中心3
                        </span>
                        <ni-sidenav-item index="test12">
                            <i class="fa fa-folder nav-icon" aria-hidden="true" style="font-size:18px"
                               :style="{'color':(this.$router.history.current.path=='/test12')?'#409eff':'#909399'}"></i>导航十二
                        </ni-sidenav-item>
                        <ni-sidenav-item index="test13">
                            <i class="fa fa-envelope nav-icon" aria-hidden="true" style="font-size:18px"
                               :style="{'color':(this.$router.history.current.path=='/test13')?'#409eff':'#909399'}"></i>导航十三
                        </ni-sidenav-item>
                    </ni-sidenav-drop>
                </ni-sidenav-drop>

            </ni-sidenav-drop>

            <ni-sidenav-item index="test1">
              <i class="fa fa-address-book nav-icon" aria-hidden="true" style="font-size:18px"
                 :style="{'color':(this.$router.history.current.path=='/test1')?'#409eff':'#909399'}"></i>导航一
            </ni-sidenav-item>
            <ni-sidenav-item index="test2">
              <i class="fa fa-folder nav-icon" aria-hidden="true" style="font-size:18px"
                 :style="{'color':(this.$router.history.current.path=='/test2')?'#409eff':'#909399'}"></i>导航二
            </ni-sidenav-item>
            <ni-sidenav-item index="test3">
              <i class="fa fa-envelope nav-icon" aria-hidden="true" style="font-size:18px"
                 :style="{'color':(this.$router.history.current.path=='/test3')?'#409eff':'#909399'}"></i>导航三
            </ni-sidenav-item>
            <ni-sidenav-item index="test4">
              <i class="fa fa-calendar nav-icon" aria-hidden="true" style="font-size:18px"
                 :style="{'color':(this.$router.history.current.path=='/test4')?'#409eff':'#909399'}"></i>导航四
            </ni-sidenav-item>
        </ni-sidenav>
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
            switchval:false,
            visible:false,
            selectvalue:'选项2',
            selectvalue2:'',
            selectoptions:[{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭'
              }],
            dynamicTags: ['标签一', '标签二', '标签三', '标签四'],
            activeindex:'',
        }
    },
    mounted(){
        this.activeindex = this.$router.history.current.path.replace(/^\//,'')
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
        },
        closetag(tag){
          this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        clicktag(tag){
          console.log(tag)
        }
    }
}
</script>
<style lang="less" scoped>
.home{
  height: 3000px;
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
.routertest{
  width: 600px;
  height: 200px;
  border: 1px solid black;
}
.nav-icon{
    vertical-align: middle;
    margin-right: 5px;
    padding-bottom: 1px;
}
</style>
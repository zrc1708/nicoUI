<template>
<transition name="fade">
    <div class="message-box" v-show="isShowMessageBox">
        <div class="mask" @click="cancel"></div>

        <transition name="message-box-body-animate">
            <div class="message-box-body" v-show="isShowMessageBox">
                <!-- 消息盒子标题 -->
                <div class="message--box-header">
                    <div class="title">{{ title }}</div>
                    <i @click="cancel"></i>
                </div>
                <!-- 消息盒子主体 -->
                <div class="message-box-content">
                    <div class="content" :class="[contentCenter?'contentcenter':'']">{{ content }}</div>
                    <div class="content-input" v-if="isShowInput">
                        <ni-input v-model="inputValue" @input="input" placeholder="" :error='showValueError'></ni-input>
                        <div class="value-error">
                            <span v-show="showValueError">{{inputErrorMessage}}</span>
                        </div>
                    </div>
                </div>
                <!-- 消息盒子按钮 -->
                <div class="message-box-btns">
                    <!-- 取消按钮 -->
                    <ni-button type="default" 
                    @click="cancel" 
                    size='medium'
                    v-show="isShowCancelBtn">{{ cancelBtnText }}</ni-button>
                    <!-- 确认按钮 -->
                    <ni-button class="btn-confirm"
                    @click="confirm"
                    size='medium'
                    v-show="isShowConfimrBtn">{{ confirmBtnText }}</ni-button>
                </div>
            </div>
        </transition>
    </div>
</transition>
</template>
    
<script>
    export default {
      props: {
        // 标题
        title: {
          type: String,
          default: '标题'
        },
        // 内容
        content: {
          type: String,
          default: '这是弹框内容'
        },
        // 内容是否居中
        contentCenter: {
          type: Boolean,
          default: false
        },
        // 是否展示输入框
        isShowInput: {
          type: Boolean,
          default: false
        },
        // 输入框的默认值
        inputValue:{
          type: String||Number,
          default: ''
        },
        // 输入校验规则（正则）
        inputPattern:{
          type:String,
          default:''
        },
        // 输入错误时的消息提示
        inputErrorMessage:{
          type:String,
          default:''
        },
        // 是否显示取消按钮
        isShowCancelBtn: {
          type: Boolean,
          default: true
        },
        // 是否显示确定按钮
        isShowConfimrBtn: {
          type: Boolean,
          default: true
        },
        // 取消按钮文字
        cancelBtnText: {
          type: String,
          default: '取消'
        },
        // 确定按钮文字
        confirmBtnText: {
          type: String,
          default: '确定'
        }
      },
      data () {
        return {
          isShowMessageBox: false,
          showValueError:false,
          resolve: '',
          reject: '',
          promise: '' // 保存promise对象
        };
      },
      computed:{
        
      },
      methods: {
        // 确定,将promise断定为resolve状态
        confirm: function () {
          if(this.showValueError) return 0
          this.isShowMessageBox = false;
          if (this.isShowInput) {
            this.resolve(this.inputValue);
          } else {
            this.resolve('confirm');
          }
          this.remove();
        },
        // 取消,将promise断定为reject状态
        cancel: function () {
          this.isShowMessageBox = false;
          this.reject('cancel');
          this.remove();
        },
        // 弹出messageBox,并创建promise对象
        showMsgBox: function () {
          this.isShowMessageBox = true;
          this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
          });
          // 返回promise对象
          return this.promise;
        },
        remove: function () {
          setTimeout(() => {
            this.destroy();
          }, 300);
        },
        destroy: function () {
          this.$destroy();
          document.body.removeChild(this.$el);
        },
        // 输入校验
        input(){
          if(!this.inputPattern) return
          let res = this.inputPattern.test(this.inputValue)
          if(!res) this.showValueError = true
          else this.showValueError = false
        }
      }
    };
</script>
<style lang="less" scoped>
.message-box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
.mask{
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.message-box-body{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: white;
  width: 420px;
  border-radius: 4px;

  .message--box-header{
    position: relative;
    padding: 15px 15px 10px;
    font-size: 18px;
    font-weight: 400;

    i{
      position: absolute;
      top: 18px;
      right: 15px;
      display: block;
      width: 18px;
      height: 18px;
      cursor: pointer;

      &:hover::before,&:hover::after{
        background-color: blue;
      }

      &::before{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #909399;
        transform: rotate(45deg);
        position: absolute;
        top: 50%;
      }
      &::after{
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background-color: #909399;
        transform: rotate(-45deg);
        position: absolute;
        top: 50%;
      }
    }
  }

  .message-box-content{
    padding: 10px 15px;
    color: #606266;
    font-size: 14px;

    .contentcenter{
      text-align: center;
    }
    .content-input{
      padding-top: 15px;
      div{
        width: 100%;
      }
      .value-error{
        height: 20px;
        color: #f56c6c;
      }
    }
  }

  .message-box-btns{
    padding: 5px 15px 10px;
    text-align: right;
    .btn-confirm{
      margin-left: 10px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.message-box-body-animate-enter,.message-box-body-animate-leave-to{
  top: 45%;
  opacity: 0;
}
.message-box-body-animate-enter-active,.message-box-body-animate-leave-active{
  transition: all .4s;
}
</style>
    
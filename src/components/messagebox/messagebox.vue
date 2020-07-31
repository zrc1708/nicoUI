<template>
    <div class="message-box" v-show="isShowMessageBox">
        <div class="mask" @click="cancel"></div>

        <div class="message-box-body">
            <!-- 消息盒子标题 -->
            <div class="message--box-header">
                <div class="title">{{ title }}</div>
                <i></i>
            </div>
            <!-- 消息盒子主体 -->
            <div class="message-box-content">
                <div class="content">{{ content }}</div>
                <!-- <input type="text" v-model="inputValue" v-if="isShowInput" ref="input"> -->
            </div>
            <!-- 消息盒子按钮 -->
            <div class="message-box-btns">
                <!-- 取消按钮 -->
                <button class="btn-default" 
                @click="cancel" 
                v-show="isShowCancelBtn">{{ cancelBtnText }}</button>
                <!-- 确认按钮 -->
                <button class="btn-primary btn-confirm" 
                @click="confirm" 
                v-show="isShowConfimrBtn">{{ confirmBtnText }}</button>
            </div>
        </div>
    </div>
</template>
    
<script>
    export default {
      props: {
        title: {
          type: String,
          default: '标题'
        },
        content: {
          type: String,
          default: '这是弹框内容'
        },
        isShowInput: false,
        inputValue: '',
        isShowCancelBtn: {
          type: Boolean,
          default: true
        },
        isShowConfimrBtn: {
          type: Boolean,
          default: true
        },
        cancelBtnText: {
          type: String,
          default: '取消'
        },
        confirmBtnText: {
          type: String,
          default: '确定'
        }
      },
      data () {
        return {
          isShowMessageBox: false,
          resolve: '',
          reject: '',
          promise: '' // 保存promise对象
        };
      },
      methods: {
        // 确定,将promise断定为resolve状态
        confirm: function () {
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
        }
      }
    };
</script>
<style lang="less" scoped>
.message-box{
  position: fixed;
  top: 0;
  left: 0;
  // background-color: pink;
  width: 100vw;
  height: 100vh;
}
.message-box-body{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background-color: pink;
  width: 300px;
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
  }

  .message-box-btns{
    padding: 5px 15px 10px;
    text-align: right;
  }
}
</style>
    
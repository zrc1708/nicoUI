<template>
    <div class="upload-box">
        <input type="file" ref="file" @change="checkField($event)" :accept="kindlimit" multiple="multiple" v-show="false"/> 
        <ni-button @click="upload">{{buttontext}}</ni-button>
        <ni-button v-if="handupload" type="primary" @click="handupload(filesArr)" class="handbutton">{{handbuttontext}}</ni-button>
        <div class="tip">
            <slot name="tip"></slot>
        </div>
        <ul class="upload-ul">
            <transition-group name="list">
                <li v-for="(item,index) in filesArr" :key="item.size">
                    <span>{{item.name}}</span>
                    <i class="icon" @click="deleteFile(index)"></i>
                </li>
            </transition-group>
        </ul>
    </div>
</template>
<script>
export default {
    name:'ni-upload',
    props:{
        // 上传组件的种类
        type:{
            type:String,
            default:'default',
            validator(value) {
                return ['default','image','imagelist'].indexOf(value) !== -1
            }
        },
        // 选择按钮的文字
        buttontext:{
            type:[Number,String],
            default:'选择文件'
        },
        // 是否开启拖拽上传
        drag:{
            type:Boolean,
            default:false
        },
        // 文件种类限制
        kindlimit:{
            type:String,
            default:'*'
        },
        // 文件数量限制
        numlimit:{
            type:Number,
        },
        // 文件大小限制
        sizelimit:{
            type:Number,
        },
        // 选择成功回调
        chooseSuccess:{
            type:Function,
            required:true
        },
        // 选择失败回调
        chooseFail:{
            type:Function,
            required:true
        },
        // 手动上传按钮的文字
        handbuttontext:{
            type:[Number,String],
            default:'上传'
        },
        // 手动上传方法
        handupload:{
            type:Function,
        }
        
    },
    data(){
        return{
            filesArr:[],     //文件对象数组
        }
    },
    methods:{
        upload(){
            this.$refs.file.click()
        },   
        //获取所选文件的信息并进行上传
        checkField(e){
            window.URL = window.URL || window.webkitURL;
            // 文件检查
            if(this.numlimit&&this.$refs.file.files.length+this.filesArr.length>this.numlimit){
                return this.Fail({errortype:'num',errordata:this.$refs.file.files.length+this.filesArr.length})
            }
            if(this.sizelimit){
                let size = 0
                this.filesArr.forEach(item=>{
                    size+=item.size
                })
                this.$refs.file.files.forEach(item => {
                    size+=item.size
                });
                if(size>this.sizelimit) return this.Fail({errortype:'size',errordata:size})
            }
            // 文件添加
            this.filesArr = [...this.filesArr,...this.$refs.file.files]
            this.success()
        },
        // 删除文件
        deleteFile(index){
            this.filesArr.splice(index,1)
        },
        // 清空文件
        clear(){
            this.filesArr = []
        },
        // 选择错误回调
        Fail(obj){
            this.chooseFail(obj)
        },
        // 选择成功回调
        success(){
            this.chooseSuccess(this.filesArr)
        }
    }
}
</script>
<style lang="less" scoped>
.upload-box{
    position: relative;
    width: 360px;
}
.tip{
    color: #606266;
    font-size: 12px;
    margin-top: 7px;
    margin-bottom: 5px;
}
.handbutton{
    margin-left: 20px;
}
.upload-ul{
    margin: 0;
    padding: 0;
    li{
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 4px;
        list-style: none;
        color: #606266;
        padding: 3px 3px 3px 6px;
        transition: all .4s cubic-bezier(.55,0,.1,1);
        font-size: 14px;
        display: flex;
        align-items: center;

        span{
            overflow: hidden;
            display: inline-block;
            flex: 1;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding-right: 5px;
        }

        &:hover{
            color: #409eff;
            background-color: #f5f7fa;
        }
        &:hover .icon{
            border: 0;
        }
        &:hover .icon::before{
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #c0c4cc;
            transform: rotate(45deg);
            position: absolute;
            top: calc(50% );
            left: 0px;
        }
        &:hover .icon::after{
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: #c0c4cc;
            transform: rotate(-45deg);
            position: absolute;
            top: 50%;
            left: 0px;
        }
        .icon:hover::before{
            background-color: #606266;
        }
        .icon:hover::after{
            background-color: #606266;
        }
        .icon{
            display: block;
            width: 14px;
            height: 14px;
            background-color: white;
            box-sizing: border-box;
            border: 1px solid #67c23a;
            border-radius: 50%;
            position: relative;


            &::before{
                content: '';
                display: block;
                position: absolute;
                top: calc(50% + 1px);
                left: 2px;
                transform:rotate(45deg);
                width: 35%;
                height: 1px;
                background-color: #67c23a;
            }
            &::after{
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: 4px;
                transform:rotate(-45deg);
                width: 60%;
                height: 1px;
                background-color: #67c23a;
            }
        }
    }
}
.list-enter-active {
  transition: all .4s;
}
.list-leave-active {
  transition: all .4s;
  position: absolute;
  i{
      opacity: 0;
  }
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}

</style>
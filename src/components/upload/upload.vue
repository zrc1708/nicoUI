<template>
    <div class="upload-box">
        <input type="file" ref="file" @change="checkField($event)" :accept="kindlimit" multiple="multiple" v-show="false"/> 
        <div class="dragbox" v-if="drag" ref="dragbox">
            <span>拖动文件至此或</span>
            <ni-link type="primary" class="choose" underline @click="upload">选择</ni-link>
        </div>
        <ni-button @click="upload" v-if="!drag" class="choosebutton">{{buttontext}}</ni-button>
        <ni-button v-if="handupload" :disabled="filesArr.length==0" type="primary" @click="handupload(filesArr)">{{handbuttontext}}</ni-button>
        <div class="tip">
            <slot name="tip"></slot>
        </div>
        <ul class="upload-ul" v-if="type=='default'">
            <transition-group name="list">
                <li v-for="(item,index) in filesArr" :key="item.size">
                    <span>{{item.name}}</span>
                    <i class="icon" @click="deleteFile(index)"></i>
                </li>
            </transition-group>
        </ul>
        <ul class="upload-ul-image" v-if="type=='image'">
            <transition-group name="list" >
                <li v-for="(item,index) in imagesArr" class="imgbox" :key="item">
                    <div class="animatebox">
                        <img :src="item" alt="">
                        <span class="deletespan" @click="deleteFile(index)">删除</span>
                    </div>
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
                return ['default','image'].indexOf(value) !== -1
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
            imagesArr:[],    //显示用的本地图片数组
        }
    },
    mounted(){
        if(this.drag){
            const dragbox = this.$refs.dragbox
            dragbox.addEventListener("dragenter", this.dragenter, false);
            dragbox.addEventListener("dragover", this.dragover, false);
            dragbox.addEventListener("drop", this.drop, false);   
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
            // 如果所选样式需要图片，添加图片地址
            if(this.type!=='default'){
                this.$refs.file.files.forEach(item => {
                    this.imagesArr.push(window.URL.createObjectURL(item))
                });
            }
            this.success()
        },
        // 删除文件
        deleteFile(index){
            this.filesArr.splice(index,1)
            if(this.type=='image'){
                this.imagesArr.splice(index,1)
            }
        },
        // 清空文件
        clear(){
            this.filesArr = []
            this.imagesArr = []
        },
        // 选择错误回调
        Fail(obj){
            this.chooseFail(obj)
        },
        // 选择成功回调
        success(){
            this.chooseSuccess(this.filesArr)
        },
        // 禁止事件传播和阻止默认事件
        dragenter(e) {
            e.stopPropagation();
            e.preventDefault();
        },
        dragover(e) {
            e.stopPropagation();
            e.preventDefault();
        } ,
        // 拖拽上传
        drop(e) {
            e.stopPropagation();
            e.preventDefault();
            let files = e.dataTransfer.files;
            // 文件检查
            if(this.numlimit&&files.length+this.filesArr.length>this.numlimit){
                return this.Fail({errortype:'num',errordata:this.$refs.file.files.length+this.filesArr.length})
            }
            if(this.sizelimit){
                let size = 0
                this.filesArr.forEach(item=>{
                    size+=item.size
                })
                files.forEach(item => {
                    size+=item.size
                });
                if(size>this.sizelimit) return this.Fail({errortype:'size',errordata:size})
            }
            let arr = this.kindlimit.split(',').map(val=>val.replace(/\*/g,''))
            let flag = false
            files.forEach(item => {
                for (let index = 0; index < arr.length; index++) {
                    if(item.type.indexOf(arr[index])==-1){
                        flag = true
                        break
                    }
                }
            });
            if(flag) return this.Fail({errortype:'type',errordata:'拖拽的文件类型有误'})
            // 文件添加
            this.filesArr = [...this.filesArr,...files]
            // 如果所选样式需要图片，添加图片地址
            if(this.type!=='default'){
                files.forEach(item => {
                    this.imagesArr.push(window.URL.createObjectURL(item))
                });
            }
            this.success()
        },
    }
}
</script>
<style lang="less" scoped>
.upload-box{
    position: relative;
    width: 360px;
}
.dragbox{
    background-color: #fff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    width: 360px;
    height: 180px;
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    .choose{
        font-size: 16px;
    }
}
.tip{
    color: #606266;
    font-size: 12px;
    margin-top: 7px;
    margin-bottom: 5px;
}
.choosebutton{
    margin-right: 20px;
}
// 默认样式
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

// 图片样式
.upload-ul-image{
    margin: 0;
    padding: 0;
    width: 100%;

    .imgbox{
        transition: all .4s;
        display: inline-block;
        list-style: none;
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        box-sizing: border-box;
        max-width: 140px;
        min-width: 140px;
        height: 140px;
        margin-right: 10px;
        margin-bottom: 10px;
        overflow:hidden;
    }

    .animatebox{
        position: relative;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        &::before{
            transition: all .4s;
            content:'';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        &:hover::before{
            background-color: rgba(0, 0, 0, .5);
        }
        .deletespan{
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            display: block;
            color: white;
            border: 1px solid white;
            padding: 3px;
            opacity: 0;
            z-index: -1;
            transition: all .4s;
        }
        &:hover .deletespan{
            opacity: 1;
            z-index: 1;
        }
    }
}
</style>
<template>
    <div class="component">
        <div class="sidebar">
            <ul class="sideul">
                <li class="sideli download" @click="goto('download')">安装</li>
                <li v-for="(item,index) in listArr"
                    :key="index"
                    class="sideli"
                    @click="goto(item.path)">{{item.name}}</li>
            </ul>
        </div>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listArr:[
                {name:'Link 文字链接',path:'/component/link'},
                {name:'Button 按钮',path:'/component/button'},
                {name:'Radio 单选框',path:'/component/radio'},
                {name:'Checkbox 多选框',path:'/component/checkbox'},
                {name:'Input 输入框',path:'/component/input'},
                {name:'Numberinput 计数器',path:'/component/numberinput'},
                {name:'Select 选择器',path:'/component/select'},
                {name:'Switch 开关',path:'/component/switch'},
                {name:'Badag 标记',path:'/component/badage'},
                {name:'Tag 标签',path:'/component/tag'},
                {name:'Upload 上传',path:'/component/upload'},
            ]
        };
    },
    methods:{
        goto(path){
            if(this.$router.history.current.path===path){
                return 0
            }
            this.$router.push(path)
        }
    },
}
</script>

<style lang="less" scoped>
.component{
    max-width: 1300px;
    height: 1000px;
    margin: 0 auto;
    display: flex;
}
.sidebar{
    width:240px;
}
.sideul{
    margin: 0;
    padding: 0;
}
.sideli{
    list-style: none;
    cursor: pointer;
    transition: .15s ease-out;
    height: 40px;
    line-height: 40px;
    -moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;

    &:hover{
        color: #409eff;
    }
}
.download{
    font-size: 20px;
    font-weight: 600;
}
.content{
    flex: 1;
}
</style>
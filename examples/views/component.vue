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
                {name:'link 文字链接',path:'/link'},
                {name:'button 按钮',path:'/button'},
            ]
        };
    },
    methods:{
        goto(path){
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
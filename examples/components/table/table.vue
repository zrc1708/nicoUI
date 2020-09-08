<template>
    <table class="mytable">
        <tr class="title">
            <th v-for="(item,index) in th" :key="index">{{item.name}}</th>
        </tr>
        <tr v-for="(item,index) in content" :key="index" class="body">
            <td v-for="(key,index) in th" :key="index">{{item[key.key]}}</td>
        </tr>
    </table>
</template>
<script>
export default {
    props:{
        th:{},
        content:{}
    }
}
</script>
<style lang="less" scoped>
.mytable{
    width: 100%;
    border-collapse: separate;
    box-sizing: border-box;
    border-collapse: collapse;

    th{
        border: 1px solid #e9e9e9;
        background: #f7f7f7;
        padding: 8px 16px;
    }
    td{
        border: 1px solid #e9e9e9;
        padding: 8px 16px;
    }
    .title{
        text-align: left;
        white-space: nowrap;
        color: #909399;
        font-weight: 400;
    }
    .body{
        color: #606266;
        font-size: 14px;
    }
}
</style>
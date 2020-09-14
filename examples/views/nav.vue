<template>
    <div class="page-container" v-highlight>
        <h2>Nav 导航</h2>
        <h3>横向导航基础用法</h3>
        <component-box :code='code1'>
            <!-- <div style="width:100%;background-color:#545c64">
                <ni-nav 
                    type="head" 
                    headBackgroundColor="#545c64"
                    backgroundHoverColor="#434a50"
                    fontColor="white">
                    <ni-nav-item index="1">首页</ni-nav-item>

                    <ni-nav-drop>
                        <span slot="droptitle">资金管理</span>
                        <ni-nav-item index="2">我的余额</ni-nav-item>

                        <ni-nav-drop>
                            <span slot="droptitle">资金操作</span>
                            <ni-nav-item index="3">存款</ni-nav-item>
                            <ni-nav-item index="4">取款</ni-nav-item>
                        </ni-nav-drop>
                    </ni-nav-drop>
                    
                    <ni-nav-drop>
                        <span slot="droptitle">个人中心</span>
                        <ni-nav-item index="5">我的信息</ni-nav-item>
                    </ni-nav-drop>
                </ni-nav>
            </div> -->
        </component-box>
        <h3>纵向导航基础用法</h3>
        <component-box :code='code2'>
            <!-- <div style="width:200px;background-color:#545c64">
                <ni-nav 
                    type="side" 
                    backgroundHoverColor="#434a50"
                    fontColor="white">
                    <ni-nav-item index="1">首页</ni-nav-item>

                    <ni-nav-drop>
                        <span slot="droptitle">资金管理</span>
                        <ni-nav-item index="2">我的余额</ni-nav-item>

                        <ni-nav-drop>
                            <span slot="droptitle">资金操作</span>
                            <ni-nav-item index="3">存款</ni-nav-item>
                            <ni-nav-item index="4">取款</ni-nav-item>
                        </ni-nav-drop>
                    </ni-nav-drop>
                    
                    <ni-nav-drop>
                        <span slot="droptitle">个人中心</span>
                        <ni-nav-item index="5">我的信息</ni-nav-item>
                    </ni-nav-drop>
                </ni-nav>
            </div> -->
        </component-box>
        <h3>无限套娃</h3>
        <component-box :code='code2'>
            <div style="width:200px;background-color:#545c64">
                <ni-nav 
                    type="side" 
                    backgroundHoverColor="#434a50"
                    fontColor="white">
                    <!-- <ni-nav-item index="1">首页</ni-nav-item> -->

                    <ni-nav-drop>
                        <span slot="droptitle">资金管理</span>
                        <ni-nav-item index="2">我的余额</ni-nav-item>

                            <ni-nav-drop>
                                <span slot="droptitle">售后服务</span>
                                <ni-nav-item index="3">联系客服</ni-nav-item>
                                <ni-nav-item index="4">退货</ni-nav-item>
                            </ni-nav-drop>

                        <ni-nav-drop showchildren>
                            <span slot="droptitle">资金操作</span>
                            <ni-nav-item index="3">存款</ni-nav-item>
                            <ni-nav-item index="4">取款</ni-nav-item>

                            <ni-nav-drop>
                                <span slot="droptitle">售后服务</span>
                                <ni-nav-item index="3">联系客服</ni-nav-item>
                                <ni-nav-item index="4">退货</ni-nav-item>
                            </ni-nav-drop>

                        </ni-nav-drop>
                    </ni-nav-drop>
                    
                    <!-- <ni-nav-drop>
                        <span slot="droptitle">个人中心</span>
                        <ni-nav-item index="5">我的信息</ni-nav-item>
                    </ni-nav-drop> -->
                </ni-nav>
            </div>
        </component-box>
    </div>
</template>

<script>
import componentbox from '../components/componentbox/conponemtbox'
import table from '../components/table/table'

export default {
    components:{
        'component-box':componentbox,
        'my-table':table
    },
    data(){
        return {
            code1:
``,
            code2:
``,
        }
    }
}
</script>

<style lang="less" scoped>

</style>
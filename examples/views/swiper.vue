<template>
    <div class="page-container" v-highlight>
        <h2>Swiper 轮播</h2>
        <h3>基础用法</h3>
        <component-box :code='code1'>
            <div class="swiper-box">
                <ni-swiper>
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
        </component-box>
        <h3>自动轮播</h3>
        <component-box :code='code2'>
            <div class="swiper-box">
                <ni-swiper autoplay>
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
        </component-box>
        <h3>按钮常显</h3>
        <component-box :code='code3'>
            <div class="swiper-box">
                <ni-swiper alwaysShowButton>
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
        </component-box>
        <h3>自定义标识按钮</h3>
        <p>标识按钮可以自定义颜色以及位置</p>
        <component-box :code='code4'>
            <div class="swiper-box">
                <ni-swiper 
                    marktype='right'
                    markColor='#409eff'>
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
        </component-box>

        <h3>Attributes</h3>
        <my-table :th='th' :content='content'></my-table>
        <h3>Events</h3>
        <my-table :th='th2' :content='content2'></my-table>
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
`<template>
    <div class="swiper-box">
        <ni-swiper>
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
</template>
<style lang="less" scoped>
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
</style>`,
            code2:
`<template>
    <div class="swiper-box">
        <ni-swiper autoplay>
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
</template>
<style lang="less" scoped>
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
</style>`,
            code3:
`<template>
    <div class="swiper-box">
        <ni-swiper alwaysShowButton>
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
</template>
<style lang="less" scoped>
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
</style>`,
            code4:
`<template>
    <div class="swiper-box">
        <ni-swiper 
            marktype='right'
            markColor='#409eff'>
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
</template>
<style lang="less" scoped>
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
</style>`,
            th:[{name:'属性',key:'name'},
                {name:'说明',key:'description'},
                {name:'类型',key:'type'},
                {name:'默认值',key:'default'}],
            content:[{
                name:'autoplay',
                description:'是否自动轮播',
                type:'boolean',
                default:'false'
            },{
                name:'autoplayTime',
                description:'自动轮播的时间间隔（毫秒）',
                type:'number',
                default:'300'
            },{
                name:'playTime',
                description:'轮播切换过度效果的时间（毫秒）',
                type:'number',
                default:'200'
            },{
                name:'alwaysShowButton',
                description:'是否一直显示按钮',
                type:'boolean',
                default:'false'
            },{
                name:'marktype',
                description:'标识按钮的位置，可选值有center,left,right',
                type:'string',
                default:'center'
            },{
                name:'markColor',
                description:'激活的标识按钮的颜色',
                type:'string',
                default:'white'
            }],
            th2:[{name:'事件名',key:'name'},
                {name:'说明',key:'description'},
                {name:'回调参数',key:'parameters'}],
            content2:[{
                name:'swiperClick',
                description:'点击轮播元素时触发',
                parameters:'点击元素的序号'
            },{
                name:'change',
                description:'轮播切换时触发',
                parameters:'新元素的序号'
            }],
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>
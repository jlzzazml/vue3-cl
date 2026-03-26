<template>
  <div class="tit">Tag 参数</div>
  <m-table :options="options"></m-table>
  <div class="tit">Tag 事件</div>
  <m-table :options="options2"></m-table>
</template>

<script setup>
import {reactive} from 'vue'
const state = reactive({
  options:{
    fileds:[
      {
        field:'attr',
        title:'参数',
        align:'center'
      },
      {
        field:'type',
        title:'类型',
        align:'center'
      },
      {
        field:'red',
        title:'说明',
        align:'center',
        width:'350px'
      },
      {
        field:'sel',
        title:'可选值',
        align:'center'
      },
      {
        field:'def',
        title:'默认值',
        align:'center'
      }
    ],
    datas:[
      {attr:'type',type:'String',red:'标签类型',sel:'default / primary / success / danger / warning / info',def:"default"},
      {attr:'size',type:'String',red:'标签尺寸',sel:'large / default /  small',def:"default"},
      {attr:'closable',type:'Boolean',red:'是否为可关闭',sel:'true / false',def:"false"},
      {attr:'disabled',type:'Boolean',red:'是否为禁用状态',sel:'true / false ',def:"false"},
      {attr:'color',type:'String',red:'自定义颜色',sel:'——',def:"——"},
      {attr:'round',type:'Boolean',red:'是否圆角',sel:'true / false ',def:"false"},  
    ]
  }
})
const {options} = state

const options2 = reactive({
    fileds:[
      {
        field:'event',
        title:'事件名',
        align:'center'
      },
      {
        field:'red',
        title:'说明',
        align:'center',
        width:'350px'
      },
      {
        field:'arrt',
        title:'回调参数',
        align:'center'
      },
    ],
    datas:[
      {event:'click',red:'点击标签时触发',arrt:'event'},
      {event:'close',red:'点击关闭按钮时触发',arrt:'event'},
    ]
})
</script>

<style lang="scss" scoped>
.tit{
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
}
</style>
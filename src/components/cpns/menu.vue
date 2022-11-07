<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 16:36:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-07 17:32:06
-->
<template>
  <div  class="menu">
    菜单
    <h2>{{ title }}</h2>
    <div>{{ dataList }}</div>
    <el-button type="primary" @click="onSend">{{ content }}</el-button>
  </div>
</template>

<script setup lang="ts">
interface IProps{
  title: string,
  dataList: number[]
}
const props = withDefaults(
  defineProps<IProps>(),
  { 
    title: '',
    dataList: () => [1]
  }
 )
 
const emits =  defineEmits(['menu-send'])
 
const msg = ref<string>("我是你儿子menu")
const olist = reactive<number[]>([6,6,6,7])
const content = ref<string>('hello world')
const onSend = () => {
  emits('menu-send', msg, 123)
}
const onChangeContent = () => {
  content.value = 'hello vue3'
}

defineExpose({
  msg,
  olist,
  onChangeContent
})
</script>

<style scoped lang="scss">
  .menu {
    width: 220px;
    border-right: 1px solid #ccc;
  }
</style>
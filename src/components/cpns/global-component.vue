<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-08 09:48:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 10:45:38
-->
<template>
  <div class="card app-container">
    <div class="card-header">
      <div class="card-header-title">{{title}}</div>
      <div class="card-header-subtitle">{{twoTitle}}</div>
    </div>
    <div v-if="contents" class="card-conten">
      {{contents}}
    </div>
  </div>
</template>

<script setup lang="ts">
interface cardData {
  title: string
  twoTitle: string
  contents: string
}
const props = withDefaults(defineProps<cardData>(), {
  title: '标题',
  twoTitle: '副标题',
  contents: '默认内容'
})
</script>

<style scoped lang="scss">
.card {
  &-header {
    display: flex;
    align-items: center;
    &-title {
      font-size: 24px;
    }
    &-subtitle {
      margin-left: 10px;
      font-size: 16px;
    }
  }
  &-conten {
    margin-top: 20px;
    box-shadow: 2px 2px 5px red inset, -2px -2px 5px red inset,;
  }
}
</style>
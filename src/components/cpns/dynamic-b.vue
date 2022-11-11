<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-08 16:43:46
 * @LastEditors: 
 * @LastEditTime: 2022-11-08 16:44:43
-->
<template>
	<div>我是B组件 {{ valueB }}</div>
	<div>{{ name }}</div>
</template>

<script setup lang="ts">
interface IProps {
	valueB: number
}
withDefaults(defineProps<IProps>(), {
	valueB: 222
})

const instance = getCurrentInstance()
const name = ref('1')

instance?.proxy?.$Bus.on('on-paifa', (data: any) => {
	name.value = data
})
</script>

<style scoped></style>

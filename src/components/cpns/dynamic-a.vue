<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-08 16:43:41
 * @LastEditors: 
 * @LastEditTime: 2022-11-08 16:44:31
-->
<template>
	<div>
		我是A组件
		<button @click="onSend">點我傳值</button>
		<button @click="sendEmit">派发事件</button>
	</div>
</template>

<script setup lang="ts">
const instance = getCurrentInstance()

const valueA = ref(1)

const emits = defineEmits(['send-a'])
const onSend = () => {
	emits('send-a', valueA.value)
}
const sendEmit = () => {
	instance?.proxy?.$Bus.emit('on-paifa', 'mitt 全局广播事件')
}
</script>

<style scoped></style>

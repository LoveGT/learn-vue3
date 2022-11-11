<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-11 11:11:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-11 11:17:57
-->
<template>
	<div class="a-div">
		<h3>我是AAA组件</h3>
		<h5 style="color: #fff">{{ tname }}</h5>
		<button @click="changeName">改变</button>
		<B></B>
	</div>
</template>

<script setup lang="ts">
const tname = ref<string>('我是你爸爸')
const name = provide('name', tname)
const changeName = () => {
	tname.value = '改变name---AAA'
}
</script>

<style scoped>
.a-div {
	width: 600px;
	height: 600px;
	background-color: red;
}
</style>

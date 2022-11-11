<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-11 11:11:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-11 11:17:57
-->
<template>
	<div class="c-div">
		<h3>我是CCC组件</h3>
		<h5 style="color: #fff">{{ name }}</h5>
		<button @click="changeName">改变</button>
	</div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
const name = inject<Ref<string>>('name')
const changeName = () => {
	name!.value = '改变name---CCC'
}
</script>

<style scoped>
.c-div {
	width: 400px;
	height: 400px;
	background-color: blue;
}
</style>

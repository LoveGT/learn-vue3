<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-11 11:11:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-11 11:17:57
-->
<template>
	<div class="b-div">
		<h3>我是BBB组件</h3>
		<h5 style="color: #fff">{{ name }}</h5>

		<button @click="changeName">改变</button>
		<C />
	</div>
</template>

<script setup lang="ts">
import C from './C.vue'
import { Ref } from 'vue'
const name = inject<Ref<string>>('name')
const changeName = () => {
	name!.value = '改变name---BBB'
}
</script>

<style scoped>
.b-div {
	width: 500px;
	height: 500px;
	background-color: green;
}
</style>

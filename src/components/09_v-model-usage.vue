<template>
	<div class="app-container">
		<div>我是改变的布尔== {{ bool }}</div>
		<button @click="changeBool">change bool</button>
		<br />
		<br />
		<br />

		<button @click="changeModel">显示隐藏</button>
		<br /><br />
		<button @click="changeTitle">改变标题</button>
		<p>{{ dialogTitle }}</p>
	</div>
	<VModel v-model.clear="isShow" v-model:title.custom="dialogTitle"></VModel>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import VModel from './cpns/model.vue'
const bool = ref(false)
const dialogTitle = ref('默认标题')
const isShow: Ref<boolean> = ref(true)
const changeBool = () => {
	bool.value = !bool.value
}
const changeModel = () => {
	isShow.value = !isShow.value
}
const changeTitle = () => {
	dialogTitle.value = '新标题'
}
</script>

<style scoped></style>

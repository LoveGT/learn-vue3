<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 16:32:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 10:10:27
-->
<template>
	<div class="layout">
		<Menu ref="menuRef" :data-list="list" title="察颜悦色" @menu-send="onSend"></Menu>
		<div class="layout-right">
			<header>我是头部</header>
			<article>我是内容</article>
			<el-button type="danger" @click="useSon">子组件方法的调用</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import Menu from './cpns/menu.vue'

let list = ref<number[]>([1, 2, 3, 4, 5, 6])
const menuRef = ref<InstanceType<typeof Menu>>()

const onSend = (msg: Ref<string>, num: number) => {
	console.log(msg.value, num, 'value')
}
const useSon = () => {
	menuRef.value?.onChangeContent()
	list.value = menuRef.value!.olist
}
onMounted(() => {
	console.log(menuRef.value, 'InstanceType')
})
</script>

<style scoped lang="scss">
.layout {
	display: flex;
	height: 100%;
	overflow: hidden;
	&-right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
}
</style>

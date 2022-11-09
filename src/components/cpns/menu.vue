<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 16:36:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 16:24:04
-->
<template>
	<div class="menu">
		菜单
		<h2>{{ title }}</h2>
		<div>{{ dataList }}</div>
		<el-button type="primary" @click="onSend">{{ content }}</el-button>
		<Tree :tree-list="treeList" @on-click="treeClick"></Tree>
	</div>
</template>

<script setup lang="ts">
import Tree from './tree.vue'

import { ITreeData } from '../../typings/tree-data'

interface IProps {
	title: string
	dataList: number[]
}
withDefaults(defineProps<IProps>(), {
	title: '',
	dataList: () => [1]
})
const emits = defineEmits(['menu-send'])

const treeList = reactive<ITreeData[]>([
	{
		name: 'item1',
		nums: 2,
		children: [
			{
				name: 'item1-1',
				nums: 3,
				children: [
					{
						name: 'item1-1-1',
						children: [
							{
								name: 'item1-1-1-1'
							},
							{
								name: 'item1-1-1-2',
								children: []
							}
						]
					}
				]
			},
			{
				name: 'item2',
				children: [
					{
						name: 'item2-1',
						children: [
							{
								name: 'item2-1-1'
							},
							{
								name: 'item2-1-2',
								nums: 5
							}
						]
					}
				]
			},
			{
				name: 'item3'
			},
			{
				name: 'item4',
				nums: 66,
				children: [
					{
						name: 'item3-1'
					}
				]
			}
		]
	}
])

const treeClick = (item) => {
	console.log(item, 'item')
}
const msg = ref<string>('我是你儿子menu')
const olist = reactive<number[]>([6, 6, 6, 7])
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

<!--
 * @Descripttion: 递归组件学习
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-08 15:26:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 16:39:23
-->
<template>
	<div class="tree app-container" style="margin-left: 10px">
		<div
			class="tree-item"
			@click.stop="itemClick(item)"
			v-for="(item, index) in treeList"
			:key="index"
		>
			{{ item.name }}
			<Tree
				@on-click="itemClick"
				v-if="item?.children?.length"
				:treeList="item.children"
			></Tree>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ITreeData } from '../../typings/tree-data'

interface IProps {
	treeList?: ITreeData[]
}

withDefaults(defineProps<IProps>(), {
	treeList: () => [
		{
			name: 'gaotao',
			children: []
		}
	]
})
const emits = defineEmits(['on-click'])

const itemClick = (item: ITreeData) => {
	emits('on-click', item)
}
</script>

<style scoped>
.tree-item {
	cursor: pointer;
	padding-bottom: 10px;
}
</style>

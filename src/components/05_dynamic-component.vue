<!--
 * @Description: 动态组件学习
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-08 16:40:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 17:36:48
-->
<template>
	<div class="content app-container">
		<div class="components-active">
			<div class="tab-box">
				<div
					class="tab-box-item"
					:class="{ active: currentTab.name === item.name }"
					@click="onChange(item)"
					v-for="item in comps"
					:key="item.name"
				>
					{{ item.name }}
				</div>
			</div>
		</div>
		<KeepAlive>
			<component :is="currentTab.comName"></component>
		</KeepAlive>
	</div>
</template>

<script setup lang="ts">
import DynamicA from './cpns/dynamic-a.vue'
import DynamicB from './cpns/dynamic-b.vue'
import DynamicC from './cpns/dynamic-c.vue'
interface ITbabs {
	name: string
	comName: any
}

const comps = reactive<ITbabs[]>([
	{
		name: '组件A',
		comName: markRaw(DynamicA)
	},
	{
		name: '组件B',
		comName: markRaw(DynamicB)
	},
	{
		name: '组件C',
		comName: markRaw(DynamicC)
	}
])
let currentTab = reactive<ITbabs>({
	comName: markRaw(DynamicA),
	name: '组件A'
})
const onChange = (item: ITbabs) => {
	currentTab.comName = item.comName
	currentTab.name = item.name
}
</script>

<style scoped lang="scss">
.content {
	.tab-box {
		display: flex;
		&-item {
			width: 200px;
			background-color: #ededed;
			border: 1px solid red;
			text-align: center;
			cursor: pointer;
			transition: all 1s;
			&:not(:last-child) {
				border-right: none;
			}
			&.active {
				transition: all 1s;
				background: deepskyblue;
				color: #fff;
			}
		}
	}
}
</style>

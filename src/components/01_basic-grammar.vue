<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 15:20:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-09 15:48:59
-->
<template>
	<div>
		<div v-html="message"></div>

		<h2 v-if="flag" class="h2-h">布尔值</h2>
		<el-button type="primary" @click="handleShowFn">click</el-button>

		<p :style="'color:' + ost.pColor">
			<span>{{ ost.pNum }}<span v-show="ost.pShow">显示</span></span>
		</p>

		<p>{{ shallowr.name }}</p>
		<p>{{ shallowr.friends.name }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const message = '<h1>我是真男人</h1>'

let flag = ref<boolean>(false)
const colors = ref<string>('deepskyblue')
const handleShowFn = () => {
	flag.value = !flag.value
	colors.value = 'deeppink'
	ost.pColor = 'red'
	shallowr.value = {
		name: 'gaotao',
		friends: {
			name: 'kobe',
			age: 30
		}
	}
	// shallowr.value.name = '2'
	// shallowr.value.friends.name = 'gaoao'
	// triggerRef(shallowr)
}

interface IStyles {
	pColor: string
	pShow: boolean
	pNum: number
}
let ost = reactive<IStyles>({
	pColor: 'green',
	pShow: true,
	pNum: 666
})

let shallowr = shallowRef({
	name: '123',
	friends: {
		age: 16,
		name: 'gaotao'
	}
})

// customRef的使用
// const myRef = <T>(value: T) => {
// 	return customRef((track, trigger) => {
// 		return {
// 			get() {
// 				track()
// 				return value
// 			},
// 			set(newVal: T) {
// 				value = newVal
// 				trigger()
// 			}
// 		}
// 	})
// }
// const msgs = myRef<String>('我是你爸爸')
// const msgs2 = myRef<any>('12')
</script>

<style scoped>
.h2-h {
	color: v-bind(colors);
}
</style>

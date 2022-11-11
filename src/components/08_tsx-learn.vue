<template>
	<div class="app-container">
		<TsxComp :title="title" @on-item="itemClick"></TsxComp>
	</div>
</template>

<script setup lang="ts">
import TsxComp from './cpns/tsx-comp'
interface IProps {
	title: string
}
withDefaults(defineProps<IProps>(), {
	title: 'title'
})
const itemClick = (value: number) => {
	console.log(value, 'click')
}
</script>

<style scoped lang="scss">
//
</style>

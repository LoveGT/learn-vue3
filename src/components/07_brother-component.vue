<template>
	<div class="app-container">
		<DynamicA @send-a="onSend"></DynamicA>
		<DynamicB :valueB="valueF"></DynamicB>
		<div>{{ false }}</div>
	</div>
</template>

<script setup lang="ts">
import DynamicA from './cpns/dynamic-a.vue'
import DynamicB from './cpns/dynamic-b.vue'
const valueF = ref<number>(0)
const flag = ref(false)
const onSend = (value: number) => {
	valueF.value = value
}
</script>

<style scoped lang="scss">
//
</style>

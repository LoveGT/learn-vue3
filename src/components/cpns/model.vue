<template>
	<div class="v-model-css" v-if="modelValue">
		<div class="header">
			<h4>{{ title }}</h4>
			<span @click="close">X</span>
		</div>
		<input type="text" v-model="inputVal" />
	</div>
</template>

<script setup lang="ts">
interface IProps {
	title: string
	modelValue: boolean
	modelModifiers?: {
		clear: boolean
	}
	titleModifiers?: {
		custom: boolean
	}
}
const props = defineProps<IProps>()
const emits = defineEmits(['update:modelValue', 'update:title'])
const inputVal = ref('')

watch(inputVal, (newVal, oldVal) => {
	if (props.titleModifiers?.custom) {
		console.log(props.titleModifiers?.custom, 'props.titleModifiers?.custom');
		newVal = newVal.charAt(0).toUpperCase() + newVal.slice(1)
	}
	emits('update:title', newVal)
})

const close = () => {
	console.log(props.modelModifiers?.clear, 'props.modelModifier?.clear')
	if (props.modelModifiers?.clear) {
		inputVal.value = ''
	}
	emits('update:modelValue', false)
}
</script>

<style scoped lang="scss">
.v-model-css {
	width: 400px;
	height: 400px;
	background: #eee;
	margin: 0 auto;
	padding: 20px;
}

.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid;

	h4 {
		margin: 0;
	}
}
</style>

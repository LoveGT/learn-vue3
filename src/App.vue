<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-07 14:50:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 16:49:43
-->
<template>
	<!-- <BasicGrammar></BasicGrammar> -->
	<ComponentValueTransfer></ComponentValueTransfer>
	<UseScss></UseScss>
	<GlobalComponent></GlobalComponent>
	<DynamicComponent></DynamicComponent>
	<!-- <ProviderInject></ProviderInject> -->
	<BrotherComponent></BrotherComponent>
	<TsxLearn title="我是TSX"></TsxLearn>
	<VModelUsage></VModelUsage>
</template>

<script setup lang="ts">
// import BasicGrammar from './components/01_basic-grammar.vue';
import ComponentValueTransfer from './components/02_component-value-transfer.vue'
import UseScss from './components/04_use-scss.vue'
import DynamicComponent from './components/05_dynamic-component.vue'
// import ProviderInject from './components/06_provider-inject.vue'
import BrotherComponent from './components/07_brother-component.vue'
import TsxLearn from './components/08_tsx-learn.vue'
import VModelUsage from './components/09_v-model-usage.vue'
</script>
<style scoped></style>

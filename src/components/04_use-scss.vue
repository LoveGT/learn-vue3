<!--
 * @Descripttion: 
 * @version: 
 * @Author: tanchongzheng
 * @Date: 2022-11-08 10:12:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-08 11:09:43
-->
<template>
	<div class="app-container">
		useSon
		<p class="paragraph">paragraph</p>
		<button class="btn">点击亿下</button>
		<button class="btn-primary">主题色按钮</button>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$color-green: #0f0;
$color-green: #f55 !default;

$bgColor: $color-green;

@mixin border-radius($radius: 5px, $borderRadius: 2px) {
	border: {
		radius: $radius;
		top: $borderRadius solid #ff0;
		bottom: $borderRadius solid #f00;
		left: $borderRadius solid #00f;
		right: $borderRadius solid #888;
	}
}
@mixin btns($w: 150px, $h: 20px, $fz: 14px) {
	width: $w;
	height: $h;
	font-size: $fz;
	line-height: 1;
	background: $color-green;
	outline: none;
	@include border-radius(5px, 1px);
	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: #fff;
	}
}
.paragraph {
	// background: $bgColor;
	color: $color-green;
	@include border-radius(10px, 1px);
}

.btn {
	@include btns();
}
.btn-primary {
	@extend .btn;
	background-color: deepskyblue;
	color: #f55;
	@extend .paragraph;
}
</style>

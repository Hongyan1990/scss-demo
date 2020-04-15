<template>
	<div class="my-div">
		{{name}}
		<p>这是p标签</p>
		<span>span span</span>
		<div class="box">hoo</div>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
				name: 'HELLO SCSS'
			}
		}
	}
</script>

<style lang="scss">
	@import './style';
	$value: 12;
	$color: lighten(#cc3, 10%);
	$direction: left;
	@mixin border-radius ($radius) {
		border-radius: $radius;
		-ms-border-radius: $radius;
		-moz-border-radius: $radius;
		-webkit-border-radius: $radius;
	}
	.text {
		text-align: center;
	}
	.my-div {
		color: green;
		font-size: $value * 1px;
		p {
			width: (100%/3);
			background-color: $color;
			opacity: 0.5;
		}
		span {
			color: red;
			// float: $direction;
		} 
		.box {
			width: 50px;
			height: 50px;
			background-color: $color;
			@include border-radius(10px);
			@extend .text
		}
	}
</style>
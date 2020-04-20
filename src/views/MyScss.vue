<template>
	<div class="my-div">
		{{name}}
		<p class="my-p">这是p标签</p>
		<span>span span</span>
		<div class="box">hoo</div>
		<div class="shadow">shadow</div>
		<div class="card">
			<div class="header">
				<h1>1</h1>
			</div>
			<div class="container">
				<p>20200417</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MyScss',
		data () {
			return {
				name: 'HELLO SCSS123'
			}
		}
	}
</script>

<style lang="scss">
	$value: 12;
	$color: lighten(#cc3, 10%);
	$direction: left;
	@mixin border-radius ($radius) {
		border-radius: $radius;
	}
	.text {
		text-align: center;
	}
	.my-div {
		color: green;
		font-size: $value * 1px;
		margin: 20px;
		p.my-p {
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
			// background-color: $color;
			@include border-radius(10px);
			@extend .text;
		}
		.shadow {
			@extend .box;
			margin-top: 20px;
			width: 100px;
			// background-image: linear-gradient(to bottom right, #e66465, #9198e5);
			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
		}
		.card {
			
		}
	}
</style>
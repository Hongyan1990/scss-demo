<template>
	<div class="container">
		<h3>Css 2D转换</h3>
		<h4>translate 方法</h4>
		<div class="box">
			<div class="sc-translate"></div>
		</div>
		<h4 class="top50">rotate 方法</h4>
		<div class="box">
			<div class="sc-rotate"></div>
		</div>
		<h4 class="top50">scale 方法</h4>
		<div class="box">
			<div class="sc-scale"></div>
		</div>
		<h4 class="top50">skew 方法</h4>
		<div class="box">
			<div class="sc-skew"></div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Css2D'
	}
</script>
<style lang="scss" scoped>
	$color: rgba(76, 175, 80, 0.5);
	.box {
		width: 100px;
		height: 100px;
		background-color: $color;
		text-align: center;
		color: white;
	}
	.top50 {
		margin: 50px 0px;
	}
	.container {
		.sc-translate {
			@extend .box;
			transform: translate(50px, 50px);
		}
		.sc-rotate {
			@extend .box;
			transform: rotate(45deg);
		}
		.sc-scale {
			@extend .box;
			transform: scale(1.5, 1.5)
		}
		.sc-skew {
			@extend .box;
			transform: skew(30deg, 25deg)
		}
	}
</style>
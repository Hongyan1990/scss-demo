<template>
	<div class="container">
		<h3>Css 3D</h3>
		<div class="wraper">
			<div class="box front">front</div>
			<div class="box back">back</div>
			<div class="box top">front</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Css3D'
	}
</script>
<style lang="scss" scoped>
	.box {
		width: 200px;
		height: 200px;
		position: absolute;
		opacity: 0.3;
	}
	.wraper {
		position: relative;
		transform-style: preserve-3d;
		width: 200px;
		height: 200px;
		margin: 0 auto;
		transform: rotateY(-45deg) rotateX(30deg);
	}
	.front {
		transform: rotateX(90deg) translate3d(36px, -69px, -118px);
		background-color: red;
	}
	.back {
		background-color: blue;
	}
	.top {
		transform: rotateY(90deg) translate3d(100px, 0px, 100px);
		background-color: yellow;
	}
</style>
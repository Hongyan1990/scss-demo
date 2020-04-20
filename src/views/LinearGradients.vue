<template>
	<div>
		<h3>linear-gradients</h3>
		<div class="container">
			<div class="demo1"></div>
		</div>
	</div>
</template>
<script>
	name: 'LinearGradients'
</script>
<style lang="scss" scoped>
	.container {
		margin: 20px;
		.demo1 {
			width: 100%;
			height: 100px;
			background-image: linear-gradient(110deg, red, yellow 49%, #2cb5e8 84%);
		}
	}
</style>
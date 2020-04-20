<template>
	<div>
		<h3>Transition</h3>
		<div class="box box1"></div>
		<div class="box box2"></div>
		<div class="box box3"></div>
		<div class="box box4"></div>
	</div>
</template>
<script>
	export default {
		name: 'Transition'
	}
</script>
<style lang="scss" scoped>
	.box {
		width: 100px;
		height: 100px;
		background-color: rgba(76, 175, 80, 0.5);
		transition: all 2s;
		margin-bottom: 20px;
	}
	.box1:hover {
		transform: rotate(45deg);
	}
	.box2:hover {
		transform: scale(1.5, 1.5)
	}
	.box3:hover {
		width: 300px;
	}
	.box4:hover {
		background-color: rgba(76, 175, 80, 1);
	}
</style>
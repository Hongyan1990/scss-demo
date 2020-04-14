<template>
	<div class="my-div">
		{{name}}
		<p>这是p标签</p>
		<span>span span</span>
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
	$value: 12px;
	$color: yellow;
	.my-div {
		color: green;
		font-size: $value;
		p {
			width: (100%/3);
			background-color: $color;
		}
		span {
			color: red;
		} 
	}
</style>
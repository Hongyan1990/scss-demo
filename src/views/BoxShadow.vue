<template>
	<div>
		<h3>box-shadow</h3>
		<div class="card-text">
			<div class="header">
				<h1>1</h1>
			</div>
			<div class="container">
				<p>20200420</p>
			</div>
		</div>
		<div class="card-img">
			<div class="header">
				<img :src="imgURl" alt="hello">
			</div>
			<div class=container>
				<p>20200420</p>
			</div>
		</div>
	</div>
</template>
<script>
	import imgURl from '../static/rock600x400.jpg'
	export default {
		name: 'BoxShadow',
		data () {
			return {
				imgURl
			}
		},
		methods: {
			showName () {
				
			}
		}
	}
</script>
<style lang="scss">
	$shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19);
	.card {
		width: 200px;
		text-align: center;
		box-shadow: $shadow;
		margin: 20px;
	}
	.card-text {
		@extend .card;
		.header {
			padding: 10px;
			background-color: #4CAF50;
			color: #fff;
			font-size: 40px; 
		}
		.container {
			padding: 10px;
		}
	}
	.card-img {
		@extend .card;
		.header img {
			width: 100%;
		}
		.container {
			padding: 10px;
		}
	}
</style>
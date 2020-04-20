<template>
	<div class="my-box">
		<div class="menus">
			<router-link to="/scss" >scss</router-link>
			<router-link to="/shadow" >box-shadow</router-link>
			<router-link to="/gradients" >linear-gradients</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>	
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
	.menus {
		display: flex;
	    flex-direction: column;
	    align-items: center;
	    width: 150px;
	    border: 1px solid #ccc;
	    height: 100%;
	    float: left;
	    box-shadow: 0px 0px 3px 5px #ca979730;
    	min-height: 200px;
	}
	.content {
		float: right;
    	width: calc(100% - 160px);
	}
</style>
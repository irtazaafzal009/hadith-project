<template>
	<div>
		<div>
			<img style="width: 100%; height: 400px; background-size: cover;" src="https://placekitten.com/380/200">
		</div>
		<h2> {{post.title}} </h2>
	</div>
</template>
<script type="text/javascript">
	export default {
	data(){
		return{
			id: this.$route.params.id
		}
	},
	computed:{
      post(){
      	return this.$store.state.posts
      }
	},
	mounted() {
	this.$store.dispatch('allUsers'),
	console.log(this.id)
  },
}
</script>
<style type="text/css">
	
</style>
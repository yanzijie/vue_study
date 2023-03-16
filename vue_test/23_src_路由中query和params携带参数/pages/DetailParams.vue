<template>
	<ul>
    <li>显示params参数,消息编号：{{$route.params.id}}</li>
    <li>显示params参数,消息标题：{{$route.params.title}}</li>
	</ul>
</template>

<script>
	export default {
		name:'Detail',
		mounted() {
			// console.log(this.$route)
		},
	}
</script>
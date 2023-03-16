<template>
	<ul>
    <!--从组件实例对象中拿到路由的query参数-->
		<li>显示query参数,消息编号：{{$route.query.id}}</li>
		<li>显示query参数,消息标题：{{$route.query.title}}</li>
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
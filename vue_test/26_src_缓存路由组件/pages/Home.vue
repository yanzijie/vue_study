<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<!-- 缓存多个路由组件 -->
			<!-- <keep-alive :include="['News','Message']"> -->
				
			<!-- 缓存一个路由组件 -->
      <!-- keep-alive include="News": 缓存 News 组件的数据，跳转之后回来，里面的数据还在(不触发组件的销毁) -->
      <!-- keep-alive include="['AAA','BBB']" 这样写的话，从AAA和BBB组件切换，都不会触发组件的销毁 -->
			<keep-alive include="News">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home',
		/* beforeDestroy() {
			console.log('Home组件即将被销毁了')
		}, */
		/* mounted() {
			console.log('Home组件挂载完毕了',this)
			window.homeRoute = this.$route
			window.homeRouter = this.$router
		},  */
	}
</script>
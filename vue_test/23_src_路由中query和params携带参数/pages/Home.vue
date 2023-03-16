<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
      <!--里面这些样式不用自己写，在public目录的index.html中只要引入了bootstrap，就会生效了-->
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
      <!-- 指定组件的呈现位置 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name:'Home'
	}
</script>
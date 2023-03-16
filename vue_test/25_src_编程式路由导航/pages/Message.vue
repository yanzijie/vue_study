<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 跳转路由并携带params参数，to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

				<!-- 跳转路由并携带params参数，to的对象写法 -->
				<router-link :to="{
					name:'xiangqing',
					query:{
						id:m.id,
						title:m.title
					}
				}">
					{{m.title}}
				</router-link>
        <!-- 两种路由跳转, push和replace是两种对历史记录的操作方式 -->
				<button @click="pushShow(m)">push查看</button>
				<button @click="replaceShow(m)">replace查看</button>
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data() {
			return {
				messageList:[
					{id:'001',title:'消息001'},
					{id:'002',title:'消息002'},
					{id:'003',title:'消息003'}
				]
			}
		},
		methods: {
      // push的方式进行路由调整
			pushShow(m){
				this.$router.push({
					name:'xiangqing',
					query:{
						id:m.id,
						title:m.title
					}
				})
			},
      // replace的方式进行路由调整
			replaceShow(m){
				this.$router.replace({
					name:'xiangqing',
					query:{
						id:m.id,
						title:m.title
					}
				})
			}
		},
	}
</script>
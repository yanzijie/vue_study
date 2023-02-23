<template>
	<div>
<!--    给name使用插件里面定义的全局过滤器-->
		<h2>学校名称：{{name | mySlice}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="test">点我测试一个hello方法</button>
	</div>
</template>

<script>
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		methods: {
			test(){
        // 调用插件里面，给原型对象添加的hello方法
				this.hello()
			}
		},
	}
</script>

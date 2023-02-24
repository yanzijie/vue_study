<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="atguigu">学生性别：{{sex}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		}
	}
</script>

<style lang="less" scoped>
  //lang=“less” 可以敲层级关系的样式
  /*scoped样式作用:只作用于当前的界面,让样式在局部生效，防止冲突*/
	.demo{
		background-color: pink;
		.atguigu{
			font-size: 40px;
		}
	}
</style>

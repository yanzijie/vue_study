<template>
	<div>
    <!--
      ref属性：
        被用来给元素或子组件注册引用信息（id的替代者）
        应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（vc）
        使用方式：
        打标识：<h1 ref="xxx"></h1> 或 <School ref="xxx"></School>
        获取：this.$refs.xxx
    -->
		<h1 v-text="msg" ref="title"></h1>
    <!--加了ref="xxx",就可以用this.$refs.xxx 拿到这个标签或者这个组件的实例对象了-->
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>

<script>
	//引入School组件
	import School from './components/School'

	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>

<template>
	<div>
    <!--
      props配置项：
        功能：让组件接收外部传过来的数据
        传递数据：<Demo name="xxx"/>
        :age="18+2" 在变量前面加冒号表示这个变量 '=' 的是一个表达式 18+1就等于19，就是把19传了过去
    -->
		<Student name="李四" sex="女" :age="18+2"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>

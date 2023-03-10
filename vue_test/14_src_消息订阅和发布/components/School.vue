<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
  // 引入消息订阅发布的库
  import pubsub from "pubsub-js"

	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
    methods:{
      //msgName: 消息名称
      helloHandler(msgName,data) {
        console.log("有人发布了hello消息，订阅到消息之后的回调函数执行了,收到数据:",data)
      }
    },
		mounted() {
      // 订阅消息 hello (Student组件会发布)
      // msgName: 消息名称，data: 订阅到的数据
      // this.pubId：就是直接挂到了组件实例对象身上
      // this.pubId = pubsub.subscribe("hello", function (msgName,data){
      //   //console.log(this) // 这个this不是组件实例对象, 因为在调用的库的函数中, 使用箭头函数就可以了
      //   console.log("有人发布了hello消息，订阅到消息之后的回调函数执行了,收到数据:",data)
      // })

      // this.pubId = pubsub.subscribe("hello", (msgName,data)=>{
      //   console.log(this) // 这个this就是组件实例对象了
      // })

      // 回调函数写在methods中，清晰一点
      this.pubId = pubsub.subscribe("hello", this.helloHandler)
		},
    // 组件销毁之前
		beforeDestroy() {
      // 取消订阅
      pubsub.unsubscribe(this.pubId)
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
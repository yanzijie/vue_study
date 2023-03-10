<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
        <!--给MyHeader组件添加自定义事件，事件名为addTodo, 事件回调函数也是 addTodo-->
				<MyHeader @addTodo="addTodo"/>
				<MyList :todos="todos"/>
				<MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
			</div>
		</div>
	</div>
</template>

<script>
  // 引入消息订阅发布的库
  import pubsub from "pubsub-js"

	import MyHeader from './components/MyHeader'
	import MyList from './components/MyList'
	import MyFooter from './components/MyFooter.vue'

	export default {
		name:'App',
		components:{MyHeader,MyList,MyFooter},
		data() {
			return {
				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
        // xxx || [] : xxx为真就用，否则就用空数组代替，避免null报错
				todos:JSON.parse(localStorage.getItem('todos')) || []
			}
		},
		methods: {
      //添加一个todo的自定义事件, todoObj是从子组件接收的数据
			addTodo(todoObj){
				this.todos.unshift(todoObj)
			},
      //myItem中勾选或取消勾选一个todo, id是从子组件接收的数据
      //子组件使用了这个checkTodo函数，就相当于回调了这里
			checkTodo(id){
				this.todos.forEach((todo)=>{
					if(todo.id === id) todo.done = !todo.done
				})
			},
			//myItem中删除一个todo, 第一个参数: 消息名称
			deleteTodo(_,id){
        // filter不影响原数组，所以还得重新赋值一下，返回所有不等于传进来的参数 id 的元素, 就等于把选中那个id的数据忽略了
				this.todos = this.todos.filter( todo => todo.id !== id )
			},
      //全选或者取消全选(全不选), done:是否全选
			checkAllTodo(done){
				this.todos.forEach((todo)=>{
					todo.done = done
				})
			},
			//清除所有已经完成的todo
			clearAllTodo(){
				this.todos = this.todos.filter((todo)=>{
					return !todo.done
				})
			},
      // value: 修改的值
      updateTodo(id, value){
        this.todos.forEach((todo)=>{
          if(todo.id === id) {
            todo.title = value
          }
        })
      },
		},
		watch: {
      // 监视todos, 发生改变就调用handler方法
			todos:{
        // 深度监视，可以监视对象中的每一项的改变, 改变了就赋值给 todos
				deep:true,
				handler(value){
					localStorage.setItem('todos',JSON.stringify(value))
				}
			}
		},
    mounted() {
      // 给全局事件总线$bus绑定事件
      this.$bus.$on("checkTodo", this.checkTodo)
      this.$bus.$on("updateTodo", this.updateTodo)
      // 使用消息订阅来订阅删除事件
      this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo)
    },
    beforeDestroy() {
      // 解绑事件，避免占用事件名称
      this.$bus.$off("checkTodo")
      this.$bus.$off("updateTodo")
      // 取消订阅
      pubsub.unsubscribe(this.pubId)
    }
  }
</script>

<style>
	/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
  .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid #568aa1;
    margin-right: 5px;
  }
  .btn-edit:hover {
    color: #fff;
    background-color: #568aa1;
  }
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>

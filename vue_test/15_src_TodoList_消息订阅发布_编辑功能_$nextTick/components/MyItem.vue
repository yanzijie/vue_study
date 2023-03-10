<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span v-show="!todo.isEdit">{{todo.title}}</span>
      <!--@blur="" 输入框失去焦点事件-->
      <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
		</label>
    <!--公共样式在App组件中-->
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
	</li>
</template>

<script>
  // 引入消息订阅发布的库
  import pubsub from "pubsub-js"

	export default {
		name:'MyItem',
		//声明接收todo
		props:['todo'],
		methods: {
			//勾选or取消勾选
			handleCheck(id){
        // 通知App的数据有变化了
        // 触发全局事件总线的事件,传id
				this.$bus.$emit("checkTodo",id)
			},
			//删除
			handleDelete(id){
				if(confirm('确定删除吗？')){
          // 触发全局事件总线的事件,传id
          //this.$bus.$emit("deleteTodo",id)

          // 发布deleteTodo消息，带上数据: id
          pubsub.publish("deleteTodo",id)
				}
			},
      // 编辑, 整个函数走完，vue才会重新渲染模版
      handleEdit(todo){
        // isEdit: true显示编辑框，false显示文字
        // todo.isEdit = true  // 这样写 isEdit 不是响应式的, vue拿不到set函数去渲染
        // 需要像下面这样写
        if(todo.hasOwnProperty("isEdit")){
          // hasOwnProperty() 判断对象身上有没有某个属性
          todo.isEdit = true  // 有直接改
        }else{
          this.$set(todo, "isEdit", true) // todo身上没有isEdit属性，追加
        }
        // 点编辑的时候获取焦点
        // $nextTick中的回调函数，在dom节点更新完成之后再执行
        this.$nextTick(function (){
          this.$refs.inputTitle.focus()
        })
      },
      // 编辑时候的input框，失去焦点事件, 真正执行修改操作
      handleBlur(todo,e){
        todo.isEdit = false
        // e.target.value 事件目标的值
        if(!e.target.value.trim()){
          // e.target.value 没有数据
          alert("输入不能为空")
          return
        }
        this.$bus.$emit("updateTodo",todo.id,e.target.value)
      }
		},
	}
</script>

<style scoped>
	/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}
</style>
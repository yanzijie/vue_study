<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--给子组件传数据-->
        <MyHeader :addTodo="addTodo"/>
        <!--给子组件传数据-->
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllDone="clearAllDone"/>
      </div>
    </div>
  </div>
</template>

<script>
  //引入组件
  import MyHeader from "@/components/MyHeader";
  import MyList from "@/components/MyList";
  import MyFooter from "@/components/MyFooter";

  // 暴露组件
  export default {
    name: 'App',
    //注册组件
    components: {
      MyHeader,
      MyList,
      MyFooter,
    },
    data() {
      // 这些事 MyList组件需要的东西，放在App中，通过父传子传进去
      return {
        // 待办的事情
        todos: [
          {id:"001", title: "干饭", done:true},
          {id:"002", title: "睡觉", done:false},
          {id:"003", title: "打工", done:true},
        ]
      }
    },
    methods: {
      //添加一个todo, todoObj是从子组件接收的数据
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      //勾选或取消勾选一个todo, id是从子组件接收的数据
      //子组件使用了这个checkTodo函数，就相当于回调了这里
      checkTodo(id) {
        this.todos.forEach((todo)=>{
          if(todo.id === id){
            todo.done = !todo.done
          }
        })
      },
      //删除一个todo
      deleteTodo(id){
        // filter不影响原数组，所以还得重新赋值一下，返回所有不等于传进来的参数 id 的元素
        this.todos = this.todos.filter( todo => todo.id !== id )
      },
      //全选或者取消全选(全不选), done:是否全选
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done
        })
      },
      //清除所有已经勾选的
      clearAllDone(){
        // filter不影响原数组，所以还得重新赋值一下，返回所有没有勾选的，就实现过滤所有已经勾选的
        this.todos = this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    }
  }
</script>

<!--组件化编码流程-->
<!--1: 实现静态组件，先用静态组件实现页面效果-->
<!--2: 写动态数据-->
<!--3: 写交互方法-->

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



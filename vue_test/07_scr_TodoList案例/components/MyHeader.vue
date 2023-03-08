<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
  // nanoid是一个随机生成id的库，npm i nanoid， nanoid()直接返回一个唯一id
  import {nanoid} from "nanoid"

  export default {
    name: "MyHeader",    // 组件名字
    //接收从App传递过来的addTodo
    props:['addTodo'],
    data() {
      return {
        // title双向绑定，用于收集input框输入的数据
        title:''
      }
    },
    methods: {
      add(e) {
        // trim() 判断有没有数据，没有返回false
        if(!this.title.trim()) return alert("输入不能为空")
        // 将用户输入封装成一个对象
        const todoObj = {id:nanoid(),title:this.title, done:false}
        //通知父组件App去添加一个todo对象， 把todoObj传过去
        this.addTodo(todoObj)
        //清空输入, 重新输入
        this.title = ''
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>

<template>
  <li>
    <label>
      <!--勾选框 checked:默认选框是todoObj.done的状态-->
      <!--@change发送改变事件-->
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>

      <!--下面这样写也行，v-model是双向数据绑定，会影响传进来的对象，这样的话不用写 handleCheck 函数了-->
      <!--但不建议这样写，这样写就改了props接收的数据了，违反原则-->
      <!--<input type="checkbox" v-model="todoObj.done"/>-->

      <!--span里面装的是每一个具体的待办事项-->
      <span>{{todoObj.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
  </li>
</template>

<script>
  export default {
    // 组件名字
    name: "MyItem",
    // 接收父组件传递过来的数据和函数
    props:["todoObj","checkTodo","deleteTodo"],
    methods:{
      //勾选or取消勾选
      handleCheck(id){
        // 通知App的数据有变化了
        // 回调父元素的 checkTodo 函数，传id
        this.checkTodo(id)
      },
      //删除这个事项
      handleDelete(id){
        if(confirm("确认删除吗?")){
          this.deleteTodo(id)
        }
      }
    }
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

  /*鼠标悬浮在li上面时，button显示*/
  li:hover button{
    display: block;
  }
</style>

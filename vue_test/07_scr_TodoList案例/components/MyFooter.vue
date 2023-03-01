<template>
  <!--total等于0的时候，不显示这个结构-->
  <div class="todo-footer" v-show="total">
    <label>
      <!--checkAll: 点击选中，那么list中所有框都要被选中-->
      <!--<input type="checkbox" :checked="isAll" @change="checkAll"/>-->

      <!--或者用下面这种更简洁的办法,但isAll计算属性得写全, checkBox点击只有true和false,然后传给计算属性-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <!--todos.length 表示todos的长度-->
      <!--todoTotal,total 是计算属性-->
			<span>已完成{{doneTotal}}</span> / 全部{{total}}
		</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",    // 组件名字
  // 接收父组件传进来的数据
  props:["todos","checkAllTodo","clearAllDone"],
  computed:{
    // 下面是计算属性的简写，有一个弊端，就是这个计算属性只能被读取，不能修改，因为没实现setter
    total(){
      return this.todos.length
    },
    doneTotal(){
      let count = 0
      this.todos.forEach((todo)=>{
        if(todo.done){
          count++
        }
      })
      return count
    },
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0
      },
      set(value){
        this.checkAllTodo(value)
      }
    }
  },
  methods:{
    checkAll(e){
      // console.log("check status:",e.target.checked)
      this.checkAllTodo(e.target.checked)
    },
    // 清除全部已勾选
    clearAll(){
      if(confirm("是否确定清除?")){
        this.clearAllDone()
      }
    }
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>

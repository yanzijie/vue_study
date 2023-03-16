<template>
  <div>
    <h1>当前求和为: {{sum}}</h1>
    <!-- select表示下拉框 -->
    <!-- <select v-model.number="n"> 是 Vue.js 框架中的一个指令，
    用于创建下拉列表（dropdown list）并将选中的值与 Vue 实例的数据进行双向绑定。
    其中 .number 修饰符表示将绑定的值转换为数字类型。
    例如，当用户选择下拉列表中的一个选项时，该值会被自动更新到 n 变量中，
    并且如果在 Vue 实例中更改了 n 的值，则下拉列表的选中项也会相应地更新。 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <br>
    <button @click="increment"> + </button>
    <button @click="decrement"> - </button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: "Count",
    data(){
      return{
        n:1, //用户选择的数字
        sum:0 //当前的和
      }
    },
    methods:{
      // 给sum加上用户选择的 n
      increment(){
        this.sum += this.n
      },

      // 给sum减去用户选择的 n
      decrement(){
        this.sum -= this.n
      },

      incrementOdd(){
        if(this.sum % 2){
          this.sum += this.n
        }
      },

      incrementWait(){
        setTimeout(this.add,1000)
      },

      add(){
        this.sum += this.n
      }
    }
  }
</script>

<style scoped>
  button{
    margin-top: 5px;
    margin-left: 5px;
  }
</style>
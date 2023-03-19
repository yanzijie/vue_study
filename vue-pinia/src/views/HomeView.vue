<script setup>
  import TheWelcome from '../components/TheWelcome.vue'
  // 引入仓库
  import {useAgeStore,useCounter} from '@/stores/index.js'
  // 接收仓库
  const ageStore = useAgeStore()
  const counterStore = useCounter()
  // console.log(ageStore)
  // console.log(counterStore)

  // 修改store的state中的数据
  // 方式一：单个修改
  function changeAge(){
    ageStore.age++
  }
  // 方式二：批量修改,借助store的API
  function changeData(){
    // 方式1：传入对象修改
    // ageStore.$patch({
    //   age:80,
    //   name:'张三丰',
    //   // 解构出数组，然后给数组添加元素
    //   arr:[...ageStore.arr,5]
    // })

    // 方式2：传入函数修改, 建议使用这种方式, state就是store中定义的state
    ageStore.$patch((state)=>{
      state.age = 66
      state.name = '老李'
      state.arr.push(6)
    })
  }

</script>

<template>
  <main>
<!--    <TheWelcome />-->

    <!--使用pinia store-->
    <h2>ageStore.name: {{ ageStore.name }}</h2>
    <h2>ageStore.arr: {{ ageStore.arr }}</h2>
    <h2>ageStore.age: {{ ageStore.age }}</h2>
    <h2>ageStore.gettersAge: {{ ageStore.gettersAge }}</h2>
    <h2>ageStore.gettersName: {{ ageStore.gettersName }}</h2>
    <h2>ageStore.gettersOtherStore: {{ ageStore.gettersOtherStore }}</h2>
    <button @click="ageStore.addAge">使用store中的方法-修改age的值</button>
    <br>
    <button @click="changeAge">使用组件自定义的方法-修改age的值</button>
    <br>
    <button @click="changeData">使用组件自定义的方法-修改store中state的值</button>

    <h2>counterStore.counter: {{ counterStore.counter }}</h2>
    <h2>counterStore.gettersCounter: {{ counterStore.gettersCounter }}</h2>
    <button @click="counterStore.addCounter">修改age的值</button>
  </main>
</template>

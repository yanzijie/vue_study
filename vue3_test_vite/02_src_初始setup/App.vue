<template>
  <h2>姓名: {{name}}</h2>
  <h2>年龄: {{age}}</h2>
  <h2>性别: {{sex}}</h2>
  <button @click="sayHello">vue3说话</button>
  <br>
  <br>
  <button @click="sayWelcome">vue2说话</button>
  <br>
  <br>
  <button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在Vue3的配置中去读取Vue2中的数据、方法</button>

</template>

<script>

export default {
  name: 'App',

  //如果写了data, 又写了setup，以setup的数据为主，但这两个不要混着写


  //这里是vue2的写法
  data() {
    return {
      sex:'男',
      a:100
    }
  },
  methods: {
    sayWelcome(){
      alert('欢迎来到尚硅谷学习')
    },
    test1(){
      console.log(this.sex)
      // 尝试读取setup的数据, 能读取到
      console.log(this.name)
      console.log(this.age)
      console.log(this.sayHello)
    }
  },

  // setup是所有组合式API"表演的舞台"
  // 这里只是测试一下setup，不做响应式
  setup(){
    let name = '张三'
    let age = 19

    function sayHello(){
      alert(`我是 ${name}, 我${age}岁了!`)
    }

    function test2(){
      console.log(name)
      console.log(age)
      console.log(sayHello)
      // 尝试读取vue2的data中的数据, 读取不到
      console.log(this.sex)
      console.log(this.sayWelcome)
    }

    // 这里不返回，模版中就找不到
    return {
      name,
      age,
      sayHello,
      test2
    }
  }
}
</script>

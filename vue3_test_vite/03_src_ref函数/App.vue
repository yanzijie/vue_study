<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    //数据
    // ref() 只能定义响应式类型的数据，啥叫响应式类型：页面渲染跟随数据变化
    // 加了ref(), 字段就变成了对象，vue就会检测这个变量的变化(有了set和get函数)，只要一变化，页面就会重新渲染
    let name = ref('张三')
    let age = ref(18)
    // ref的对象类型
    let job = ref({
      type:'前端工程师',
      salary:'30K'
    })

    //方法
    function changeInfo(){
      // name = 'xxxx'  如果上面不写 ref，这里改后值虽然改了，但是页面不会刷新, 但是模版不用.value
      // ref加工之后，name变成了一个对象，.value才能拿到值, 并且修改
      name.value = '李四'
      age.value = 48
      console.log(job.value)
      // ref的对象信息直接拿字段名就可以改，不用.value
      job.value.type = 'UI设计师'
      job.value.salary = '60K'
      console.log(name,age)
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

